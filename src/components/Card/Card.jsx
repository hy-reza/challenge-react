import React from "react";
import toRupiah from "@develoka/angka-rupiah-js";

const Card = ({ car }) => {
  return (
    <div
      className="card mx-3 my-3 "
      style={{ width: "25rem", borderRadius: "10px" }}
      key={car.id}
    >
      <img
        // src={img}
        loading="lazy"
        src={`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/${car.image}`}
        className="img-fluid"
        alt="{car.manufacture}"
        style={{
          objectFit: "cover",
          height: 250,
          borderRadius: "10px 10px 0px 0px",
        }}
      />
      <div className="card-body">
        <p className="card-text">
          {car.manufacture}/{car.model}
        </p>
        <p className="fw-bold fs-5">
          Rp{" "}
          {toRupiah(car.rentPerDay, {
            symbol: "",
            floatingPoint: 0,
            spaceBeforeUnit: true,
            formal: true,
          })}{" "}
          /hari
        </p>
        <p style={{ height: 70 }}>{car.description}</p>
        <div className="d-flex align-items-center my-2">
          <i className="bi bi-people" />
          <p className="my-0 mx-2">{car.capacity} orang</p>
        </div>
        <div className="d-flex align-items-center my-2">
          <i className="bi bi-gear" />
          <p className="my-0 mx-2">{car.transmission}</p>
        </div>
        <div className="d-flex align-items-center my-2">
          <i className="bi bi-calendar-check" />
          <p className="my-0 mx-2">Tahun {car.year}</p>
        </div>
        <div className=" align-items-center my-2">
          <div className="d-flex mb-2">
            <i className="bi bi-key" />
            <div>
              <p className="my-0 mx-2">Tipe Driver</p>
              <ul className="list-group list-group-horizontal-md mt-1 ms-2">
                {[...new Set(car.driverType)]
                  .filter((tipe) => tipe !== "any")
                  .map((tipe) => (
                    <li
                      className="border rounded  me-2 mt-2 p-2"
                      key={tipe + new Date().getTime()}
                      style={{
                        listStyle: "none",
                        backgroundColor: "#EBEBEB",
                        color: "#393939",
                        padding: "1px",
                      }}
                    >
                      <small style={{ textSize: "1px", color: "gray" }}>
                        {tipe}
                      </small>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <button className="btn btn-success mt-2 w-100">Pilih Mobil</button>
      </div>
    </div>
  );
};

export default Card;
