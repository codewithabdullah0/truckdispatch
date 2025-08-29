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

function Company() {
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
                    Company <br /> Formation
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
            <h1 className="truck-dispatch-sec2-text2">Company formation</h1>
            <p className="truck-dispatch-sec2-text3 pt-2">
              So you've made the decision to work in the trucking industry. You
              enjoy driving. You enjoy assisting individuals and businesses. You
              want to be a part of the modern economy. You want to start a
              trucking firm but don't know how, or you are familiar with the
              procedure but want some help making sure you do everything
              correctly. American Movers LLC is here to assist you. We can
              assist you in forming the company, registering your trailers and
              trucks, and obtaining all of the essential forms and paperwork to
              get you started. We are happy to assist you at any point of the
              process.
            </p>

            <h1 className="truck-dispatch-sec2-text2 mt-4">
              Creating the Company
            </h1>

            <p className="truck-dispatch-sec2-text3">
              According to the General Corporation Code, there are a number of
              steps to take when forming your company, including:
            </p>

            <p className="truck-dispatch-sec2-text3">
              ✔ Picking the company’s name and carrying out a business name
              check
            </p>

            <p className="truck-dispatch-sec2-text3">
              ✔ Choosing a company name and conducting a business name check
              Choosing a type of corporation based on your business model
            </p>

            <p className="truck-dispatch-sec2-text3">
              ✔ Filing the Certificate of Incorporation
            </p>

            <p className="truck-dispatch-sec2-text3">
              ✔ Appointing a registered agent, preparing corporate bylaws,
              appointing directors, and holding the first board meeting
            </p>

            <p className="truck-dispatch-sec2-text3">
              While we cannot give legal advice, we can surely assist you with
              all of the files and documentation.
            </p>

            <p className="truck-dispatch-sec2-text3"></p>
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
            <div className="col-lg-6 col12 d-flex pr-5">
              <div>
                <h1 className="truck-services-text1">
                  Trailer Title and Trailer Registration
                </h1>
                <p className="truck-services-text2">
                  All trailers, whether purchased or leased for your business,
                  must be titled and registered in Delaware. Only then will the
                  authorities allow them to drive on the roadways.
                </p>
                <p className="truck-services-text2">
                  While we can’t provide legal advice, we can certainly help you
                  handle all the filings and documents. <br />
                  American Movers can get your business on the road? Contact us
                  today.
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
            {/* <h1 className="truck-services-text3">
              Here’s what you can expect when you work with us
            </h1> */}

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
                  How to Create a Trailer Title?
                </h1>
              </div>

              <p className="truck-services-para11">
                The trailer title procedure normally begins at the DMV, but you
                can save time by filling out documents online. If you bought or
                leased the trailer, the previous owner/seller or lessor should
                have completed a title transfer into your name. This proves you
                own the trailer. If you purchased the trailer brand new from the
                manufacturer or dealership, you must complete a title
                application.
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
                <h1 className="truck-services-text4">Trailer Registration</h1>
              </div>

              <p className="truck-services-para11">
                Trailer registration is as simple as giving the DMV with proof
                of ownership (your trailer's title or bill of sale) and filling
                out the registration application. You must, however, demonstrate
                that you have paid all appropriate taxes and received the
                necessary trailer insurance.
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
                  How Much Does Trailer Title and Registration Cost?
                </h1>
              </div>

              <p className="truck-services-para11">
                If there is no lien on your trailer, the title price is $55. The
                yearly registration fee for trailers is determined by weight and
                is as follows: $15 for up to 1,000 pounds; $20 for 1,001 to
                2,000 pounds; $40 for 2,001 to 5,000 pounds; and an extra $18
                for every 1,000 pounds for trailers weighing more than 5,000
                pounds.
              </p>

              <p className="truck-services-para11">
                It should be noted that if you intend to transport loads between
                states, you will need to obtain "apportioned registration." You
                complete this registration in your home state so that you can
                move around without having to obtain additional permits or
                registrations. You must pay fees in proportion to the number of
                miles you go you log in each state.
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
                  Tax on Heavy Highway Vehicles
                </h1>
              </div>

              <p className="truck-services-para11">
                In addition to your regular business taxes, you must file a
                heavy highway use tax return with the IRS each year. This fee
                applies to operations on public highways involving vehicles
                weighing 55,000 pounds or greater.
              </p>

              <p className="truck-services-para11">
                The Heavy Highway Vehicle Use Tax return or HVUT is a yearly
                federal tax paid to the IRS for operating heavy vehicles at a
                gross weight of 55,000 pounds or more on public highways.
              </p>

              <p className="truck-services-para11">
                The maximum load weight carried on the vehicle and attached
                trailer or semi-trailer is calculated as follows: (1) the fully
                equipped, unloaded vehicle weight; (2) the fully equipped
                trailer or semi-trailer; and (3) the maximum load weight carried
                on the vehicle and attached trailer or semi-trailer.
              </p>
            </div>
          </div>

          <div className="row truck-services-sec3-div1">
            <div className="col-lg-6 col-12 d-flex pr-5">
              <div>
                <h1 className="truck-services-text1">
                  How to Check Driver Record
                </h1>
                <p className="truck-services-text2">
                  If you are planning to hire drivers for your trucking company,
                  you will require a motor vehicle record check on each
                  individual. You can obtain a motor vehicle driving record of
                  someone other than yourself in two ways: in person or by mail.
                  You can acquire a three-year, five-year, or full driver record
                  for a fee of $25 per report. Have any concerns about the
                  process or want to learn more about how American Movers LLC
                  can help your company get started? Please contact us right
                  away.
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

export default Company;
