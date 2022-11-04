import React from "react";
import HeroImage from "../assets/images/img_car.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Hero = ({buttonCTA}) => {

  return (
    <>
      {/* end of hero section */}
      <main
        className="hero container-fluid pt-5 mb-5 px-2 position-relative"
        id="hero"
      >
        <div className="hero-row container-lg row m-auto p-0 ">
          <div className="hero-left col-md-6 p-0 d-flex flex-column justify-content-center px-2">
            <h1 className="fw-bold text-capitalize">
              Sewa & Rental Mobil Terbaik di Kawasan Malang
            </h1>
            <p className="fw-light mr-auto w-75 mt-3">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            {buttonCTA ? (
              <Link to="/cars">
                <button
                  type="button"
                  className="btn btn-cta btn-success mt-1 fw-bold"
                >
                  Mulai Sewa Mobil
                </button>
              </Link>
            ) : null}
          </div>
          <div className="hero-right col-md-6 hero-right">
            <img
              src={HeroImage}
              className="hero-img position-absolute "
              alt="car"
            />
          </div>
        </div>
      </main>
      {/* end of hero section */}
    </>
  );
};

export default Hero;
