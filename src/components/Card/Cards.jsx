import { useSelector } from "react-redux";
import Card from "./Card";
import UnavailableCard from "./UnavailableCard";

const Cards = () => {
  const { loading, cars, filteredCars } = useSelector((state) => ({
    ...state.cars,
  }));

  if (loading) {
    return (
      <div
        id="cars-container"
        className="container d-flex flex-wrap justify-content-center"
        style={{ marginBottom: 100, marginTop: 100 }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (filteredCars === "unavailable") {
    return <UnavailableCard />;
  }

  return (
    <div
      id="cars-container"
      className="container d-flex flex-wrap justify-content-center"
      style={{ marginBottom: 10, marginTop: 10 }}
    >
      {!filteredCars.length
        ? cars.map((car) => {
            return <Card car={car} key={car.id} />;
          })
        : filteredCars.map((car) => {
            return <Card car={car} key={car.id} />;
          })}
    </div>
  );
};

export default Cards;
