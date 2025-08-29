import React from "react";
import "./TruckDispatch.css";
import AmericanMovers from "./AmericanMovers";
import truckserviceimg1 from "../Images/reefer-dispatch.jpg";
import truckserviceimg2 from "../Images/image 55.svg";
import Work from "./Work.js";
import Gross from "./Gross.js";
import { Link } from "react-router-dom";
import FAQ from "./FAQ.js";
import { questions } from "./FAQquest.js";
import { useState } from "react";

function Reefer() {
  const [faqs, setfaqs] = useState(questions);

  return (
    <div className=" truck-main-div11122">
      <div className="container-fluid truck-div1">
        <div className="w-100 trucks-div-11">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex justify-content-center">
              <div>
                <div>
                  <h1 className="truck-dispatch-text1">Reefer</h1>
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
                <h1 className="truck-services-text1">Reefer Dispatch</h1>
                <p className="truck-services-text2">
                  American Reefer Truck Movers — All-Inclusive Dispatching
                  Services
                </p>
                <p className="truck-services-text2">
                  Let our team handle dispatching for your reefer freight — all
                  you need to do is drive.
                </p>
                <p className="truck-services-text2">
                  A refrigerated truck is the only option available to
                  businesses in the United States when they want
                  temperaturecontrolled freight. These trucks, also referred to
                  as reefer trucks, are outfitted with the necessary equipment
                  to preserve meat and manufacture fresh, delicate cargo under
                  ideal air conditions
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
              <p className="truck-services-para11">
                Of course, you already know this. Customers are already
                receiving exceptional service from you and your reefer truck.
                However, in order to keep providing this calibre of service, you
                need a dispatcher you can trust, one who has the proper mind-set
                for your company and a variety of efficient, stress-free
                procedures that keep things running smoothly.
              </p>
              <p className="truck-services-para11">
                The crew at American Movers LLC wants to offer your company
                this. We provide a full range of services intended to cover the
                entire reefer freight dispatching process, coupled with complete
                transparency and a personalized approach.
              </p>
              <h1 className="truck-services-text4 d-flex ml-0 mt-5">
                Get More from Your Business with American Movers LLC for Reefer
                Trucks
              </h1>

              <p className="truck-services-para11">
                Selecting the appropriate reefer freight dispatching service can
                have a significant impact on your company. At American Movers
                LLC, we have made it our mission to help specialized drivers,
                like you who operate reefer trucks, find the greatest employment
                and working conditions.
              </p>
              <p className="truck-services-para11">
                Here are a few advantages you might anticipate:
              </p>
              <p className="truck-services-para11">
                ✔ More efficient and dependable deliveries
              </p>
              <p className="truck-services-para11">
                Drivers of reefer trucks frequently transport fragile material.
                Foods and drinks as well as other goods with particular climate
                and temperature needs may be included in these shipments. They
                must therefore be provided promptly and on schedule. Using the
                correct dispatch service makes it easier for you to get in touch
                with the proper people and gets rid of a lot of the roadblocks,
                allowing you to continue giving your clients the finest service
                possible.
              </p>
              <p className="truck-services-para11">
                ✔ A steady stream of revenue
              </p>
              <p className="truck-services-para11">
                You have to be able to generate a consistent flow of income in
                order to recover the cost of your reefer truck investment.
                Furthermore, even after deducting operating expenses, you still
                need to maintain this income as you achieve rising
                profitability. Dispatch services provide you control over this
                steady source of revenue.
              </p>
              <p className="truck-services-para11">
                {" "}
                ✔ Less trouble, less anxiety
              </p>
              <p className="truck-services-para11">
                It can be quite difficult to run a trucking company, especially
                if you are an owner-operator with few resources or are just
                getting started in the sector. In other words, you don't want to
                be concerned about scheduling orders, obtaining contracts and
                tasks, and managing the extra work that goes along with it. You
                don't have to if you choose to collaborate with the best reefer
                freight dispatch service. You can concentrate on other areas of
                your business by leaving it to us.
              </p>
              <p className="truck-services-para11"> ✔ Meet the market demand</p>
              <p className="truck-services-para11">
                A reefer truck is considered a specialized vehicle. You must
                therefore be able to locate customers that require this kind of
                assistance. Thankfully, there is a substantial market need for
                this specific type of chilled logistics service. Regretfully,
                meeting this market requirement isn't always simple. By removing
                the bother and connecting you with the proper kind of clients, a
                dispatch service may help you expand your clientele.
              </p>
              <p className="truck-services-para11">
                Because of our vast industry experience, the American Movers LLC
                team is well-aware of the requirements that your company must
                meet in order to prosper and expand. Because of our degree of
                experience, we are among the best reefer dispatch services in
                the nation, serving clients all around the US and abroad. To
                find out more about our services and what they mean for you and
                your company, get in touch with the team.
              </p>
              <p className="truck-services-para11">
                American Movers LLC — Dispatching Reefer Freight So You Can
                Focus on Doing What You Do Best
              </p>
              <p className="truck-services-para11">
                At American Movers LLC, our goal is to become your partner by
                offering dispatch services in a completely open, cordial, and
                honest manner. Check out a few of the things that bring our
                clients returning to us.
              </p>
              <p className="truck-services-para11">
                Find out why so many drivers now choose American Movers LLC to
                manage reefer truck dispatch
              </p>
              <p className="truck-services-para11">
                The best dispatching services for you: We handle customer
                negotiations, invoicing, document management, paperwork, and
                more. We also help you discover the loads you need to keep your
                business running.
              </p>
              <p className="truck-services-para11">
                A dependable, personable approach: We collaborate with you to
                promote open communication and make sure you have our full
                support at all times. We don't think it's appropriate to make
                unfulfillable promises.
              </p>
              <p className="truck-services-para11">
                To receive an estimate for our services or to learn more about
                our offerings, please contact our staff right now
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

export default Reefer;
