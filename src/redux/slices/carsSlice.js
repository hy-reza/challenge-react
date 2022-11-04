import * as cars from "../services/carsService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const retriveCars = createAsyncThunk("cars/getCars", async () => {
  try {
    const res = await cars.getAll();
    return res;
  } catch (error) {
    console.info(error);
  }
});

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    loading: false,
    cars: [],
    filteredCars: [],
  },
  reducers: {
    carsFilter: (state, action) => {
      let {
        capacity = 2,
        driverType = "any",
        pickUpDate,
        pickUpTime,
      } = action.payload;
      const newDate = new Date(`${pickUpDate}T${pickUpTime}Z`);

      if (driverType === "true") {
        driverType = "any";
      }

      let filterResult = [];

      if (driverType === "any") {
        filterResult = state.cars.filter(
          (car) =>
            new Date(car.availableAt) > newDate &&
            car.capacity >= capacity &&
            car.available
        );

        if (!filterResult.length) filterResult = "unavailable";
        return {
          ...state,
          filteredCars: filterResult,
        };
      }

      filterResult = state.cars.filter(
        (car) =>
          new Date(car.availableAt) > newDate &&
          car.driverType.includes(driverType) &&
          car.capacity >= capacity &&
          car.available
      );

      if (!filterResult.length) filterResult = "unavailable";

      return {
        ...state,
        filteredCars: filterResult,
      };
    },
  },
  extraReducers: {
    [retriveCars.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retriveCars.fulfilled]: (state, action) => {
      const driverType = ["lepas kunci", "dengan supir"];
      return {
        ...state,
        cars: [
          ...action.payload.data.map((car) => ({
            ...car,
            driverType: [
              `${driverType[[Math.floor(Math.random() * driverType.length)]]}`,
              `${driverType[[Math.floor(Math.random() * driverType.length)]]}`,
            ],
          })),
        ].map((car) => {
          if (
            car.driverType.includes("lepas kunci") &&
            car.driverType.includes("dengan supir")
          ) {
            return { ...car, driverType: [...car.driverType, "any"] };
          }
          return car;
        }),
        loading: false,
      };
    },
    [retriveCars.rejected]: (state, action) => {
      return { ...state, loading: false };
    },
  },
});

export const { carsFilter } = carsSlice.actions;

export default carsSlice.reducer;
