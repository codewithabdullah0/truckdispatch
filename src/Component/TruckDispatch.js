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


function TruckDispatch() {

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
                    Truck <br />
                    dispatching
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
            <h1 className="truck-dispatch-sec2-text1 ">Truck Dispatching:</h1>
            <h1 className="truck-dispatch-sec2-text2">
              We at American Movers take great pride in being the truck dispatcher business you can trust.
            </h1>
            <p className="truck-dispatch-sec2-text3 pt-2">
              The best truck driver dispatcher services are essential to the success of your logistics and transport business. Here's
              where American Movers come into their own.
            </p>
            <p className="truck-dispatch-sec2-text3">
              We serve transportation companies all around the nation with these services, and our headquarters are in
              Northumberland, Pennsylvania, 17857 USA. This implies that you can carry on offering your vital transportation
              services and utilizing your logistics to support our economy and community.
            </p>
            <p className="truck-dispatch-sec2-text3">
              To get things started, contact us via phone or email. Our staff is here to help you learn more about working with
              American Movers and to get you the quote you require for your company. Our focus is providing support for your
              transportation business.
            </p>
            {/* <p className="truck-dispatch-sec2-text3">
              Get in touch with us by email or by telephone to get started. Our
              team is on hand to provide you the quote you need for your
              business, and to help you learn more about working with American
              Movers. Supporting your trucking operation is our passion.
            </p> */}
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
            <div className="col-lg-6 col-12 d-flex pr-5">
              <div>
                <h1 className="truck-services-text1">
                  What Our Truck Dispatch Services Can Offer You
                </h1>
                <p className="truck-services-text2">
                  Regular dispatch and route organization services must be dependable. In light of this, we have developed a package
                  of dispatch services that are backed by the advancements that truck drivers in America are seeking. So that you can
                  continue doing what you do best, let us be your trusted operators.
                </p>
                <p className="truck-services-text2">
                  Taking care of little things, like truck dispatching, is what we all do. Thus, all you have to do is concentrate on driving
                  and delivering.
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
              What to expect when working with us is as follows.
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
                  Quick and transparent truck dispatch to help your company
                </h1>
              </div>

              <p className="truck-services-para11">
                Logistics is becoming more and more dependent on quick turnaround times and real-time communication. This and
                more can be provided by our certified dispatchers, providing you with the kind of groundwork required to do the
                task correctly. Working with our team will be enjoyable as we strive to resolve issues and get you moving forward as
                soon as possible.
              </p>
              <h1 className="truck-services-para22">
                Happy customers who are ecstatic about your service
              </h1>
              <p className="truck-services-para11">
                Your ability to succeed as a truck driver or owner operator depends on your ability to fulfill your duties to your
                clientele. By going above and above their expectations in terms of pickup and delivery timeliness and quality, you
                want to maintain these clients' satisfaction. We strive to assist you in appropriately establishing that reputation since
                we acknowledge this
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
                  A steady source for revenue
                </h1>
              </div>

              <p className="truck-services-para11">
                Your ability to succeed as a truck driver or owner operator depends on your ability to fulfill your duties to your
                clientele. By going above and above their expectations in terms of pickup and delivery timeliness and quality, you
                want to maintain these clients' satisfaction. We strive to assist you in appropriately establishing that reputation since
                we acknowledge this.
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
                  The chance to expand and build your company
                </h1>
              </div>

              <p className="truck-services-para11">
                Dispatching enables you to maximize your company's potential in the short and long run. You'll be able to predict the
                demand for your services and adjust your growth and scaling plans accordingly in a timely manner. Additionally,
                you'll be able to spot unexplored possibilities and other growth regions.
              </p>
              <h1 className="truck-services-para22">
                A seamless procedure at every stage
              </h1>
              <p className="truck-services-para11">
                The actual driving and delivery portions of your operation are frequently impeded by duties like truck driver dispatch
                and administration. This does not have to be the case, though. We provide you with a hassle-free, stress-free
                experience that causes you the least amount of anxiety. This means you won't have to worry about anything else
                other than driving and giving the finest service possible.
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
                  The ideal partnership for you and your company
                </h1>
              </div>

              <p className="truck-services-para11">
                We don't think of our customers as being no more than names and numbers on a shipment manifest. Rather, we
                recognize that every one of our clients has specific needs, and we make an effort to learn about them. You may be
                confident that we are looking out for your best interests since this enables us to give you the proper kind of service.
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
                  Straightforward costs that works for you
                </h1>
              </div>

              <p className="truck-services-para11">
                Our group is dedicated to supporting you and your business. For this reason, you may trust that our truck freight
                dispatch service offers clear pricing. This implies that you won't have to worry about how much our services will cost
                you when you arrange your transportation operations.
              </p>
            </div>
          </div>

          <div className="row truck-services-sec3-div1">
            <div className="col-lg-6 col-12 d-flex pr-5">
              <div>
                <h1 className="truck-services-text1">
                  Start Working with American Movers Right Now
                </h1>
                <p className="truck-services-text2">
                  Get in touch with our staff right now to receive an estimate or learn more about how our dispatch services surpass
                  your expectations. Contact our staff by phone or email using the information provided below.
                </p>
                <p className="truck-services-text2">
                  Taking care of little things, like truck dispatching, is what we all do. Thus, all you have to do is concentrate on driving
                  and delivering
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

export default TruckDispatch;
