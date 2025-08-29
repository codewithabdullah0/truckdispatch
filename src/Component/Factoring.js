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

function Factoring() {
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
                    Factoring <br /> service
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
            <h1 className="truck-dispatch-sec2-text1 ">Factoring service:</h1>
            <h1 className="truck-dispatch-sec2-text2">
              Improved Factoring Service Choices for Trucking Companies
            </h1>
            <p className="truck-dispatch-sec2-text3 pt-2">
              Running a business can be difficult enough, especially if it's
              tiny or you're just getting started, but being able to maintain a
              consistent flow of income can make the difference between failing
              and succeeding. Unpaid bills cause major disruptions, particularly
              if you rely on the incoming money for rent or employment.
            </p>
            <p className="truck-dispatch-sec2-text3">
              Because of this, American Movers has partnered with reputable
              factoring firms to offer our clients factoring options that have
              the potential to significantly alter their business practices
            </p>

            <h1 className="truck-dispatch-sec2-text2 pt-4">
              Freight factoring: what is it?
            </h1>

            <p className="truck-dispatch-sec2-text3 ">
              Owner-operators and carriers alike can convert past-due bills into
              cash with the use of truck factoring services, sometimes referred
              to as freight factoring. In essence, a trucking industry
              third-party freight factoring company will purchase those unpaid
              invoices at an advance rate often between 80% and 90% of the
              invoice value and then pursue collection of the outstanding
              invoices.
            </p>

            <h1 className="truck-dispatch-sec2-text2 pt-4">
              Reasons to Think About Using a Truck Factoring Service
            </h1>
            <p className="truck-dispatch-sec2-text3">
              In the trucking sector, factoring entails that the risk of
              non-payment is assumed by someone else. Finding a freight
              factoring specialist for trucking firms is worthwhile for many,
              even if the result is a discounted amount for bills. This is
              because the funds are available right away, allowing the company
              to cover overhead or even take on more work to increase profits.
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
            <div className="col-lg-6 col12 d-flex pr-5">
              <div>
                <h1 className="truck-services-text1">
                  The Advantages of Factoring for Transportation Businesses
                </h1>
                <p className="truck-services-text2">
                  A few advantages of factoring for a trucking company have been
                  mentioned, but let's examine them in more detail. Working with
                  a factoring business for the trucking sector necessitates that
                  drivers be a little hesitant to give up some of their
                  earnings, which is not uncommon. Nonetheless, the slight loss
                  of profit can result in significant benefits for drivers and
                  businesses, potentially even leading to an increase in profits
                  in the long run.
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
                <h1 className="truck-services-text4">Quick funds upfront</h1>
              </div>

              <p className="truck-services-para11">
                The time between accepting a job and getting paid for it can
                frequently be delayed. While this may not always be an issue—for
                instance, when business is booming and revenue is high—it can
                seriously harm drivers during hard times. Furthermore, it is
                unfair because the truck driver has fulfilled their part of the
                contract and is still unpaid
              </p>

              <p className="truck-services-para11">
                Such a worry does not exist with factoring. The truck driver
                obtains their capital quickly and without delay once the
                third-party freight factoring or trucking factoring provider
                pays money ahead.
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
                  A more dependable revenue stream
                </h1>
              </div>

              <p className="truck-services-para11">
                For truck drivers, predicting and making future projections can
                be challenging. Drivers are unable to forecast with certainty
                when they will receive the money that is owed to them since even
                when orders are coming in, it is likely that many of the
                payments on these orders will be delayed. This is a serious
                problem, especially in terms of getting funding or loans for
                initiatives aimed at expanding businesses. In other words, it is
                difficult for truck drivers and owner-operators to expand their
                businesses in the manner that they would like when there is a
                lack of reliability.
              </p>

              <p className="truck-services-para11">
                This unpredictability is eliminated with a truck factoring
                service. Drivers that accept factoring orders and jobs are
                guaranteeing a steady source of revenue. They may then
                demonstrate their yearly earnings with this steady stream of
                cash, which will help them draw in investors, get approved for
                loans, and grow the company's capabilities.
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
                  Better income-related flexibility options
                </h1>
              </div>

              <p className="truck-services-para11">
                Accepting a calculated order might not be to everyone's taste
                among drivers. Since the driver is the one doing the driving, it
                may seem unfair that they can only expect to receive 80% or 90%
                of the transaction's entire cost when accepting this type of
                order. The premise behind factoring services, however, is that a
                driver or trucking company accepts this lowered rate in order to
                connect with a more dependable payment source.
              </p>

              <p className="truck-services-para11">
                As an owner-operator or truck driver, this offers you
                flexibility. Orders that figure in and give you a steady income
                stream that you can rely on are acceptable to accept. Then, by
                accepting additional orders with full payment, you can increase
                this revenue. Thanks to this improved flexibility, you can
                choose to modify the ratio in either direction as your
                circumstances change and you become more or less risk averse.
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
                  Better service with little risk
                </h1>
              </div>

              <p className="truck-services-para11">
                For truck drivers, the possibility of not getting paid at all is
                a far more significant problem than an inconsistent payment
                schedule. Conflicts with customers, dishonest clients, and a
                plethora of other variables can raise the possibility of
                non-payment. This can have disastrous effects for
                owner-operators of truck drivers or small transportation
                companies. Too many companies have had severe difficulties as a
                result of their inability to obtain the payments they are due.
              </p>

              <p className="truck-services-para11">
                Obviously, truck drivers will greatly gain from this. A truck
                factoring business transfers the risk of nonpayment to a third
                party. Because you don't have to worry about getting paid, you
                can concentrate on other, more enjoyable parts of managing your
                company.
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
                  The Operation of Truck Factoring
                </h1>
              </div>

              <p className="truck-services-para11">
                The following is the usual procedure you'll experience with
                trucker factoring:
              </p>

              <p className="truck-services-para11">
                ✔ You bill your client for the services rendered. <br />
                ✔ You designate a truck factoring service for outstanding
                payments. All of your outstanding invoices are assigned to the
                freight factoring business if you engage in contract factoring
                (high volume). You choose which invoices to designate for truck
                factoring services if you choose to use spot factoring for
                trucking (low volume). <br />
                ✔ The truck factoring company pays you the agreed-upon advance.
                Once everything is set up, this can be as soon as within 24
                hours. <br />
                ✔ After your client pays the truck factoring service, the
                factoring firm will now be in charge of contacting clients to
                collect payment <br />✔ When the bill has been settled, the
                factoring company will take its fee cut and then send you the
                balance
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
                  Which type of factoring—non-recourse or recourse—is better for you?
                </h1>
              </div>

              <p className="truck-services-para11">
                Your agreement for truck factoring services can be a recourse
                agreement or a non-recourse agreement.
              </p>

              <p className="truck-services-para11">
                You have to purchase your clients back if you have a recourse agreement and they don't pay their invoices. The
                freight factoring business might even impose extra costs.
              </p>

              <p className="truck-services-para11">
                If your agreement is non-recourse, the unpaid bills become the property of the factoring business as soon as they
                are assigned to them. It is no longer your problem if the clients fail to make payments. Consequently, factoring
                organizations typically demand higher charges for non-recourse agreements.
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
                  Truck Factoring: Benefits and Drawbacks
                </h1>
              </div>

              <p className="truck-services-para11">
                Whether or whether you choose to employ a truck factoring service will rely on your business model, operational
                scale, and desired level of risk, just like with any other significant business choice.
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
                  Why Choose American Movers’s Factoring Services for Your
                  Trucking Company
                </h1>
              </div>

              <p className="truck-services-para11">
                Drivers pick American Movers LLC and the factoring firms we work with for a variety of reasons. To assist you in
                making your decision and to understand more about what sets us apart from the competition, we've enumerated
                some of the most crucial elements.
              </p>

              <p className="truck-services-para122">
                Our priority is safeguarding our clients' financial gains
              </p>

              <p className="truck-services-para11">
                At American Movers LLC, our first priority has always been our customers' success. We assist our customers in
                obtaining the most out of truck factoring services and reaping the rewards that come with using them. You may
                count on us to choose a reliable factoring partner who will prioritize your needs.
              </p>

              <p className="truck-services-para122">
                Why Use Factoring Services from American Movers LLC for Your Trucking Company?
              </p>

              <p className="truck-services-para11">
                There are numerous reasons why drivers pick American Movers LLC and the factoring firms we work with. We've
                developed a list of the most significant aspects to assist you in making your decision and learning more about what
                makes us the finest in the business.

              </p>

              <p className="truck-services-para122">
                We are committed to safeguarding our clients' revenues.
              </p>

              <p className="truck-services-para11">
                At American Movers LLC, we have always prioritized our clients and their earnings. We assist our clients in getting
                the most out of truck factoring services and reaping the benefits that these services provide. You may count on us to
                choose a reliable factoring partner who will prioritize your needs.
              </p>

              <p className="truck-services-para122">
                We are familiar with the trucking sector and everything that it includes
              </p>

              <p className="truck-services-para11">
                You must have confidence that you are dealing with a staff that truly understands your profession, industry, and
                what you do. We at American Movers LLC are delighted to be a part of that team. We know this market inside and
                out, and we are also experts in picking the finest factoring partner for your company, allowing you to get the most
                out of it. You can count on us to always be on your side and in your corner.
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
                  Trucking invoice factoring simplified
                </h1>
              </div>

              <p className="truck-services-para11">
                We are pleased to collaborate with reputable factoring firms. They provide the means for us to provide our clients
                with highly effective trucking factoring services and connect them with a variety of benefits. We are committed to
                working together to help you and your company achieve more while on the road.
              </p>
            </div>
          </div>

          <div className="row truck-services-sec3-div1">
            <div className="col-lg-6 col-12 d-flex pr-5">
              <div>
                <h1 className="truck-services-text1">
                  Learn More About Our Truck Factoring Services or Begin Now
                </h1>

                <p className="truck-services-text2">
                  Many trucking companies rely on factoring services to stay in business and maintain a healthy cash flow so that their
                  businesses can thrive. We assist our clients in locating a dependable partner who can deliver the quality factoring
                  services they require to move forward.
                </p>

                <p className="truck-services-text2">
                  Contact us today to see if factoring makes sense for your company.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12 ">
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

export default Factoring;
