import React from "react";
import "./About.css";
import abouttruck from "../Images/Home page Footer above section truck.png";
import kamilpic1 from "../Images/WhatsApp Image 2023-10-16 at 6.26.svg";
import kevinpic1 from "../Images/WhatsApp Image 2023-10-16 at 6.26 (1).svg";

import missionpic1 from "../Images/Group 19.svg";
import vissionpic1 from "../Images/Group 18.svg";
import AmericanMovers from "./AmericanMovers";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";     


function About() {
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
                  <h1 className="about-comp-text1">About Company</h1>
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

      <div className="container-fluid mission-div1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-12">
              <div>
                <Fade bottom distance="3%">
                  <p className="mission-text2 mt-4">
                    American Movers LLC offered dispatching services to truck
                    fleets and owner-operators.
                  </p>
                </Fade>
                <Fade bottom distance="3%">
                  <p className="mission-text2 mt-4">
                    In addition to looking for loads, we advise drivers and
                    carrier businesses to take use of our wide range of services,
                    which include SAFETY DOT compliance, broker and shipper
                    interactions, billing, document management, and paperwork.
                  </p>
                </Fade>
                <Fade bottom distance="3%">
                  <h1 className="mission-text1 mt-4">
                    Drive, deliver, and make money—we'll take care of the rest.
                  </h1>
                </Fade>
                <Fade bottom distance="3%">
                  <p className="mission-text2 mt-4">
                    Transparency is one of our unwavering core values. We don't
                    charge termination fees or other costs; our pricing is
                    transparent. Depending on the type of trailer being used, we
                    charge our customers between 5 and 10 percent of each load:
                    dry van, step deck, reefer, flatbed or hotshot (only 40'
                    trailers and CDL drivers).
                  </p>
                </Fade>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid about-profile-div1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <Fade bottom distance="3%">
                <div>
                  <div className="about-profile-div2">
                    <div>
                      <img
                        src={kamilpic1}
                        className="about-profile-pic1 img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="about-profile-textdiv1">
                      <div>
                        <h1 className="about-profile-text1">Kamil</h1>
                        <p className="about-profile-text2">Managing Director</p>
                      </div>
                      <div>
                        <Link to="/kamil">
                          <p className="about-profile-text3 d-lg-flex d-none">
                            <svg
                              className="mr-3"
                              xmlns="http://www.w3.org/2000/svg"
                              width="27"
                              height="8"
                              viewBox="0 0 27 8"
                              fill="none"
                            >
                              <path
                                d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z"
                                fill="black"
                              />
                            </svg>{" "}
                            More
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Link to="/kamil">
                        <p className="about-profile-text3 d-lg-none d-flex  ">
                          <svg
                            className="mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="8"
                            viewBox="0 0 27 8"
                            fill="none"
                          >
                            <path
                              d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z"
                              fill="black"
                            />
                          </svg>{" "}
                          More
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="col-lg-6 col-12 about-kevin-profile-div11">
              <Fade bottom distance="3%">
                <div>
                  <div className="about-profile-div2">
                    <div>
                      <img
                        src={kevinpic1}
                        className="about-profile-pic1 img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="about-profile-textdiv1">
                      <div>
                        <h1 className="about-profile-text1">Kevin Michael</h1>
                        <p className="about-profile-text2">
                          Chief Operating Officer
                        </p>
                      </div>
                      <div>
                        <Link to="/kevin">
                          <p className="about-profile-text3 d-lg-flex d-none">
                            <svg
                              className="mr-3"
                              xmlns="http://www.w3.org/2000/svg"
                              width="27"
                              height="8"
                              viewBox="0 0 27 8"
                              fill="none"
                            >
                              <path
                                d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z"
                                fill="black"
                              />
                            </svg>{" "}
                            More
                          </p>
                        </Link>
                      </div>
                    </div>

                    <div>
                      <Link to="/kevin">
                        <p className="about-profile-text3 d-lg-none d-flex  ">
                          <svg
                            className="mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="8"
                            viewBox="0 0 27 8"
                            fill="none"
                          >
                            <path
                              d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z"
                              fill="black"
                            />
                          </svg>{" "}
                          More
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <AmericanMovers></AmericanMovers>
    </div>
  );
}

export default About;
