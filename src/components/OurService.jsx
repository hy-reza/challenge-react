import imgService1 from '../assets/images/img_service-1.png';
import imgService2 from '../assets/images/img_service-2.png';


const OurService = () => {
  return (
    <>
      {/* our services section */}
      <section className="services container-fluid d-inline" id="services">
        {/* row container */}
        <div className="services-row container-lg row m-auto  overflow-hidden">
          {/* service left content */}
          <div
            className="col-md-6 d-flex p-0 position-relative mb-5"
            data-aos="fade-right"
            data-aos-offset="320"
            data-aos-delay="800"
            data-aos-duration="2000"
          >
            {/* scary woman image */}
            <img
              src={imgService1}
              className="services-img1 img-fluid ms-auto pe-5  end-0 top-0"
              alt="smiling-woman-toping"
              data-aos="zoom-in"
              data-aos-offset="320"
              data-aos-delay="800"
              data-aos-duration="2000"
            />
            <img
              src={imgService2}
              className="services-img2 img-fluid ms-auto pe-5 position-absolute end-0 top-0"
              alt="smiling-woman"
            />
          </div>
          {/* service right content */}
          <div
            className="col-md-6 fw-bold d-flex flex-column justify-content-center p-0 "
            data-aos="fade-left"
            data-aos-offset="320"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            {/* title  */}
            <h3 className="fw-bold">
              Best Car Rental for any kind of trip in Malang!
            </h3>
            {/* description */}
            <p className=" fw-light pt-3">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            {/* list */}
            <ul className="services-list position-relative" id="services-list">
              <li
                className="services-list-item fw-light fs-7"
                data-aos="fade-left"
                data-aos-delay="1200"
                data-aos-offset="210"
                data-aos-duration="500"
              >
                <span className="services-list-item_spacer">
                  Sewa Mobil Dengan Supir di Malang 12 Jam
                </span>
              </li>
              <li
                className="services-list-item fw-light fs-7"
                data-aos="fade-left"
                data-aos-delay="1500"
                data-aos-offset="200"
                data-aos-duration="500"
              >
                <span className="services-list-item_spacer">
                  Sewa Mobil Lepas Kunci di Malang 24 Jam
                </span>
              </li>
              <li
                className="services-list-item fw-light fs-7"
                data-aos="fade-left"
                data-aos-delay="1700"
                data-aos-offset="190"
                data-aos-duration="500"
              >
                <span className="services-list-item_spacer">
                  Sewa Mobil Jangka Panjang Bulanan
                </span>
              </li>
              <li
                className="services-list-item fw-light fs-7"
                data-aos="fade-left"
                data-aos-delay="1900"
                data-aos-offset="180"
                data-aos-duration="500"
              >
                <span className="services-list-item_spacer">
                  Gratis Antar - Jemput Mobil di Bandara
                </span>
              </li>
              <li
                className="services-list-item fw-light fs-7"
                data-aos="fade-left"
                data-aos-offset="170"
                data-aos-delay="2100"
                data-aos-duration="500"
              >
                <span className="services-list-item_spacer">
                  Layanan Airport Transfer / Drop In Out
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurService;
