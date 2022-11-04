import img_photo1 from "../assets/images/img_photo-1.png";
import img_photo2 from "../assets/images/img_photo-2.png";
import OwlCarousel from "react-owl-carousel";
import { useRef } from "react";

const Testimonial = () => {
  const carousel = useRef();

  return (
    <>
      {/* testimonial section */}
      <section
        className="testimonial container-fluid p-0 pt-5"
        id="testimonial"
      >
        <div className="container-fluid p-0 pt-5">
          <center>
            <h2 className="fs-3 fw-bold">Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </center>

          <OwlCarousel
            ref={carousel}
            autoplay
            className="owl-theme"
            dots={false}
            loop
            center={true}
            margin={10}
            dotsSpeed={500}
            autoplayTimeout={4000}
            autoplayHoverPause={true}
            lazyLoad
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 2,
              },
            }}
          >
            <div className="item">
              <div className="row">
                <div className="col-md-3 text-center my-auto d-flex align-center justify-content-center">
                  <img
                    src={img_photo1}
                    className="testimonial-image testimonial-image rounded-circle"
                    alt="GambarPhoto1"
                  />
                </div>
                <div className="col-md d-flex flex-column align-center justify-content-center">
                  <div className="star">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime, incidunt odit? Exercitationem earum officia est.
                    Dolore nobis totam quia dolores ad velit tempora accusamus
                    maiores eligendi, illo quidem modi fugit.
                  </p>
                  <p className="user fw-bold">John Dee 32, Turen</p>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="row">
                <div className="col-md-3 text-center my-auto d-flex align-center justify-content-center">
                  <img
                    src={img_photo2}
                    className="testimonial-image rounded-circle"
                    alt="GambarPhoto2"
                  />
                </div>
                <div className="col-md d-flex flex-column align-center justify-content-center">
                  <div className="star">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime, incidunt odit? Exercitationem earum officia est.
                    Dolore nobis totam quia dolores ad velit tempora accusamus
                    maiores eligendi, illo quidem modi fugit.
                  </p>
                  <p className="user fw-bold">John Dee 32, Sedayu</p>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="row">
                <div className="col-md-3 text-center my-auto d-flex align-center justify-content-center">
                  <img
                    src={img_photo2}
                    className="testimonial-image rounded-circle"
                    alt="GambarPhoto3"
                  />
                </div>
                <div className="col-md d-flex flex-column align-center justify-content-center">
                  <div className="star">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis necessitatibus aspernatur alias ab! Molestiae in
                    dolores voluptates alias odit. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Lorem, ipsum.
                  </p>
                  <p className="user fw-bold">Handy, Malang</p>
                </div>
              </div>
            </div>
          </OwlCarousel>

          <div className="container">
            <div className="row mt-3">
              <div className="col text-center">
                <button
                  onClick={() => {
                    carousel.current.prev();
                  }}
                  className="btn btn-success rounded-circle btn-left mx-2"
                  type="button"
                >
                  <i
                    className="bi bi-chevron-left p-0"
                    style={{ fontWeight: "bold" }}
                  />
                </button>

                <button
                  onClick={() => {
                    carousel.current.next();
                  }}
                  className="btn btn-success rounded-circle btn-right mx-2"
                  type="button"
                >
                  <i
                    className="bi bi-chevron-right p-0"
                    style={{ fontWeight: "bold" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
