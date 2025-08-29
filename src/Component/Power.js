import React from "react";
import "./TruckDispatch.css";
import AmericanMovers from "./AmericanMovers";
import truckserviceimg1 from "../Images/power-only-2-1.jpg";
import truckserviceimg2 from "../Images/image 55.svg";
import Work from "./Work.js";
import Gross from "./Gross.js";
import { Link } from "react-router-dom";
import FAQ from "./FAQ.js";
import { questions } from "./FAQquest.js";
import { useState } from "react";

function Power() {
  const [faqs, setfaqs] = useState(questions);

  return (
    <div className=" truck-main-div11122">
      <div className="container-fluid truck-div1">
        <div className="w-100 trucks-div-11">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex justify-content-center">
              <div>
                <div>
                  <h1 className="truck-dispatch-text1">Power Only</h1>
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
                  Power Only Dispatch Service
                </h1>
                <p className="truck-services-text2">
                  American Movers LLC has offered truck fleets and
                  owner-operators a power-only dispatch service. Whenever you
                  need to transfer equipment on a flatbed trailer, dry van
                  trailer, refrigerated van, shipping container, or tanker
                  trailer, our staff makes it simple to match power-only cargoes
                  to independent owners and vehicle fleets. For every transport
                  scenario, we can identify the ideal power-only truck solution.
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
                Benefits of Power Only Trucking Services
              </h1>

              <p className="truck-services-para11">
                When a trailer needs to be transported, power only trucking
                services use a carrier tractor or independent driver. Brokers
                can effectively assure end-to-end logistics for goods in an
                economical manner by using this method. Using our power-only
                dispatch service has additional advantages that include:
              </p>
              <p className="truck-services-para11">
                ✔ <span>Productivity.</span> While we manage finding top-notch
                drivers to haul their shipments, shippers can concentrate on
                their cargo. With our team on your side, you won't need to keep
                up a fleet of tractors or a roster full of drivers that are
                paid.
              </p>
              <p className="truck-services-para11 mt-0">
                ✔ <span>Quickness and adaptability. </span>You can select the
                ideal carrier for the job with power alone trucking. The number
                of tractor-trailers that shippers own or the number of drivers
                that are available to take loads are no longer constraints. We
                support you in keeping your options open and expeditiously
                delivering your goods.
              </p>
              <p className="truck-services-para11 mt-0">
                ✔ <span> Improved cash flow.</span> Keeping drivers on staff is
                a costly line item in any shipper’s annual budget. Shippers can
                improve their cash flow by relying on power only trucking
                companies and dispatch services to fulfill their shipping needs.
                Greater budgeting flexibility and the ability to adjust
                processes as needed can free up much-needed cash for other
                capital expenses.
              </p>
              <p className="truck-services-para11 mt-0">
                ✔ <span>Drivers who are happy.</span> There is a chance for
                downtime when shippers employ their own drivers. Driver
                unhappiness may result from this, and it may be challenging to
                adjust corporate processes as necessary. There is more job
                stability for independent drivers who opt to work for companies
                that offer power-only transportation services.
              </p>

              <p className="truck-services-para222">
                Power Only Dispatch – Help Finding Loads
              </p>

              <p className="truck-services-para11">
                Never again will independent truck drivers have to be idle. The
                drivers and qualified shippers who require their poweronly
                trucking services are paired by our dispatchers. We match
                shippers and drivers based on similar pricing expectations.
                Drivers are still free to say no to loads and to request
                specific routes to be driven through or to. The staff at
                American Movers LLC works hard so you can focus on what you do
                best—drive.
              </p>

              <p className="truck-services-para222">Bargaining with Clients</p>
              <p className="truck-services-para11">
                Haggling is disliked by all. Ensuring that owners of power-only
                trucks receive the best load rates is occasionally important.
                Increased revenue and improved profitability for drivers are the
                results of higher load rates. Our staff keeps a careful eye on
                spot rates and is well-versed in the loads-to-trucks ratio. With
                this information, they can negotiate the best load rates for
                drivers. When it comes to negotiating a price for loads that
                need power-only trucking services, we will always go above and
                above.
              </p>
              <p className="truck-services-para222">
                Power-Only Transportation Billing Support
              </p>
              <p className="truck-services-para11">
                Billing for your services is the only task that takes more time
                than locating your own loads. When owner-operators use American
                Movers LLC to handle their power-only hauling, they never have
                to worry about invoices. Our goal is to facilitate your work by
                connecting shippers and power-only owner-operators and then
                providing post-delivery billing support.
              </p>
              <p className="truck-services-para222">
                Managing Documents and Paperwork
              </p>
              <p className="truck-services-para11">
                Nobody enjoys handling the countless documentation required to
                ship loads successfully or paperwork. American Movers LLC can
                take care of the bothersome paperwork on your behalf, whether
                you are the shipper or the owneroperator. We take care of all
                paperwork, from lumper receipts and detention pay to gasoline
                receipts, credit checks, brokers, and shippers, allowing you to
                concentrate on what really matters.
              </p>

              <p className="truck-services-para222">
                American Movers Offers Power-Only Trucking
              </p>

              <p className="truck-services-para11">
                For owner-operators, truck drivers, and small-to-medium sized
                trucking companies that have their own fleets, American Movers
                LLC is here to offer first-rate power-only trucking dispatch
                services. Our goal is to help drivers and businesses save time
                and money by offering reliable dispatch services for their
                power-only trucking needs. Call +16403004266 to speak with our
                staff about your options right now.
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

export default Power;
