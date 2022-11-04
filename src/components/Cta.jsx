import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <>
      {/* CTA banner section */}
      <section className="cta container-fluid " id="cta">
        <div className="container lg cta-banner mx-auto text-center d-flex flex-column high-shadow">
          <div>
            <h1 className="fw-bold">Sewa Mobil di Malang Sekarang</h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <Link to="/cars">
              <button
                type="button"
                href="./cars.html"
                className="btn btn-success mt-1 fw-bold fs-7"
              >
                Mulai Sewa Mobil
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* end of CTA banner section */}
    </>
  );
};

export default Cta;
