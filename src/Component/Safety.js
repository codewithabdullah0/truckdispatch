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

function Safety() {
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
                    SAFETY / DOT <br /> compliance
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
            <h1 className="truck-dispatch-sec2-text2">Safety Compliance</h1>
            <p className="truck-dispatch-sec2-text3 pt-2">
              Maintaining compliance with rules and industry mandates is a chore
              for many business owners. Nobody enjoys paperwork, and it can be
              difficult to keep up with all of the changes. Worse, mistakes or
              omissions can result in expensive penalties. Fortunately, American
              Movers LLC offers a solution for you.
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
                  FMCSA/DoT Requirements and Beyond
                </h1>
                <p className="truck-services-text2">
                  Navigating all of the Department of Transportation and Federal
                  Motor Carrier Safety Regulations can be timeconsuming. Even
                  with a 1-ton vehicle, there is a lot of documentation and
                  monitoring required. Here are several prerequisites you should
                  be aware of.
                </p>
                <p className="truck-services-text2">
                  Contact us immediately to get on board with safety compliance
                  while also freeing up time to increase earnings
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
                  Qualification of the Driver
                </h1>
              </div>

              <p className="truck-services-para11">
                Driver qualification files, which include information such as
                driving history, employment history, road test certificate,
                certificate of infractions, and a three-year inquiry to state
                authorities, are required if you are planning to hire drivers to
                haul interstate and intrastate loads. This is in addition to
                meeting the normal driving requirements. Driver qualification
                logs must be updated at least once a year. In some cases, the
                Department of Transportation demands drug and alcohol testing
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
                  Truck ELD Driver Log Requirements/ELogs for Truck Drivers
                </h1>
              </div>

              <p className="truck-services-para11">
                The FMCSA truck ELD requirements went into effect in December
                2019. Carriers must use an ELD (electronic logging device that
                provides electronic logs for truck drivers) linked to the truck
                engine to monitor compliance with the daily Hours of Service
                mandate. You must also undertake monthly summaries of driver
                logs and reports in order to take appropriate action if
                non-compliant behaviour is observed. Truck driver elogs are a
                common target for DoT inspectors and auditors, thus it is
                critical that you get this properly.
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
                <h1 className="truck-services-text4">Other Prerequisites</h1>
              </div>

              <p className="truck-services-para11">
                Of course, the DoT/FMCSA permits roadside safety audits and
                inspections as well as state mileage audits and inspections. You
                can also have IRP and IFTA audits. That's a lot to keep track
                of, so why not leave it to American Movers LLC?
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
                  How to Select a DOT Compliance Service?
                </h1>
              </div>

              <p className="truck-services-para11">
                When it comes to compliance, there is very little wiggle space.
                The trucking sector is strictly regulated, and for good reason:
                to safeguard the interests of drivers and clients, as well as to
                ensure the safety of everyone on the road. Staying compliant is
                therefore crucial for all drivers and owner-operators. It also
                implies that there is no room for error.
              </p>

              <p className="truck-services-para11">
                With this in mind, it makes sense to select a DOT compliance
                service that can assist you in achieving compliance with minimal
                effort. As a truck driver, you already have a lot on your mind
                when it comes to running your business and giving your clients
                with the best service possible. Allowing a reliable partner to
                handle your compliance can make the rest of your operations much
                easier.
              </p>

              <p className="truck-services-para122">
                Consider some of the advantages of working with a dependable DOT
                compliance partner
              </p>

              <p className="truck-services-para122">
                Having peace of mind when dealing with computerized logs for
                truck drivers
              </p>

              <p className="truck-services-para11">
                Driver logs must now be entirely computerized. This means that
                your drivers' daily logs, as well as all other routine logging
                and reporting, must be handled by a truck ELD. This makes truck
                drivers' lives easier, but it also adds an element of fear.
                These electronic driver logs must be properly controlled and
                maintained, otherwise they will result in non-compliance and a
                heavy charge.
              </p>

              <p className="truck-services-para11">
                The correct solution provider will handle these elogs for truck
                drivers so that you don't have to. This manner, you may enjoy
                the benefits of electronic records for drivers without having to
                deal with the inconveniences and challenges that can accompany
                them.
              </p>

              <p className="truck-services-para122">
                Keep your company's revenue safe.
              </p>
              <p className="truck-services-para11">
                Government agencies and authorities enforce ELD truck
                requirements and other compliance standards. This means that if
                you are found to be operating outside of the compliance laws and
                regulations, you may face a fine. Keeping your vehicle elogs up
                to date and ensuring that your company follows all safety
                standards thoroughly can help you avoid such penalties.
              </p>

              <p className="truck-services-para11">
                However, the appropriate service might do far more for you and
                your company. Your clients are very concerned about regulatory
                compliance. They want to know that you are adhering to driver
                log requirements, ensuring public safety, and going above and
                beyond to be a responsible and dependable driver and
                owner-operator. When you comply with regulations, you are
                offering this to your customers, and a compliance service can
                assist you in doing so.
              </p>
              <p className="truck-services-para122">
                Grow your company with confidence.
              </p>
              <p className="truck-services-para11">
                You are focused on delivering excellent results for your clients
                right now, but you are also considering the future. You must be
                able to increase your business and what you provide to your
                consumers while remaining confident in your abilities.
              </p>
              <p className="truck-services-para11">
                Perhaps you wish to expand your business fleet and buy an ELD
                for a one-ton truck, for example. Alternatively, you may simply
                wish to ensure that all of your commercial vehicles and trucks
                are using the ELD system. Perhaps you want to ensure that all of
                your vehicles and operations, even at scale, are fully compliant
                with safety regulations. The correct service provider will be
                able to help you with this.
              </p>
              <p className="truck-services-para122">
                Concentrate on running your business correctly
              </p>

              <p className="truck-services-para11">
                You enjoy driving and serving your clients wherever they may be
                found. You might not enjoy methodically tracking your driving
                activity or verifying each and every part of compliance
                legislation to ensure you are in compliance.
              </p>
              <p className="truck-services-para11">
                This is why DOT compliance services are so useful to truck
                drivers and owner-operators. With these services, drivers can
                focus on doing what they do best — driving and going above and
                beyond client expectations.
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
                  How American Movers LLC Maintains Compliance
                </h1>
              </div>

              <p className="truck-services-para11">
                We at American Movers LLC have a finger on the pulse of the
                DoT/FMCSA regulatory matrix thanks to our years of industry
                expertise and experience. We keep up with current events so that
                our clients don't have to - after all, all they want to do is
                drive and make money, and we're here to help them do exactly
                that. Aside from comprehensive load dispatch, we also assist
                owners/operators and motor carriers with:
              </p>
              <p className="truck-services-para11">
                Preparation and Management of Driver Qualification Files -
                Creating and maintaining driver qualification files takes time
                and effort that you could be spending driving loads and earning
                more money. American Movers LLC will gladly gather and arrange
                all driver qualification paperwork and research so that all you
                have to do is decide who to hire and evaluate. Our computerized
                file management solution makes maintaining your driver
                qualification files simple and dependable.
              </p>

              <p className="truck-services-para11">
                ELD Log Management - American Movers LLC has extensive bring
                forward/reminder systems that assist us in ensuring that all
                monitoring, assessment, and recap reports are up to date. We
                also look for any driver violations and indicators of log
                fabrication. As a result, you not only remain compliant but also
                take appropriate and timely corrective action to stop any
                non-compliant behaviour.
              </p>

              <p className="truck-services-para11">
                Audit Support - American Movers LLC can help you prepare for
                forthcoming audits and inspections. We can do the necessary
                assessments and walk you through any form of simulated audit –
                safety, mileage, IRP, IFTA, and whatever else the FMCSA/DoT
                throws at you. We also help with CAP letters and post-audit
                responses.
              </p>

              <p className="truck-services-para11">
                American Movers LLC maintains up to date on any advancements in
                the DoT/FMCSA regulatory field and can walk you through all of
                the laws and standards.
              </p>
            </div>
          </div>

          <div className="row truck-services-sec3-div1">
            <div className="col-lg-6 col-12 d-flex  pr-5">
              <div>
                <h1 className="truck-services-text1">
                  What You Get with American Movers LLC Compliance Solutions
                </h1>
                <p className="truck-services-text2">
                  Our single goal at American Movers LLC is to help truck
                  drivers and carriers make more money, mostly by saving them
                  important time. Instead of being burdened by paperwork,
                  compliance monitoring, and reporting, our clients can focus on
                  what they do best: deliver loads and earn more money. We also
                  give our clients the peace of mind that comes from knowing
                  that, thanks to our considerable knowledge and know-how, we
                  can help you avoid compliance infractions and keep your firm
                  in compliance with all industry laws and requirements. Contact
                  us immediately to get on board with safety compliance while
                  also freeing up time to increase earnings
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

export default Safety;
