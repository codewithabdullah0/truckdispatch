import React, { useState } from 'react'
import './Navbar.css'
import logopic1 from '../Images/Rectangle.svg'
import {Link} from 'react-router-dom'
import { HashLink } from "react-router-hash-link";   


function Navbar() { 


  const [activeStatus, setactiveStatus] = useState("home");
  const [toggle, settoggle] = useState(true);
  const [open, setopen] = useState(true);

  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-div12 p-0 ">
          <div className='logo-div1'>
            <Link class="navbar-brand" to="/"><div className='d-flex logo-div2 align-items-center'>
              <div className='logo-div3'>
                <img src={logopic1} alt="" />
                </div>
              <div>
                <h1 className='logo-text1'>AMERICAN <br /> MOVERS LLC</h1>
                </div>
            </div>
            </Link>
          </div>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav navbar-ul1 mx-auto">
              <li class="nav-item active navbar-li1">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item  navbar-li1" >
                <HashLink
                  class="nav-link"
                  to="/#service"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                >
                  Services
                </HashLink>
              </li>
              <li class="nav-item navbar-li1">
                <HashLink
                  class="nav-link"
                  to="/#trucktypes"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                >
                  Truck types
                </HashLink>
              </li>

              <li class="nav-item navbar-li1">
                <Link class="nav-link" to="/how-to-start">How to start</Link>
              </li>
              <li class="nav-item navbar-li1">
                <Link
                  class="nav-link"
                  to="/shippers"
                >
                  Shippers
                </Link>
              </li>

              <li class="nav-item navbar-li1">
                <HashLink
                  class="nav-link"
                  to="/truck-dispatch#faq"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                >
                  FAQ
                </HashLink>
              </li>
              <li class="nav-item navbar-li1">
                <Link class="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='navbar-btn-div1 d-lg-block d-none '>
            <a href="tel:+16403004266">
              <div className='navbar-btn-div2'>+1 640 300 4266</div>
            </a>
          </div>
        </nav>
      </div>











  <div>

        <nav class="navbar mobile-navbar-div1 d-flex d-lg-none  ">
          <Link
            class="navbar-brand"
            to="/"
          >
            <div className='d-flex logo-div2 align-items-center'>
              <div className='logo-div3'>
                <img src={logopic1} alt="" />
              </div>
              <div>
                <h1 className='logo-text1'>AMERICAN <br /> MOVERS LLC</h1>
              </div>
            </div>
          </Link>
          <button
            class="navbar-toggler mobile-nav-toogler"
            type="button"
            // data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => settoggle(!toggle)}
          >
            <svg
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H26.0344"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M2.06592 11.3569H21.398"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M2.06592 20.7959H15.1281"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </button>





          <div
            class={`${toggle
              ? "navbar-collapse mobile-navbar-div2"
              : "navbar-collapse mobile-navbar-div2 show"
              } `}
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mx-auto">
              <li
                className={`${activeStatus === "about"
                  ? "nav-item mobile-nav-item active home1"
                  : "nav-item mobile-nav-item home1"
                  }`}
              >
                <Link
                  class="nav-link"
                  to="/about"
                  onClick={() => {
                    settoggle(!toggle);
                  }}
                >
                  About
                </Link>
              </li>



              <li
                className={`${activeStatus === "about"
                  ? "nav-item mobile-nav-item active home1"
                  : "nav-item mobile-nav-item home1"
                  }`}
              >
                <HashLink
                  class="nav-link"
                  to="/#service"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  onClick={() => {
                    settoggle(!toggle);
                  }}
                >
                  Services
                </HashLink>
              </li>



              <li
                className={`${activeStatus === "about"
                  ? "nav-item mobile-nav-item active home1"
                  : "nav-item mobile-nav-item home1"
                  }`}
              >
                <HashLink
                  class="nav-link"
                  to="/#trucktypes"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  onClick={() => {
                    settoggle(!toggle);
                  }}
                >
                  Truck Types
                </HashLink>
              </li>

 <li
                className={`${activeStatus === "about"
                  ? "nav-item mobile-nav-item active home1"
                  : "nav-item mobile-nav-item home1"
                  }`}
              >
                <Link
                  class="nav-link"
                  to="/how-to-start"
                  onClick={() => {
                    settoggle(!toggle);
                  }}
                >
                  How to start
                </Link>
              </li>


              <li
                className={`${activeStatus === "career"
                  ? "nav-item mobile-nav-item active home1"
                  : "nav-item mobile-nav-item home1"
                  }`}
              >
                <Link
                  class="nav-link"
                  to="/shippers"
                  onClick={() => {
                    settoggle(!toggle);
                  }}
                >
                  Shippers
                </Link>
              </li>


              <li
                className={`${activeStatus === "career"
                  ? "nav-item mobile-nav-item active home1"
                  : "nav-item mobile-nav-item home1"
                  }`}
              >
                <HashLink
                  class="nav-link"
                  to="/truck-dispatch#faq"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  onClick={() => {
                    settoggle(!toggle);
                  }}
                >
                  FAQ
                </HashLink>
              </li>

              <li
                className={`${activeStatus === "contact"
                  ? "nav-item mobile-nav-item active home1"
                  : "nav-item mobile-nav-item home1"
                  }`}
              >
                <Link
                  class="nav-link"
                  to="/contact"
                  onClick={() => {
                    settoggle(!toggle);
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div> 







      
    </div>

  )
}

export default Navbar
