import React from "react";
import "./Footer.css";
import shiptruck from "../Images/Free_Shipping_Container_Mockup_4--5 1.png";
import footerlogo from "../Images/Rectangle (1).svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";


function Footer() {
  return (
    <div>
      <div className="container-fluid footer-div1">
        <div className="container footer-div2">
         

          <div className="footer-div3 w-100">
            <div className="row">
              <div className="col-lg-6 col-12 d-lg-none d-block position-relative">
                <img
                  src={shiptruck}
                  className="footer-truck-img img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-12 d-flex justify-content-center">
                <div>
                  <h1 className="footer-text1">Read To Get Started?</h1>
                  <h1 className="footer-text2">
                    Talk to <br />
                    us today
                  </h1>
                  <a href="tel:+16403004266">
                    <div className="footer-btn1">+1 640 300 4266</div>
                  </a>
                </div>
              </div>

              <div className="col-6 d-lg-block d-none position-relative">
                <img
                  src={shiptruck}
                  className="footer-truck-img img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>




          <div className="footer-sec2-div1 mx-auto">
            <Link>
              <div className="d-flex align-items-center justify-content-center">
                <img src={footerlogo} alt="" />
                <h1 className="footer-usa-text1">
                  AMERICAN <br />
                  MOVERS <br />
                  LLC
                </h1>
              </div>
            </Link>
            
            <h1 className="footer-usa-text2 text-center">
              A project of BullBrothers
            </h1>

            <div className="footer-sec2-div2">
              <Link to="/about">
                <p className="footer-usa-text3">About</p>
              </Link>
              <HashLink
                to="/#service"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
              >
                <p className="footer-usa-text3">Services</p>
              </HashLink>

              <HashLink
                to="/#trucktypes"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
              >
                <p className="footer-usa-text3">Truck Types</p>
              </HashLink>

              <Link to="/how-to-start">
                <p className="footer-usa-text3">How to Start</p>
              </Link>
              <Link to="/shippers">
                <p className="footer-usa-text3">Shippers</p>
              </Link>
              <HashLink
                to="/truck-dispatch#faq"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
              >
                <p className="footer-usa-text3">FAQ</p>
              </HashLink>
              <Link to="/contact">
                <p className="footer-usa-text3">Contact Us</p>
              </Link>
            </div>

            <div className="footer-sec2-div2">
              <a href="tel:+16403004266">
                <div className="footer-usa-btn1">Call Us</div>
              </a>
              <a href="mailto:americanmovers1llc@gmail.com">
                <div className="footer-usa-btn2">Email</div>
              </a>
              <a href="https://wa.me/12123806144" target='_blank'>
                <div className="footer-usa-btn3">Whatsapp</div>
              </a>
            </div>

            <h1 className="footer-usa-text44 text-center">
              Northumberland, Pennsylvania, 17857 USA
            </h1>

            <div className="d-flex justify-content-center">
              <a href='https://www.instagram.com/americanmovers777/' target="_blank">

                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="118"
                height="34"
                viewBox="0 0 118 34"
                fill="none"
                className="footer-social-media-svg1"
              >
                <path
                  d="M62.1962 0.65828C63.4002 0.65366 64.6042 0.665761 65.8079 0.694579L66.128 0.706129C66.4975 0.719328 66.8622 0.735827 67.3027 0.755627C69.0582 0.838124 70.2561 1.11531 71.3071 1.52285C72.396 1.94194 73.3134 2.50952 74.2307 3.42689C75.0695 4.25121 75.7186 5.24834 76.1331 6.34894C76.5406 7.39995 76.8178 8.59946 76.9003 10.355C76.9201 10.7939 76.9366 11.1602 76.9498 11.5298L76.9597 11.8498C76.989 13.053 77.0016 14.2565 76.9976 15.4599L76.9993 16.6908V18.8522C77.0033 20.0562 76.9907 21.2603 76.9613 22.4639L76.9514 22.784C76.9382 23.1536 76.9217 23.5183 76.9019 23.9588C76.8194 25.7143 76.5389 26.9122 76.1331 27.9632C75.72 29.065 75.0707 30.0629 74.2307 30.8869C73.4057 31.7256 72.4081 32.3747 71.3071 32.7893C70.2561 33.1968 69.0582 33.474 67.3027 33.5565C66.8622 33.5763 66.4975 33.5928 66.128 33.606L65.8079 33.6159C64.6042 33.6452 63.4002 33.6579 62.1962 33.6539L60.9654 33.6555H58.8056C57.6016 33.6596 56.3976 33.6469 55.194 33.6176L54.8739 33.6077C54.4822 33.5935 54.0906 33.577 53.6992 33.5582C51.9436 33.4757 50.7458 33.1952 49.6932 32.7893C48.5921 32.3757 47.5949 31.7264 46.7712 30.8869C45.9314 30.0624 45.2817 29.0646 44.8672 27.9632C44.4596 26.9122 44.1824 25.7143 44.0999 23.9588C44.0816 23.5673 44.0651 23.1757 44.0504 22.784L44.0422 22.4639C44.0118 21.2603 43.998 20.0563 44.001 18.8522V15.4599C43.9963 14.2565 44.0084 13.053 44.0373 11.8498L44.0488 11.5298C44.062 11.1602 44.0785 10.7939 44.0983 10.355C44.1808 8.59781 44.458 7.4016 44.8655 6.34894C45.2803 5.2478 45.9313 4.25094 46.7728 3.42854C47.5959 2.58831 48.5926 1.93793 49.6932 1.52285C50.7458 1.11531 51.942 0.838124 53.6992 0.755627L54.8739 0.706129L55.194 0.697879C56.3971 0.667475 57.6005 0.653724 58.804 0.65663L62.1962 0.65828ZM60.5001 8.908C59.407 8.89254 58.3218 9.09448 57.3075 9.50209C56.2931 9.9097 55.3699 10.5148 54.5915 11.2824C53.8131 12.0499 53.1949 12.9644 52.773 13.9729C52.3511 14.9814 52.1339 16.0637 52.1339 17.1569C52.1339 18.2501 52.3511 19.3324 52.773 20.3409C53.1949 21.3493 53.8131 22.2639 54.5915 23.0314C55.3699 23.7989 56.2931 24.4041 57.3075 24.8117C58.3218 25.2193 59.407 25.4212 60.5001 25.4058C62.688 25.4058 64.7863 24.5366 66.3334 22.9895C67.8805 21.4424 68.7497 19.344 68.7497 17.1561C68.7497 14.9681 67.8805 12.8698 66.3334 11.3226C64.7863 9.77551 62.688 8.908 60.5001 8.908ZM60.5001 12.2079C61.1576 12.1958 61.8109 12.3148 62.4219 12.558C63.0329 12.8012 63.5893 13.1638 64.0586 13.6244C64.5279 14.0851 64.9007 14.6347 65.1552 15.241C65.4098 15.8474 65.5409 16.4984 65.541 17.1561C65.5411 17.8137 65.4102 18.4647 65.1559 19.0712C64.9016 19.6776 64.5289 20.2273 64.0598 20.6882C63.5906 21.149 63.0344 21.5117 62.4235 21.7551C61.8125 21.9986 61.1593 22.1178 60.5018 22.1059C59.189 22.1059 57.93 21.5844 57.0018 20.6561C56.0735 19.7279 55.552 18.4688 55.552 17.1561C55.552 15.8433 56.0735 14.5843 57.0018 13.656C57.93 12.7277 59.189 12.2062 60.5018 12.2062L60.5001 12.2079ZM69.1622 6.43308C68.6299 6.45439 68.1265 6.68082 67.7574 7.06496C67.3884 7.44911 67.1822 7.96115 67.1822 8.49386C67.1822 9.02657 67.3884 9.53862 67.7574 9.92276C68.1265 10.3069 68.6299 10.5333 69.1622 10.5546C69.7091 10.5546 70.2337 10.3374 70.6205 9.95057C71.0073 9.56379 71.2246 9.0392 71.2246 8.49221C71.2246 7.94522 71.0073 7.42064 70.6205 7.03386C70.2337 6.64708 69.7091 6.42978 69.1622 6.42978V6.43308Z"
                  fill="white"
                />
                
              </svg>

              </a>
              

              <a href='https://www.facebook.com/profile.php?id=61552050334044' target="_blank" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="118"
                  height="34"
                  viewBox="0 0 118 34"
                  fill="none"
                  className="ooter-social-media-svg2"
                >

                  <path
                    d="M31.68 0.65625H1.32C0.589875 0.65625 0 1.24612 0 1.97625V32.3363C0 33.0664 0.589875 33.6562 1.32 33.6562H31.68C32.4101 33.6562 33 33.0664 33 32.3363V1.97625C33 1.24612 32.4101 0.65625 31.68 0.65625ZM27.8685 10.2881H25.2326C23.166 10.2881 22.7659 11.2699 22.7659 12.7136V15.894H27.6994L27.0559 20.8729H22.7659V33.6562H17.622V20.877H13.3196V15.894H17.622V12.2228C17.622 7.96163 20.2249 5.63925 24.0281 5.63925C25.8514 5.63925 27.4148 5.77538 27.8726 5.83725V10.2881H27.8685Z"
                    fill="white"
                  />

                </svg>
             </a>

              

              </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
