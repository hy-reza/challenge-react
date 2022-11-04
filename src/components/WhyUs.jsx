import icon_24hrs from "../assets/images/icon_24hrs.png";
import icon_complete from "../assets/images/icon_complete.png";
import icon_price from "../assets/images/icon_price.png";
import icon_professional from "../assets/images/icon_professional.png";

const WhyUs = () => {
  return (
    <>
      {/* why Us? section */}
      <section className="whyus container-fluid " id="whyus">
        <div className="container-lg pt-5">
          <h2 className="whyus-title fs-3 fw-bold pt-5">Why Us?</h2>
          <p className="whyus-title">Mengapa harus pilih Binar Car Rental?</p>
          <div className="whyus-row row g-5 d-flex justify-content-between ">
            <div
              className="col-md-4 card low-shadow p-0"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-offset="300"
            >
              <div className="card-body card-body_yellow">
                <img className="card-img" src={icon_complete} />
                <h5 className="card-title fw-bold pt-3 pb-2">Mobil Lengkap</h5>
                <p className="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>

            <div
              className="col-md-4 card low-shadow p-0"
              data-aos="flip-left"
              data-aos-delay="300"
              data-aos-offset="300"
            >
              <div className="card-body card-body_red">
                <img className="card-img" src={icon_price} />
                <h5 className="card-title fw-bold pt-3 pb-2">Harga Murah</h5>
                <p className="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>

            <div
              className="col-md-4 card low-shadow p-0"
              data-aos="flip-left"
              data-aos-delay="500"
              data-aos-offset="300"
            >
              <div className="card-body card-body_blue">
                <img className="card-img" src={icon_24hrs} />
                <h5 className="card-title fw-bold pt-3 pb-2">Layanan 24 Jam</h5>
                <p className="card-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
            <div
              className="col-md-4 card low-shadow p-0"
              data-aos="flip-left"
              data-aos-delay="600"
              data-aos-offset="300"
            >
              <div className="card-body card-body_green">
                <img className="card-img" src={icon_professional} />
                <h5 className="card-title fw-bold pt-3 pb-2">
                  Sopir Profesional
                </h5>
                <p className="card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of why Us? section */}
    </>
  );
};

export default WhyUs;
