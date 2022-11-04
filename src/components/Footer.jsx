import icon_mail from "../assets/images/icon_mail.png";
import icon_instagram from "../assets/images/icon_instagram.png";
import icon_twitter from "../assets/images/icon_twitter.png";
import icon_twitch from "../assets/images/icon_twitch.png";
import icon_facebook from "../assets/images/icon_facebook.png";

const Footer = () => {
  return (
    <>
      {/* footer */}
      <footer className="container-fluid pt-5 mb-4" id="footer">
        <div className="container-lg">
          <div className="row mt-5 ">
            <div className="col-md mb-2">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-md mb-2">
              <p>
                <a href="#services" className="text-decoration-none text-dark">
                  Our services
                </a>
              </p>
              <p>
                <a href="#whyus" className="text-decoration-none text-dark">
                  Why Us
                </a>
              </p>
              <p>
                <a
                  href="#testimonial"
                  className="text-decoration-none text-dark"
                >
                  Testimonial
                </a>
              </p>
              <p>
                <a href="#faq" className="text-decoration-none text-dark">
                  FAQ
                </a>
              </p>
            </div>
            <div className="col-md mb-2">
              <p>Connect with us</p>
              <a href="https://www.facebook.com">
                <img
                  src={icon_facebook}
                  className="mx-1"
                  alt="Facebook"
                />
              </a>
              <a href="https://www.instagram.com">
                <img
                  src={icon_instagram}
                  className="mx-1"
                  alt="Instagram"
                />
              </a>
              <a href="https://www.Twitter.com">
                <img
                  src={icon_twitter}
                  className="mx-1"
                  alt="Twitter"
                />
              </a>
              <a href="https://www.gmail.com">
                <img src={icon_mail} className="mx-1" alt="Mail" />
              </a>
              <a href="https://www.twitch.com">
                <img
                  src={icon_twitch}
                  className="mx-1"
                  alt="Twitch"
                />
              </a>
            </div>
            <div className="col-md mb-2">
              <p>Copyright Binar 2022</p>
              <a className="navbar-bran low-shadow" href="#">
                <span className="logo d-block" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* end of footer */}
    </>
  );
};

export default Footer;
