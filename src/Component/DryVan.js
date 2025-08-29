import React, { useState } from "react";
import "./TruckDispatch.css";
import AmericanMovers from "./AmericanMovers";
import truckserviceimg1 from "../Images/dry-van-article.jpg";
import truckserviceimg2 from "../Images/image 55.svg";
import Work from "./Work.js";
import Gross from "./Gross.js";
import { Link } from "react-router-dom";
import FAQ from "./FAQ.js";
import { questions } from "./FAQquest.js";

function DryVan() {
  const [faqs, setfaqs] = useState(questions);

  return (
    <div className=" truck-main-div11122">
      <div className="container-fluid truck-div1">
        <div className="w-100 trucks-div-11">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex justify-content-center">
              <div>
                <div>
                  <h1 className="truck-dispatch-text1">Dry VAN</h1>
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
                  Our Dry Van Dispatch Service — Assisting You to Give It Your
                  All While Driving
                </h1>
                <p className="truck-services-text2">
                  Across the country, dry vans are a tremendous help to
                  customers since they keep their cargo secure while it's being
                  transported. Dry van units and drivers, with their shelter
                  from the wind, rain, and other factors, play a vital role in
                  the logistics processes that fuel our nation. <br />
                  You need a dependable, personable dry van dispatcher to help
                  you in order to provide the greatest results for your clients.
                  In this situation, American Movers LLC can help. We have
                  worked hard over the years to develop strong bonds with
                  drivers, giving them the stability, they need to focus on what
                  they do best.
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
              <h1 className="truck-services-text4 d-flex ml-0 mt-5">
                Providing an Honest and Reliable Experience: The American Movers
                LLC Dry Van Dispatch Service
              </h1>

              <p className="truck-services-para11">
                At American Movers LLC, our goal is to become your partner by
                offering dispatch services in a completely open, cordial, and
                honest manner. Check out a few of the things that bring our
                clients returning to us.
              </p>
              <p className="truck-services-para11">
                ✔ A personal approach to dispatching — Since you are our client,
                we work hard to satisfy your demands. You will profit from our
                transparent and encouraging atmosphere if you run into any
                issues with our service. Just let us know what's upsetting you,
                and we'll try our best to resolve it.
                <br />
                ✔ Sincerity at every turn — We are able to support every piece
                of counsel and direction we provide. You always know what you
                are dealing with since we don't make fictitious promises. <br />
                ✔ Formidable experience in this field — When you work with our
                team, you benefit from extensive experience in the dispatch and
                logistics market, as well as a highly professional attitude to
                what we do. <br />✔ Simplified, effective procedures - We
                recognize that you have work to do and don't want any delays to
                stop you from accomplishing it. We created streamlined
                procedures with this in mind to keep your dry van operating
                without stress.
              </p>
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

export default DryVan;
