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


function Rate() {

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
                    Rate <br /> negotiation
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
            <h1 className="truck-dispatch-sec2-text1 ">
              Rate Negotiation Services:
            </h1>
            <h1 className="truck-dispatch-sec2-text2">
              Find Every Job's Best Truck Driver Pay Rate
            </h1>
            <p className="truck-dispatch-sec2-text3 pt-2">
              settling on a reasonable hourly wage for independent logistics workers and truck owners/operators nationwide
            </p>
            <p className="truck-dispatch-sec2-text3">
              Your clientele greatly values the service you offer. America's transportation industry plays a vital role in maintaining
              both the efficiency and effectiveness of our society. For this reason, you want to receive the greatest prices on all of
              your trucking and logistics jobs.

            </p>
            <p className="truck-dispatch-sec2-text3">
              You gain more for every mile when you use our professional negotiation service. Our assistance goes well beyond
              merely negotiating the average fee; we also assist you in establishing your brand and business as industry leaders.
            </p>
            <p className="truck-dispatch-sec2-text3">
              We will handle every detail. Driving is all that is required.
            </p>

            <p className="truck-dispatch-sec2-text3">
              Get going right now. To receive an estimate for our services or to learn more about what we can offer you and your
              business, contact us by phone or email.
            </p>
          </div>
        </div>
      </div>

      <AmericanMovers></AmericanMovers>

      <div className="container-fluid truck-dispatch-sec3-div1">
        <div className="container">
          <div>
            <h1 className="truck-dispatch-sec3-text1">Choose Your Truck Type</h1>
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
                  What to expect from our truck rate negotiation services?
                </h1>
                <p className="truck-services-text2">
                  Truck drivers in the US are coming to American Movers LLC for more than just rate negotiations. This is the reason.
                </p>
                <p className="truck-services-text2">
                  For your transportation operation, let us handle pricing negotiations and more. You are free to handle the driving.
                </p>

                <p className="truck-services-text2">
                  To get in contact with our knowledgeable and welcoming staff, please use the details provided below. You can get in
                  touch with us by phone or email, and we'll handle things from there.
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
                  An equitable fee for you and your customers

                </h1>
              </div>

              <p className="truck-services-para11">
                Since you deliver excellent customer service, you should be compensated with a reasonable truck fee per load and
                per mile. In order to keep your business running smoothly and your clients satisfied, you should also strive to provide
                a competitive rate. We are aware of this, which is why we use our considerable negotiating abilities to secure the
                highest possible payment for your services as a truck driver.
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
                  Linkage to the best opportunities
                </h1>
              </div>

              <p className="truck-services-para11">
                We can look for loads all around the country, so all you have to worry about is driving; the rest will be taken care of.
                This means that your company will have a reliable source of income. You can expand and grow your business,
                establishing long-lasting contacts with crucial clients and interacting with the opportunities you require.
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
                  Expert terms negotiating
                </h1>
              </div>

              <p className="truck-services-para11">
                Many elements contribute to the optimum interaction between truckers and clients. There is the pricing, but there
                are also other terms and conditions that must be addressed and agreed upon. This is where our negotiation skills
                come into play, and it goes far beyond simply arranging a truck driver pay rate. You will have possibilities and terms
                that suit you while also assisting your clients in achieving their goals.
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
                  A hands-off process for truckers and owner-operators
                </h1>
              </div>

              <p className="truck-services-para11">
                You handle the driving, and we handle the rest. This credo applies to all of our services, including rate negotiation.
                Our goal is to secure a good truck driver hourly rate while avoiding tension and worry. When you engage with us,
                you can rest assured that you are receiving the best services possible, allowing you to focus on what you do best.
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
                  A close and personal service suited to your requirements
                </h1>
              </div>

              <p className="truck-services-para11">
                We don't believe in standardized services or a one-size-fits-all strategy. We understand that each of the truckers we
                work with has unique needs and expectations, which is why we work closely with you to learn about you and your
                business. We can then give a customized solution to assist you in exceeding your objectives.
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
                  Why Are Freight Rate Negotiations Important?
                </h1>
              </div>

              <p className="truck-services-para11">
                What makes freight rate discussions so critical? Why do you need to connect with the industry's best rate
                negotiating services? There are several aspects to examine in this case. Let's look at some of the most important for
                you and your organization
              </p>

              <p className="truck-services-para122">
                Obtain a reasonable truck rate for drivers.
              </p>

              <p className="truck-services-para11">
                Truck drivers are the backbone of the American economy. Your services serve to keep this country running and
                businesses growing, as well as to keep the domestic economy robust. This means you are entitled to a reasonable
                truck driver pay rate.
              </p>

              <p className="truck-services-para11">
                Whether you operate on a per-mile basis or prefer to manage your truck driver business on an hourly basis, your pay
                rate must support you as a business owner and as an individual. Truck drivers like you have a difficult and taxing job
                to complete, and one of your aims is to provide excellent service to your clients. Negotiations over freight rates
                ensure that this is the case.
              </p>

              <p className="truck-services-para122">
                Encourage industry safety and security.
              </p>

              <p className="truck-services-para11">
                There is a reason why the trucking sector is regulated. Truck drivers have the right to feel safe and secure on the
                road. Clients have the right to believe that their logistics drivers and couriers are dependable. Other road users have
                the right to drive without concern for potential risks and hazards
              </p>

              <p className="truck-services-para11">
                Customers who make low-ball offers to truckers, and truck drivers who undercut their fellow professionals with
                subpar services, endanger everyone. When we negotiate rates for drivers, we work to ensure that everyone receives
                a good bargain and is protected.
              </p>

              <p className="truck-services-para122">
                With the correct truck driver pay rate, you can stay competitive in your profession.
              </p>

              <p className="truck-services-para11">
                Logistics is a highly competitive industry. There are numerous drivers and service providers competing for a little
                portion of a limited market. This makes it critical that your company is competitive - that it offers pricing that reflect
                the market's need and desire.

              </p>

              <p className="truck-services-para11">
                This does not imply reducing your profits. It also does not imply delivering the lowest feasible charges - we'll go over
                this further below. Instead, it means offering excellent services at a reasonable price, allowing you to expand your
                market share while receiving full and fair compensation for what you provide
              </p>

              <p className="truck-services-para122">
                Develop your driving reputation and identity.
              </p>

              <p className="truck-services-para11">
                Your customers do not only seek the cheapest choice available. They must be certain that they are working with a
                driver and a service provider they can rely on. They must have confidence in your ability to transport their cargo
                correctly, safely, on time, and in conformity with all applicable rules and regulations.
              </p>

              <p className="truck-services-para11">
                Make this high standard of quality a part of your brand and identity. Build this identity into your rate discussions so
                that your clients understand exactly what kind of value you provide. As your company's reputation expands, these
                pricing negotiating services will become even more crucial, scaling along with it.
              </p>

              <p className="truck-services-para122">
                With consultation rates, you can broaden the range of services you provide.
              </p>

              <p className="truck-services-para11">
                On the surface, freight rate discussions may appear straightforward. You have a truck and an hourly rate or an
                average rate per mile for you as the truck driver. You also have to examine the type of cargo being transported, as
                well as any additional problems or considerations that may arise. These aspects can be incorporated into your
                negotiations.
              </p>
            </div>
          </div>

          <div className="row truck-services-sec3-div1">
            <div className="col-lg-6 col-12 d-flex  pr-5">
              <div>
                <h1 className="truck-services-text1">
                  Contact American Movers LLC to Negotiate the Best Truck Rate for Your Services.
                </h1>
                <p className="truck-services-text2">
                  American Movers LLC is all about finding the best truck driver hourly rate and so much more. Are you prepared to
                  begin? It all starts when you contact us for a quote.
                </p>
                <p className="truck-services-text2">
                  Contact our knowledgeable and pleasant team using the information provided below. You can contact us by email or
                  phone, and we will handle it from there.
                </p>

                <p className="truck-services-text2">
                  Allow us to handle rate negotiations and other aspects of your trucking operation. We'll let you handle the driving.
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
              <FAQ
                question={faq.question}
                answer={faq.answer}
                key={faq.id}
              />
            );
          })}
        </div>
      </div>

      <Gross></Gross>
    </div>
  );
}

export default Rate;
