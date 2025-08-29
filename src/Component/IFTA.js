import React from "react";
import "./TruckDispatch.css";
import AmericanMovers from "./AmericanMovers";
import truckserviceimg1 from "../Images/image 53.svg";
import truckserviceimg2 from "../Images/image 55.svg";
import Work from "./Work.js";
import Gross from "./Gross.js";
import { Link } from "react-router-dom";
import FAQ from "./FAQ.js";
import { questions } from "./FAQquest.js";
import { useState } from "react";

function IFTA() {
  const [faqs, setfaqs] = useState(questions);

  return (
    <div className=" truck-main-div11122">
      <div className="container-fluid truck-div1">
        <div className="w-100">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex justify-content-center">
              <div>
                <div>
                  <h1 className="truck-dispatch-text1">
                    IFTA <br /> reporting
                  </h1>
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
                      Fill out the form or call us: +1 640 300 4266
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

      <div className="container-fluid truck-dispatch-sec2-div1">
        <div className="container">
          <div>
            {/* <h1 className="truck-dispatch-sec2-text1 ">Truck Dispatching:</h1> */}
            <h1 className="truck-dispatch-sec2-text2">IFTA Reporting</h1>
            <p className="truck-dispatch-sec2-text3 pt-2">
              When truckers and transportation businesses need to move through
              and do business in more than one state and in Canada, having to
              calculate gasoline taxes and obtain permits for each one would be
              crippling. The International Fuel Tax Agreement allows truckers to
              operate under a single license and file a single report for all 48
              U.S. states and all Canadian provinces (territories are not
              members).
            </p>
            <p className="truck-dispatch-sec2-text3">
              This vastly expands the options available to drivers on the road.
              Drivers now enjoy streamlined access to the whole continental
              United States and most of Canada, rather than enduring lengthy and
              inefficient application processes in each state and province,
              according to the IFTA tax report. Drivers now have the ability to
              directly meet the needs of clients over this wide area. While the
              process is more convenient than it was previously, there are still
              key reporting requirements that trucking businesses must meet.
            </p>
          </div>
        </div>
      </div>

      <AmericanMovers></AmericanMovers>

      <div className="container-fluid truck-dispatch-sec3-div1">
        <div className="container">
          <div>
            <h1 className="truck-dispatch-sec3-text1">
              Choose Your Truck Type
            </h1>
            <div className="row truck-dispatch-sec3-div2">
              <div className="col-lg-3 col-md-6 col-12">
                <Link to="/dry-van">
                  <div className="truck-dispatch-sec3-btn1">Dry Van</div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <Link to="/step-deck">
                  <div className="truck-dispatch-sec3-btn2">Step Deck</div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <Link to="/reefer">
                  <div className="truck-dispatch-sec3-btn1">Reefer</div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <Link to="/flat-bed">
                  <div className="truck-dispatch-sec3-btn2">Flatbed</div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <Link to="/power-only">
                  <div className="truck-dispatch-sec3-btn1">Power Only</div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <Link to="/hotshot-truck">
                  <div className="truck-dispatch-sec3-btn2">Hotshot</div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <Link to="/box-truck">
                  <div className="truck-dispatch-sec3-btn1">Boxtruck</div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <Link to="/straight-truck">
                  <div className="truck-dispatch-sec3-btn2">Straight Truck</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid truck-services-div1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col12 d-flex  pr-5">
              <div>
                <h1 className="truck-services-text1">
                  How the Simplified Process Works?
                </h1>
                <p className="truck-services-text2">
                  Businesses with an IFTA license continue to purchase fuel as
                  usual, but are "credited" with any fuel taxes paid. They file
                  an IFTA fuel tax report for each fiscal quarter (by the end of
                  April, July, October, and January each year), detailing how
                  much they have travelled and how much gasoline they have spent
                  in each IFTA country. Each jurisdiction's tax liabilities are
                  calculated using a method that takes into account average fuel
                  mileage. You'll get a list of what you've already paid to each
                  member state/province, as well as if you owe more or have
                  overpaid.
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
            <h1 className="truck-services-text3">
              Here’s what you can expect when you work with us
            </h1>

            <div>
              <div className="d-flex truck-services-svg1-div1 align-items-md-center">
                <div className="truck-services-svg1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M1.23551 12.2355C0.813287 12.6577 0.813287 13.3423 1.23551 13.7645C1.65772 14.1867 2.34228 14.1867 2.76449 13.7645L1.23551 12.2355ZM14.6135 1.46764C14.6135 0.870534 14.1295 0.386483 13.5324 0.386484L3.80193 0.386483C3.20482 0.386483 2.72077 0.870535 2.72077 1.46764C2.72077 2.06475 3.20482 2.5488 3.80193 2.5488L12.4512 2.5488L12.4512 11.1981C12.4512 11.7952 12.9353 12.2792 13.5324 12.2792C14.1295 12.2792 14.6135 11.7952 14.6135 11.1981L14.6135 1.46764ZM2.76449 13.7645L14.2969 2.23214L12.7679 0.703147L1.23551 12.2355L2.76449 13.7645Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h1 className="truck-services-text4">
                  Who requires/obtains an IFTA license?
                </h1>
              </div>

              <p className="truck-services-para11">
                Is it necessary to submit an IFTA fuel tax report and apply for
                an IFTA license? This rule does not apply to all cars, and most
                drivers can easily move between states and provinces without the
                need for further licensing or reporting. The IFTA applies to
                specified commercial vehicle classes or vehicles authorized for
                specific use cases.
              </p>
              <p className="truck-services-para11">If your automobile:</p>
              <p className="truck-services-para11">
                ✔ is used to transport people or property <br />✔ has three or
                two axles as well as an actual or registered gross vehicle
                weight greater than 26,000 lbs. (11,797 kgs) — or if the actual
                or registered gross vehicle weight exceeds 26,000 lbs. (11,797
                kgs) in combination
              </p>
              <p className="truck-services-para11">
                The Act then qualifies it, and you must file the IFTA quarterly
                fuel report.
              </p>

              <p className="truck-services-para122">Penalties</p>
              <p className="truck-services-para11">
                Failure to file the trip report, late filing, and underpayment
                can all result in a penalty of 10% of the amount owed or $50. It
                should be noted that interest will be charged on the amount owed
                to each member jurisdiction.
              </p>

              <div className="d-flex truck-services-svg1-div1 align-items-md-center">
                <div className="truck-services-svg1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M1.23551 12.2355C0.813287 12.6577 0.813287 13.3423 1.23551 13.7645C1.65772 14.1867 2.34228 14.1867 2.76449 13.7645L1.23551 12.2355ZM14.6135 1.46764C14.6135 0.870534 14.1295 0.386483 13.5324 0.386484L3.80193 0.386483C3.20482 0.386483 2.72077 0.870535 2.72077 1.46764C2.72077 2.06475 3.20482 2.5488 3.80193 2.5488L12.4512 2.5488L12.4512 11.1981C12.4512 11.7952 12.9353 12.2792 13.5324 12.2792C14.1295 12.2792 14.6135 11.7952 14.6135 11.1981L14.6135 1.46764ZM2.76449 13.7645L14.2969 2.23214L12.7679 0.703147L1.23551 12.2355L2.76449 13.7645Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h1 className="truck-services-text4">
                  IFTA Report Service for American Movers LLC
                </h1>
              </div>

              <p className="truck-services-para11">
                Because jurisdictions determine their own rates, the system is
                based on correctly submitted IFTA reports. Failure to comply
                with the regulations can not only cost you money if you owe
                gasoline taxes in any member jurisdiction, but it can also harm
                your company's reputation. Even though many trucking firms can
                complete and file much of the essential paperwork and reports
                online, all of this time-consuming administrative labor eats up
                valuable time that the company would rather spend driving and
                making money. That is why American Movers LLC is delighted to
                relieve you of the IFTA reporting requirement.
              </p>

              <p className="truck-services-para11">
                This is what American Movers LLC Dispatch's IFTA Fuel Tax
                Reporting Service is all about. We believe in making our
                clients' lives easier by removing many of the difficulties they
                confront when they travel. We understand that you enjoy driving
                and providing excellent service to your customers - it's how you
                make a living. You didn't get into truck driving because you
                enjoy filling out paperwork and submitting fuel tax reports.
              </p>

              <p className="truck-services-para11">
                Here's an overview of what you may expect from our services
              </p>

              <p className="truck-services-para122">
                A Way to Save Money and Protect Your Profits in Your Business
              </p>

              <p className="truck-services-para11">
                When properly reported, the IFTA fuel report can save you and
                your company money on fuel taxes, as well as time and hassle.
                With American Movers LLC on your side, you won't have to worry
                about overspending on fuel tax since we'll make sure everything
                is handled correctly. You'll find it much easier to run your
                firm, and you'll be able to secure your revenues in the process.
              </p>

              <p className="truck-services-para122">
                Complete transparency for both you and your customers
              </p>

              <p className="truck-services-para11">
                Your company's success is dependent on effective communication
                with its consumers. These customers want to know what is going
                on at all times and do not anticipate any delays or hang-ups.
                Applying for permits and submitting tax reports can make this
                difficult, which is why truck drivers value our services so
                much. You'll also like the increased transparency and
                comprehension.
              </p>

              <p className="truck-services-para122">
                From Your Perspective, a "Hands-Off" Service
              </p>

              <p className="truck-services-para11">
                As previously stated, the IFTA rules present a far more
                straightforward situation than the previous method. However,
                there are still considerations and issues that must be
                addressed. Allow us to manage those concerns for you, providing
                a completely "hands-off" solution that allows you to concentrate
                on other elements of operating your business.
              </p>

              <p className="truck-services-para122">
                A Simple Path to IFTA Fuel Report Compliance
              </p>

              <p className="truck-services-para11">
                Drivers are usually concerned about compliance. You don't want a
                noncompliance issue to jeopardize your business and livelihood,
                and you don't want to be stressed out about whether you're
                following the rules and regulations. With the American Movers
                LLC service, you may be confident that you are entirely
                compliant at all times. So the only thing you have to be
                concerned about is driving.
              </p>
            </div>
          </div>

          <div className="row truck-services-sec3-div1">
            <div className="col-lg-6 col-12 d-flex  pr-5">
              <div>
                <h1 className="truck-services-text1">
                  A Knowledgeable Team Ready to Support You with Your IFTA
                  Quarterly Fuel Tax Report
                </h1>
                <p className="truck-services-text2">
                  You must have confidence that you can rely on a qualified and
                  knowledgeable team to give you with the essential assistance
                  while on the road. We are available to answer any questions or
                  concerns you may have concerning the IFTA quarterly report.
                </p>
                <p className="truck-services-text2">
                  These are just a few of the reasons why our IFTA fuel tax
                  reporting services are so valuable to truck drivers across the
                  United States and beyond. We ensure that the IFTA regulations
                  give the advantages and benefits intended, rather than
                  producing additional complications for you and your business.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div>
                <img
                  src={truckserviceimg2}
                  className="truck-services-img-div22 img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Work></Work>

      <div className="container-fluid faqs-div1" id="faq">
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

export default IFTA;
