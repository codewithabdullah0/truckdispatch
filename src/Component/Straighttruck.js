import React from "react";
import "./TruckDispatch.css";
import AmericanMovers from "./AmericanMovers";
import truckserviceimg1 from "../Images/straight-2.jpg";
import truckserviceimg2 from "../Images/image 55.svg";
import Work from "./Work.js";
import Gross from "./Gross.js";
import { Link } from "react-router-dom";
import FAQ from "./FAQ.js";
import { questions } from "./FAQquest.js";
import { useState } from "react";

function Straighttruck() {
  const [faqs, setfaqs] = useState(questions);

  return (
    <div className=" truck-main-div11122">
      <div className="container-fluid truck-div1">
        <div className="w-100 trucks-div-11">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex justify-content-center">
              <div>
                <div>
                  <h1 className="truck-dispatch-text1">Straight Truck</h1>
                </div>
                <div className="truck-dispatch-divtext1">
                  <div className="d-flex align-items-center">
                    <div className="truck-arrow-svg1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M0.606599 11.8781C0.18438 12.3003 0.18438 12.9849 0.606599 13.4071C1.02882 13.8293 1.71337 13.8293 2.13559 13.4071L0.606599 11.8781ZM13.9846 1.11022C13.9846 0.513112 13.5006 0.0290608 12.9035 0.0290619L3.17302 0.0290613C2.57592 0.0290612 2.09187 0.513113 2.09187 1.11022C2.09187 1.70733 2.57592 2.19138 3.17302 2.19138L11.8223 2.19138L11.8223 10.8406C11.8223 11.4378 12.3063 11.9218 12.9035 11.9218C13.5006 11.9218 13.9846 11.4378 13.9846 10.8406L13.9846 1.11022ZM2.13559 13.4071L13.6679 1.87471L12.139 0.345725L0.606599 11.8781L2.13559 13.4071Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="truck-arrow-para1">
                      No forced dispatch and hidden payments
                    </p>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <div className="truck-arrow-svg1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M0.606599 11.8781C0.18438 12.3003 0.18438 12.9849 0.606599 13.4071C1.02882 13.8293 1.71337 13.8293 2.13559 13.4071L0.606599 11.8781ZM13.9846 1.11022C13.9846 0.513112 13.5006 0.0290608 12.9035 0.0290619L3.17302 0.0290613C2.57592 0.0290612 2.09187 0.513113 2.09187 1.11022C2.09187 1.70733 2.57592 2.19138 3.17302 2.19138L11.8223 2.19138L11.8223 10.8406C11.8223 11.4378 12.3063 11.9218 12.9035 11.9218C13.5006 11.9218 13.9846 11.4378 13.9846 10.8406L13.9846 1.11022ZM2.13559 13.4071L13.6679 1.87471L12.139 0.345725L0.606599 11.8781L2.13559 13.4071Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="truck-arrow-para1">
                      Personal dispatcher with 24 / 7 support
                    </p>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <div className="truck-arrow-svg1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M0.606599 11.8781C0.18438 12.3003 0.18438 12.9849 0.606599 13.4071C1.02882 13.8293 1.71337 13.8293 2.13559 13.4071L0.606599 11.8781ZM13.9846 1.11022C13.9846 0.513112 13.5006 0.0290608 12.9035 0.0290619L3.17302 0.0290613C2.57592 0.0290612 2.09187 0.513113 2.09187 1.11022C2.09187 1.70733 2.57592 2.19138 3.17302 2.19138L11.8223 2.19138L11.8223 10.8406C11.8223 11.4378 12.3063 11.9218 12.9035 11.9218C13.5006 11.9218 13.9846 11.4378 13.9846 10.8406L13.9846 1.11022ZM2.13559 13.4071L13.6679 1.87471L12.139 0.345725L0.606599 11.8781L2.13559 13.4071Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="truck-arrow-para1">From 5% of gross</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div>
                <div className="truck-contact-formdiv1">
                  <form action="">
                    <div className="">
                      <label className="home-contact-text1">Full Name</label>
                      <input
                        type="text"
                        name="fname"
                        class="form-control home-input-field1"
                      />
                    </div>
                    <div className=" home-input-div2">
                      <label className="home-contact-text1">Email</label>
                      <input
                        type="email"
                        name="email"
                        class="form-control home-input-field1"
                      />
                    </div>
                    <div className=" home-input-div2">
                      <label className="home-contact-text1">Phone Number</label>
                      <input
                        type="number"
                        name="phone"
                        class="form-control home-input-field1"
                      />
                    </div>

                    <div>
                      <div class="form-group form-check truck-checkbox-div1">
                        <input
                          type="checkbox"
                          class="form-check-input home-checkbox-div2"
                          id="exampleCheck1"
                        />
                        <label
                          class="form-check-label home-checkbox-text1"
                          for="exampleCheck1"
                        >
                          I have read and agree to <span>Terms of Service</span>{" "}
                        </label>
                      </div>
                      <div class="form-group form-check ">
                        <input
                          type="checkbox"
                          class="form-check-input home-checkbox-div2"
                          id="exampleCheck1"
                        />
                        <label
                          class="form-check-label home-checkbox-text1"
                          for="exampleCheck1"
                        >
                          I want to receive the most useful tips and news{" "}
                        </label>
                      </div>
                    </div>

                    <div className=" position-relative">
                      <a href="#">
                        <div className="truck-contact-us-btn1">
                          Send Request
                        </div>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid truck-services-div1">
        <div className="container truck-services-truck-div1">
          <div className="row">
            <div className="col-lg-6 col12 d-flex align-items-center pr-5">
              <div>
                <h1 className="truck-services-text1">
                  Straight Truck and Van Dispatch
                </h1>
                <p className="truck-services-text2">
                  You enjoy driving and providing excellent service to your
                  clients. However, you might not be fond of other facets of the
                  logistics industry. Here's where the distinction is made by
                  American Movers LLC.
                </p>
                <p className="truck-services-text2">
                  You love driving, and you love achieving great results for
                  your customers. You might not love other aspects of the
                  logistics trade, though. This is where American Movers makes
                  all the difference.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div>
                <img
                  src={truckserviceimg1}
                  className="truck-services-img-div11 img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <div className="">
              {/* <h1 className="truck-services-text4 d-flex ml-0 mt-5">
                              The American Movers Dry Van Dispatch Service — Providing an Honest and
                              Reliable Experience
                          </h1> */}

              <p className="truck-services-para11">
                While there are various dispatching services available for
                owner-operators of straight trucks, we take great satisfaction
                in providing the best possible support. How are we able to
                ensure this? as a result of our market knowledge. We are
                knowledgeable in straight truck logistics and know what drivers
                and other logistics specialists require to function at their
                peak.
              </p>
              <p className="truck-services-para11">
                We also wish to support you as you develop your skills and
                potential for financial gain. For this reason, we simplify the
                entire procedure for you in order to promote a far better, much
                more effective, and far more efficient method of working. Not
                only will your customers love working with you, but you too will
                enjoy working with American Movers LLC.
              </p>

              <p className="truck-services-para122">
                What Our Straight Truck and Van Dispatch Service Can Offer You
              </p>

              <p className="truck-services-para11">
                Driving tangible outcomes for your straight truck and van
                business, we're on your side. This implies that you count on us
                to provide dispatch services that enable you to expand your
                company in a manner that works for you. What does this actually
                mean, though? What does your company's American Movers LLC
                Dispatch service entail? This is what to anticipate:
              </p>

              <p className="truck-services-para11">
                ✔ A dispatch service focused on customer satisfaction - Ensure
                that those customers select you and continue to do so in the
                future.
                <br />
                ✔ Growing revenue, thanks to great straight truck jobs that suit
                your needs – We provide a diverse range of jobs to drivers just
                like you. <br />
                ✔ An agile service – Take as many or as few jobs as you want,
                thanks to our commitment-free, flexible service. <br />
                ✔ Open and honest pricing at all times- We only accept upfront,
                truthful pricing; we don't believe in deceit or unpleasant
                surprises.
                <br />✔ A long-term partnership that produces results - You can
                count on us to honor our commitments since we aim to work with
                you in the long run.
              </p>

              <p className="truck-services-para11">
                Are you prepared to begin using our dispatch services for trucks
                and vans straight away? It's simple to register. Simply fill out
                the form on this page. Give us a call to find out more about
                what we do.
              </p>

              <p className="truck-services-para222">
                Start Using Direct Truck and Van Dispatch Services Right Now
              </p>

              <p className="truck-services-para11">
                All set to go? To get started, fill out the form on this page or
                give our staff a call at +16403004266. You can begin taking use
                of our straight truck dispatch services in a matter of quick
                steps.
              </p>

              {/* <p className="truck-services-para11"></p>

              <p className="truck-services-para11"></p>

              <p className="truck-services-para11"></p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid truck-dispatch-sec3-div1 pt-0">
        <div className="container">
          <div>
            <h1 className="truck-dispatch-sec3-text1">
              Choose The Service You Need
            </h1>
            <div className="row truck-dispatch-sec3-div2">
              <div className="col-lg-4 col-md-6 col-12">
                <Link to="/truck-dispatch">
                  <div className="truck-dispatch-sec3-btn1">
                    Truck Dispatching
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <Link to="/billing">
                  <div className="truck-dispatch-sec3-btn2">
                    {" "}
                    Billing & Accounting
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <Link to="/factoring-service">
                  <div className="truck-dispatch-sec3-btn1">
                    Factoring Services
                  </div>
                </Link>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <Link to="/document-management">
                  <div className="truck-dispatch-sec3-btn2">
                    Document Management
                  </div>
                </Link>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <Link to="/safety&dot-compliance">
                  <div className="truck-dispatch-sec3-btn1">
                    SAFETY & DOT Compliance
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <Link to="/rate-negotiation">
                  <div className="truck-dispatch-sec3-btn2">
                    Rate Negotiation
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <Link to="/ifta-reporting">
                  <div className="truck-dispatch-sec3-btn1">IFTA Reporting</div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <Link to="/company-formation">
                  <div className="truck-dispatch-sec3-btn2">
                    Company Formation
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AmericanMovers></AmericanMovers>

      <div className="container-fluid faqs-div122" id="faq">
        <div className="container">
          <div>
            <h1 className="faq-text1">FAQ</h1>
          </div>
          <div className="faq-line1"></div>

          {faqs.map((faq) => {
            return (
              <FAQ question={faq.question} answer={faq.answer} key={faq.id} />
            );
          })}
        </div>
      </div>

      <Gross></Gross>
    </div>
  );
}

export default Straighttruck;
