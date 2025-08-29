import React from "react";
import "./TruckDispatch.css";
import AmericanMovers from "./AmericanMovers";
import truckserviceimg1 from "../Images/flatbed-article.jpg";
import truckserviceimg2 from "../Images/image 55.svg";
import Work from "./Work.js";
import Gross from "./Gross.js";
import { Link } from "react-router-dom";
import FAQ from "./FAQ.js";
import { questions } from "./FAQquest.js";
import { useState } from "react";

function FlatBed() {
  const [faqs, setfaqs] = useState(questions);

  return (
    <div className=" truck-main-div11122">
      <div className="container-fluid truck-div1">
        <div className="w-100 trucks-div-11">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex justify-content-center">
              <div>
                <div>
                  <h1 className="truck-dispatch-text1">Flatbed</h1>
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
                  Flatbed Dispatch Services from American Movers LLC –
                  Supporting You While You Get the Job Done
                </h1>
                <p className="truck-services-text2">
                  Find a truth-speaking service partner by contacting American
                  Movers LLC.
                </p>

                <p className="truck-services-text2">
                  Your truck with a flatbed is a powerful machine. Because of
                  this, it helps our economy in ways that other cars just
                  cannot.
                </p>

                {/* <p className="truck-services-text2">
                  Construction projects that need piping, beams, frames and
                  other bulky or oddly shaped items. Landscaping sites ordering
                  huge quantities of materials and ballast. Any location in
                  which a large piece of equipment is required. All of these
                  applications call for heavy-duty logistics capabilities.
                </p> */}
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
                construction projects requiring beams, frames, pipes, and other
                large or asymmetrical components. landscaping projects placing
                large orders for ballast and materials. any place where a big
                piece of equipment is needed. These applications all require
                robust logistical skills.
              </p>
              <h1 className="truck-services-text4 d-flex ml-0 mt-5">
                Flatbed Dispatch Services' Advantages
              </h1>

              <p className="truck-services-para11">
                A multitude of advantages are available to firms through the
                flatbed truck dispatch services. Among them are the following:
              </p>

              <p className="truck-services-para122">
                Invest less and reap greater rewards with flatbed truck
                dispatch.
              </p>
              <p className="truck-services-para11">
                Purchasing a flatbed truck is a costly endeavour. There is still
                fuel, insurance, tax, and maintenance expenses to think about
                even after the truck is paid for. You can acquire a substantial
                return on your investment and long-term financial security by
                using your truck properly. You must, however, confirm that this
                is the fact.
              </p>
              <p className="truck-services-para11">
                You may achieve this ROI by connecting with the necessary income
                streams through flatbed dispatch services. Relying on a dispatch
                service to match you with jobs will mean that your investment is
                recovered much faster and that your profits exceed the expenses
                of operating your truck. It can be challenging to find business
                on your own, particularly if you are an owner-operator operating
                alone or are not yet well-established. For this reason, a large
                number of drivers in the US find these services to be extremely
                beneficial.
              </p>
              <p className="truck-services-para122">
                Obtain a more dependable source of revenue
              </p>
              <p className="truck-services-para11">
                As your company expands and matures, you'll notice that your
                thoughts are shifting to the future. There are a lot of
                opportunities for future growth in scope and income, but there
                can be challenges along the road. These challenges will be far
                more significant if you are unable to accurately forecast and
                demonstrate your revenue. Without this, it will be hard to draw
                in investment and, to mention just two examples, you might not
                be qualified for company development loans.
              </p>
              <p className="truck-services-para11">
                You will find that projecting and planning your future earnings
                becomes much easier when you have a dependable flatbed dispatch
                service on your side. As your income becomes more steady, you
                may start establishing reasonable goals for development and
                growth. This is extremely hard to accomplish if you are looking
                for contracts and tasks on your own.
              </p>
              <p className="truck-services-para122">
                Deal with the appropriate clients
              </p>
              <p className="truck-services-para11">
                You take great pride in helping your clients and giving them
                outcomes that truly bring a smile to their faces. Most of your
                clients are aware of this and appreciate the excellent work you
                do for them. Sadly, a majority indicates that you will always
                have clients that find it difficult to work with and who do not
                value what you do.
              </p>
              <p className="truck-services-para11">
                You are somewhat protected from this tiny percentage of
                customers when you use a dispatch service, and you have a higher
                chance of landing a job with a dependable and trustworthy
                clientele. Additionally, your chances of finding jobs that fit
                your firm and equipment are increased. You'll be able to grow
                your business in these niche markets and establish connections
                with customers who particularly require flatbed services.
              </p>
              <p className="truck-services-para122">
                Enjoy a more efficient approach to managing your company.
              </p>
              <p className="truck-services-para11">
                It can be difficult to go it alone and to have to search for
                work by yourself. If you are not yet an established name in the
                industry or you lack the time and resources required for high
                levels of promotion, these difficulties can be compounded.
              </p>
              <p className="truck-services-para11">
                Services like flatbed dispatch take care of this worry. Your
                team is working for you, finding you as much or as little work
                as you require at any given time. This is a mental weight lifted
                off of you. It also frees you up to concentrate only on
                operating your flatbed.
              </p>
              <p className="truck-services-para122">
                Obtain a just compensation for your work.
              </p>
              <p className="truck-services-para11">
                We at American Movers LLC are familiar with what it takes to be
                a truck driver. We acknowledge the need for a fair rate and a
                fair salary because we know how demanding and taxing this work
                can be. We therefore focus our dispatch services on assisting
                you in achieving this.
              </p>
              <p className="truck-services-para11">
                You shouldn't have to accept anything less than what you
                deserve, in our opinion. You ought to be able to expand and
                improve your company with the correct dispatch service without
                having to worry about getting paid too little or receiving too
                little appreciation.
              </p>
              <p className="truck-services-para122">
                Selecting American Movers LLC for Dispatch of Flatbed Trucks
              </p>
              <p className="truck-services-para11">
                We take great pride in the dispatch services we offer to our
                customers. Our core values are honesty and dependability, and
                providing you with a service you can trust so you can focus on
                finishing the task at hand. Here's what to anticipate:
              </p>

              <p className="truck-services-para11">
                A comprehensive set of services: Our experienced team will help
                you and your flatbed find loads, negotiate with customers,
                manage billing and paperwork, and more.
              </p>
              <p className="truck-services-para11">
                Sincere and trustworthy service: We never deceive you about
                anything, nor do we offer unfulfilled promises. We are at your
                side the entire time.
              </p>
              <p className="truck-services-para11">
                A personalized approach to dispatch: When you collaborate with
                our team, we guarantee your assistance. Please let us know if
                you require anything more from us or if you are dissatisfied
                with any of our offerings, and we will work to make things
                right.
              </p>
              <p className="truck-services-para11">
                Streamlined processes: We have created our protocols to take
                into account your desire for the dispatch process to be as
                effective as feasible.
              </p>
              <p className="truck-services-para11">
                Call Us Today and Get a Quote for Our Flatbed Dispatch Services
              </p>
              <p className="truck-services-para11">
                Are you prepared to begin? Request an estimate for our services
                by contacting us via phone or email
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

export default FlatBed;
