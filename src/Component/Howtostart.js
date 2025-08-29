import React from "react";
import abouttruck from "../Images/Home page Footer above section truck.png"; 
import { Link } from "react-router-dom";
import "./Howtostart.css";
import AmericanMovers from "./AmericanMovers";
import Gross from "./Gross";
import Fade from "react-reveal/Fade";

function Howtostart() {
  return (
    <div className="about-div01">
      <div className="container-fluid about-div1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 position-relative my-auto">
              <Fade bottom distance="0%">
              <div className="">
                <svg
                  className="about-svg1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="70"
                  viewBox="0 0 72 70"
                  fill="none"
                >
                  <path
                    d="M36 -3.14722e-06L32.9218 27.5428L12.8596 8.4224L28.2058 31.5L0.546926 29.7487L27.1367 37.5628L4.82308 54L30.2149 42.8944L23.6873 69.8289L36 45L48.3127 69.8289L41.7851 42.8944L67.1769 54L44.8633 37.5628L71.4531 29.7487L43.7942 31.5L59.1404 8.4224L39.0782 27.5428L36 -3.14722e-06Z"
                    fill="#BE0B31"
                  />
                </svg>
                <h1 className="about-comp-text1">
                  How <br /> to Start
                </h1>
                <p className="about-comp-text2">
                  American Movers LLC offers dispatching services to truck
                  fleets and owner-operators.
                </p>
              </div>
              </Fade>
            </div>
            <div className="col-lg-6 col-12 kamil-div3">
              <div>
                <Fade bottom distance="0%">
                <img src={abouttruck} alt="" />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid how-start-div11">
        <div className="container">
          <div className="row how-start-div12">
            <div className="col-lg-6 col-12">
              <div className="how-start-div22">
                <h1 className="how-start-text1">Step #1</h1>
                <p className="how-start-text2">
                  If you: <br />
                  • Have an MC number for at least three months <br />
                  • Have an equipment we work with <br />• Ready to travel
                  interstate
                </p>
                <p className="how-start-text2">
                  Get right to <span> Step #2! </span>
                </p>
                <p className="how-start-text2">
                  Unfortunately, we can't start our cooperation right now if you
                  don't meet all the criteria. Do not hesitate to reach out to
                  us once you are ready, we'll be happy to assist you!
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="">
                <h1 className="how-start-text1">Step #2</h1>
                <p className="how-start-text2">
                  Apply using <Link to="/contact">this form</Link> or by phone
                  call:{" "}
                  <a
                    href="tel:
+16403004266"
                  >
                    +1 640 300 4266
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="how-start-div22">
                <h1 className="how-start-text1">Step #3</h1>
                <p className="how-start-text2">
                  Prepare the necessary documents: <br />
                  • W9 form (Request for Taxpayer Identification Number and
                  Certification) <br />• Insurance (certificate with liability
                  cargo policies with us listed as a certificate holder).
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="how-start-div22">
                <h1 className="how-start-text1">Step #4</h1>
                <p className="how-start-text2">
                  Sign the dispatch agreement. It is the basis for our services
                  that comes along with limited PoA. It gives us a right to
                  represent the customer's company on its behalf among different
                  people.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="how-start-div22">
                <h1 className="how-start-text1">Step #5</h1>
                <p className="how-start-text2">
                  We are all set. Let’s get to work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AmericanMovers></AmericanMovers>

      <Gross></Gross>
    </div>
  );
}

export default Howtostart;
