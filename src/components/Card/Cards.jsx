import { useSelector } from "react-redux";
import {
  car01,
  car02,
  car03,
  car04,
  car05,
  car06,
  car07,
  car08,
  car09,
  car10,
  car11,
  car12,
  car13,
  car14,
  car15,
  car16,
  car17,
  car18,
  car19,
  car20,
  car21,
  car22,
  car23,
  car24,
  car25,
} from "../../assets/images/";
import Card from "./Card";
import UnavailableCard from "./UnavailableCard";

const Cards = () => {
  const { loading, cars, filteredCars } = useSelector((state) => ({
    ...state.cars,
  }));

  const image = [
    car01,
    car02,
    car03,
    car04,
    car05,
    car06,
    car07,
    car08,
    car09,
    car10,
    car11,
    car12,
    car13,
    car14,
    car15,
    car16,
    car17,
    car18,
    car19,
    car20,
    car21,
    car22,
    car23,
    car24,
    car25,
  ];

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
      style={{ marginBottom: 100, marginTop: 100 }}
    >
      {!filteredCars.length
        ? cars.map((car) => {
            const imgCarName = car.image.split("/")[2];
            return (
              <Card
                car={car}
                key={car.id}
                img={image.filter((img) => {
                  const splitedImg = img.split("/")[4];
                  if (imgCarName === splitedImg) {
                    return img;
                  }
                })}
              />
            );
          })
        : filteredCars.map((car) => {
            const imgCarName = car.image.split("/")[2];
            return (
              <Card
                car={car}
                key={car.id}
                img={image.filter((img) => {
                  const splitedImg = img.split("/")[4];
                  if (imgCarName === splitedImg) {
                    return img;
                  }
                })}
              />
            );
          })}
    </div>
  );
};

export default Cards;
