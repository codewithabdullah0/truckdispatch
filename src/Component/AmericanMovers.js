import React from "react";
import "./AmericanMovers.css";
import truckimg1 from "../Images/Trailer-Truck-Mockup-Free-PSD 2.png";
import starimg1 from "../Images/Group 7.svg";
import Fade from "react-reveal/Fade";


function AmericanMovers() {
  return (
    <div className="movers-maindiv1">
      <div className="container-fluid movers-div1">
        <div className="star-img-div1 d-md-block d-none">
          <img src={starimg1} className="star-img-1" alt="" />
        </div>

        <div className="row">
          <div className="col-lg-6 col-12 movers-img-div1">
            <div>
              <Fade bottom distance="0%">
                <img src={truckimg1} alt="" />
              </Fade>
            </div>
          </div>
          <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center usa-movers-div233">
            <div>
              <Fade bottom distance="1%">
                <h1 className="movers-text1">
                  What Is <br /> American <br /> Movers?
                </h1>
                <a href="tel:+16403004266">
                  <div className="movers-btn1">Call Us</div>
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmericanMovers;
