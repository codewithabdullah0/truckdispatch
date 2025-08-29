import React from 'react'
import './Home.css'
import bannertruckimg1 from '../Images/three-truck.png'
import servicespic1 from '../Images/home-services-img1 (1) 1.png'
import charityimg1 from '../Images/file-2776-6d6eb01e151d039773228c5dc790a295 1.png'
import AmericanMovers from './AmericanMovers'
import Work from './Work'
import Gross from './Gross'
import supporttruckpic1 from '../Images/Home page Footer above section truck.png'
import servicespic2 from '../Images/service-billing-article2 1.png'
import servicespic3 from '../Images/home-services-img4 1.png'
import servicespic4 from '../Images/home-services-factoring 1.png'
import servicespic5 from '../Images/home-services-rate 1.png'
import servicespic6 from '../Images/home-services-img6 2.png'
import servicespic7 from '../Images/home-services-img3 1.png'
import servicespic8 from '../Images/company-formation-service-im-1 2.png'
import {Link} from 'react-router-dom'
import Fade from "react-reveal/Fade";



function Home() {
  return (
    <div>
      <div className='container-fluid home-banner-div1'>
        <div className='container home-banner-div1122'>
          <div className='row'>
            <div className='col-lg-5 col-12'>
              <div>
                <Fade bottom distance="0%">
                <h1 className='home-banner-text1'>Freight Dispatch Service <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                  <path d="M25.5 -2.22928e-06L23.3196 19.5095L9.10892 5.96586L19.9791 22.3125L0.387404 21.072L19.2219 26.607L3.41635 38.25L21.4022 30.3835L16.7785 49.4622L25.5 31.875L34.2215 49.4622L29.5978 30.3835L47.5836 38.25L31.7781 26.607L50.6126 21.072L31.0209 22.3125L41.8911 5.96587L27.6804 19.5095L25.5 -2.22928e-06Z" fill="#BE0B31" />
                </svg></h1>
                </Fade>
                <Fade bottom distance="0%">
                <Link to='/contact'>
                  <div className='home-banner-btn1'>Contact Us</div>
                </Link>
                </Fade>
              </div>
            </div>
            <div className='col-lg-7 col-12'> 
              <div>
                <Fade bottom distance="0%">
                <img src={bannertruckimg1} className='banner-truck-img1' alt="" />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className='d-flex justify-content-lg-start justify-content-center'>
        <div className='home-job-div1'>
          <div className=' home-job-div2'>
            <div className='row w-100'>
              <div className='col-lg-6 col-12 text-center'>
                <h1 className='home-job-text1'>Quality <br /> <span> Is Job</span>
                </h1>
              </div>
              <div className='col-lg-6  col-12 text-center'>
                <h1 className='home-job-text2'>$7500 <span>+</span>
                </h1>
                <p className='home-job-text3'>Average Gross Revenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     


      <div className='container-fluid home-services-div1' id='service'>
        <div className='container position-relative'>
          <div className='row'>
            <div>
              <Fade bottom distance="2%">
              <h1 className='home-services-text1'>Our <br /><span>Services <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 -1.22392e-06L12.8029 10.7111L5.00097 3.27538L10.9689 12.25L0.212691 11.5689L10.5532 14.6078L1.87564 21L11.7502 16.6812L9.21172 27.1557L14 17.5L18.7883 27.1557L16.2498 16.6812L26.1244 21L17.4468 14.6078L27.7873 11.5689L17.0311 12.25L22.999 3.27538L15.1971 10.7111L14 -1.22392e-06Z" fill="#BE0B31" />
              </svg></span></h1>
              </Fade>
            </div>
            <div className='home-services-textdiv2'>
              <Fade bottom distance="2%">
              <h1 className='home-services-text2'>From %5 of gross</h1>
              </Fade>
            </div>
          </div>

          <div className='home-services-carddiv1' >
            <div className='row home-services-rowcarddiv1'>
              <div className='col-lg-6 col-12 pl-lg-0 pr-lg-3 p-0 '>
                <Fade bottom distance="5%">
                <div className='home-services-carddiv2'>
                  <div className='row'>
                    <div className='col-lg-7 col-6'>
                      <h1 className='home-services-cardtext1'>Truck <br /> Dispatching</h1>
                      <Link to="/truck-dispatch">
                        <p className='home-services-cardtext2'><svg xmlns="http://www.w3.org/2000/svg" width="27" height="8" viewBox="0 0 27 8" fill="none">
                          <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="white" />
                        </svg> More</p>
                      </Link>
                    </div>
                    <div className='col-lg-5 col-6 d-flex justify-content-end'>
                      <img src={servicespic1} className='img-fluid' alt="" />
                    </div>
                  </div>
                </div>
                </Fade>
              </div>

              {/* Card No ############# 2 ## ## */}

              <div className='col-lg-6 col-12 pl-lg-3 pr-lg-0 p-0'>
                <Fade bottom distance="5%">
                <div className='home-services-carddiv3'>
                  <div className='row'>
                    <div className='col-lg-7 col-6 '>
                      <h1 className='home-services-cardtext1'>Billing</h1>
                      <Link to="/billing">
                        <p className='home-services-cardtext2'><svg xmlns="http://www.w3.org/2000/svg" width="27" height="8" viewBox="0 0 27 8" fill="none">
                          <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="white" />
                        </svg> More</p>
                      </Link>
                    </div>
                    <div className='col-lg-5 col-6 d-flex justify-content-end'>
                      <img src={servicespic2} className='img-fluid' alt="" />
                    </div>
                  </div>
                </div>
                </Fade>
              </div>


              {/* Card No ############# 3 ## ## */}

              <div className='col-lg-6 col-12 pl-lg-0 pr-lg-3 p-0'>
                <Fade bottom distance="5%">
                <div className='home-services-carddiv2'>
                  <div className='row'>
                    <div className='col-lg-7 col-6 '>
                      <h1 className='home-services-cardtext1'>Document Management & Paperwork</h1>
                      <Link to="/document-management">
                        <p className='home-services-cardtext2'><svg xmlns="http://www.w3.org/2000/svg" width="27" height="8" viewBox="0 0 27 8" fill="none">
                          <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="white" />
                        </svg> More</p>
                      </Link>
                    </div>
                    <div className='col-lg-5 col-6 d-flex justify-content-end'>
                      <img src={servicespic3} className='img-fluid' alt="" />
                    </div>
                  </div>
                </div>
                </Fade>
              </div>



              {/* Card No ############# 4 ## ## */}

              <div className='col-lg-6 col-12 pl-lg-3 pr-lg-0 p-0'>
                <Fade bottom distance="5%">
                <div className='home-services-carddiv3'>
                  <div className='row'>
                    <div className='col-lg-7 col-6 '>
                      <h1 className='home-services-cardtext1'>Factoring Service</h1>
                      <Link to="/factoring-service">
                        <p className='home-services-cardtext2'><svg xmlns="http://www.w3.org/2000/svg" width="27" height="8" viewBox="0 0 27 8" fill="none">
                          <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="white" />
                        </svg> More</p>
                      </Link>
                    </div>
                    <div className='col-lg-5 col-6 d-flex justify-content-end'>
                      <img src={servicespic4} className='img-fluid' alt="" />
                    </div>
                  </div>
                </div>
                </Fade>
              </div>


              {/* Card No ############# 5 ## ## */}

              <div className='col-lg-6 col-12 pl-lg-0 pr-lg-3 p-0'>
                <Fade bottom distance="5%">
                <div className='home-services-carddiv2'>
                  <div className='row'>
                    <div className='col-lg-7 col-6 '>
                      <h1 className='home-services-cardtext1'>Rate <br /> Negotiation</h1>
                      <Link to="/rate-negotiation">
                        <p className='home-services-cardtext2'><svg xmlns="http://www.w3.org/2000/svg" width="27" height="8" viewBox="0 0 27 8" fill="none">
                          <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="white" />
                        </svg> More</p>
                      </Link>
                    </div>
                    <div className='col-lg-5 col-6 d-flex justify-content-end'>
                      <img src={servicespic5} className='img-fluid' alt="" />
                    </div>
                  </div>
                </div>
                </Fade>
              </div>


              {/* Card No ############# 6 ## ## */}

              <div className='col-lg-6 col-12 pl-lg-3 pr-lg-0 p-0'>
                <Fade bottom distance="5%">
                <div className='home-services-carddiv3'>
                  <div className='row'>
                    <div className='col-lg-7 col-6 '>
                      <h1 className='home-services-cardtext1'>Safety / Dot <br /> Compliance</h1>
                      <Link to="/safety&dot-compliance">
                        <p className='home-services-cardtext2'><svg xmlns="http://www.w3.org/2000/svg" width="27" height="8" viewBox="0 0 27 8" fill="none">
                          <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="white" />
                        </svg> More</p>
                      </Link>
                    </div>
                    <div className='col-lg-5 col-6 d-flex justify-content-end'>
                      <img src={servicespic6} className='img-fluid' alt="" />
                    </div>
                  </div>
                </div>
                </Fade>
              </div>


              {/* Card No ############# 7 ## ## */}

              <div className='col-lg-6 col-12 pl-lg-0 pr-lg-3 p-0'>
                <Fade bottom distance="5%">
                <div className='home-services-carddiv2'>
                  <div className='row'>
                    <div className='col-lg-7 col-6 '>
                      <h1 className='home-services-cardtext1'>IFTA</h1>
                      <Link to="/ifta-reporting">
                        <p className='home-services-cardtext2'><svg xmlns="http://www.w3.org/2000/svg" width="27" height="8" viewBox="0 0 27 8" fill="none">
                          <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="white" />
                        </svg> More</p>
                      </Link>
                    </div>
                    <div className='col-lg-5 col-6 d-flex justify-content-end'>
                      <img src={servicespic7} className='img-fluid' alt="" />
                    </div>
                  </div>
                </div>
                </Fade>
              </div>


              {/* Card No ############# 8 ## ## */}

              <div className='col-lg-6 col-12 pl-lg-3 pr-lg-0 p-0 h-100'>
                <Fade bottom distance="5%">
                <div className='home-services-carddiv3 h-100'>
                  <div className='row'>
                    <div className='col-lg-7 col-6 '>
                      <h1 className='home-services-cardtext1'>Company <br /> Formation</h1>
                      <Link to="/company-formation">
                        <p className='home-services-cardtext2'><svg xmlns="http://www.w3.org/2000/svg" width="27" height="8" viewBox="0 0 27 8" fill="none">
                          <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="white" />
                        </svg> More</p>
                      </Link>
                    </div>
                    <div className='col-lg-5 col-6 d-flex justify-content-end'>
                      <img src={servicespic8} className='img-fluid' alt="" />
                    </div>
                  </div>
                </div>
                </Fade>
              </div>


            </div>
          </div>
        </div>
      </div>



      <div className='container-fluid home-feed-div1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-12 pr-lg-4 pr-0'>
              <div>
                <Fade bottom distance="0%">
                <h1 className='home-feed-text1'>Making a Difference</h1>
                <h1 className='home-feed-text2'>One Percent</h1>
                <h1 className='home-feed-text3'>of Dispatch Commission Allocated <br className='d-lg-block d-none' /> to Feed the Hungry</h1>
</Fade>
                <Fade bottom distance="0%">

                <p className='home-feed-para1 pt-3'>Dear Carriers <br /> We are excited to announce a new initiative aimed at making a positive impact on the lives of those less fortunate. Starting immediately, one percent of the commission we receive from you will be dedicated to providing food for hungry individuals living in less privileged conditions in third world countries.</p>
                <p className='home-feed-para1'>By allocating a portion of our dispatch commission to this important cause, we can contribute to alleviating hunger and improving the lives of individuals struggling with food insecurity. This initiative aligns with our commitment to social responsibility and underscores our dedication to giving back to the global community.</p>
                <p className='home-feed-para1'>We look forward to the collective impact we can make through this initiative and the positive change it will bring to those in need.</p>
                <p className='home-feed-para1'>Thank you for your support and dedication to making a difference</p>
              </Fade>
              </div>
            </div>
            <div className='col-lg-6 col-12 charity-img-div1'>
              <Fade bottom distance="0%">
              <img src={charityimg1} className='charity-img1' alt="" />
              </Fade>
            </div>
          </div> 
        </div>
      </div>

      <AmericanMovers></AmericanMovers>

      <div className='container-fluid home-contact-div1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <Fade bottom distance="5%">
              <div className='home-contact-formdiv1'>
                <form action="">
                  <div className=''>
                    <label className='home-contact-text1'>Full Name</label>
                    <input type="text" name="fname" class="form-control home-input-field1" />
                  </div>
                  <div className=' home-input-div2'>
                    <label className='home-contact-text1'>Email</label>
                    <input type="email" name="email" class="form-control home-input-field1" />
                  </div>
                  <div className=' home-input-div2'>
                    <label className='home-contact-text1'>Phone Number</label>
                    <input type="number" name="phone" class="form-control home-input-field1" />
                  </div>

                  <div>
                    <div class="form-group form-check home-checkbox-div1">
                      <input type="checkbox" class="form-check-input home-checkbox-div2" id="exampleCheck1" />
                      <label class="form-check-label home-checkbox-text1" for="exampleCheck1">I have read and agree to <span>Terms of Service</span> </label>
                    </div>
                    <div class="form-group form-check ">
                      <input type="checkbox" class="form-check-input home-checkbox-div2" id="exampleCheck1" />
                      <label class="form-check-label home-checkbox-text1" for="exampleCheck1">I want to receive the most useful tips and news </label>
                    </div>
                  </div>


                  <div className=' position-relative'>
                    <a href="#" >
                      <div className="home-contact-us-btn1">
                        Send Request
                      </div>
                    </a>
                  </div>
                </form>
              </div>
              </Fade>
            </div>


            <div className='col-lg-6  col-12 home-contact-us-coldiv1  '>
              <Fade bottom distance="0%">
              <div>
                <h1 className='home-contact-us-text1'>For Free Setup</h1>
                <h1 className='home-contact-us-text2'>Contact Us</h1>
                <div className='position-relative'>
                  <div className='home-contact-us-div1'>
                    <div className='d-flex home-contact-us-div2'>
                      <p className='home-contact-us-text3'>Fill out the form or call us: +1 640 300 4266</p>
                      <div className='home-contact-us-text4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M0.605623 11.8776C0.183404 12.2998 0.183404 12.9844 0.605623 13.4066C1.02784 13.8288 1.71239 13.8288 2.13461 13.4066L0.605623 11.8776ZM13.9836 1.10973C13.9836 0.512624 13.4996 0.0285725 12.9025 0.0285736L3.17205 0.028573C2.57494 0.0285729 2.09089 0.512624 2.09089 1.10973C2.09089 1.70684 2.57494 2.19089 3.17205 2.19089L11.8213 2.19089L11.8213 10.8402C11.8213 11.4373 12.3054 11.9213 12.9025 11.9213C13.4996 11.9213 13.9836 11.4373 13.9836 10.8402L13.9836 1.10973ZM2.13461 13.4066L13.667 1.87423L12.138 0.345237L0.605623 11.8776L2.13461 13.4066Z" fill="white" />
                        </svg>
                      </div>
                    </div>


                    <div className='d-flex home-contact-us-div2'>
                      <p className='home-contact-us-text3'>Upload your MC Authority, W9 Form, and <br className='d-lg-block d-none' /> Certificate of Insurance</p>
                      <div className='home-contact-us-text4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M0.605623 11.8776C0.183404 12.2998 0.183404 12.9844 0.605623 13.4066C1.02784 13.8288 1.71239 13.8288 2.13461 13.4066L0.605623 11.8776ZM13.9836 1.10973C13.9836 0.512624 13.4996 0.0285725 12.9025 0.0285736L3.17205 0.028573C2.57494 0.0285729 2.09089 0.512624 2.09089 1.10973C2.09089 1.70684 2.57494 2.19089 3.17205 2.19089L11.8213 2.19089L11.8213 10.8402C11.8213 11.4373 12.3054 11.9213 12.9025 11.9213C13.4996 11.9213 13.9836 11.4373 13.9836 10.8402L13.9836 1.10973ZM2.13461 13.4066L13.667 1.87423L12.138 0.345237L0.605623 11.8776L2.13461 13.4066Z" fill="white" />
                        </svg>
                      </div>
                    </div>     


                    <div className='d-flex home-contact-us-div2'>
                      <p className='home-contact-us-text3'>Sign the Dispatch Agreement completed <br className='d-lg-block d-none'  /> by our team</p>
                      <div className='home-contact-us-text4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M0.605623 11.8776C0.183404 12.2998 0.183404 12.9844 0.605623 13.4066C1.02784 13.8288 1.71239 13.8288 2.13461 13.4066L0.605623 11.8776ZM13.9836 1.10973C13.9836 0.512624 13.4996 0.0285725 12.9025 0.0285736L3.17205 0.028573C2.57494 0.0285729 2.09089 0.512624 2.09089 1.10973C2.09089 1.70684 2.57494 2.19089 3.17205 2.19089L11.8213 2.19089L11.8213 10.8402C11.8213 11.4373 12.3054 11.9213 12.9025 11.9213C13.4996 11.9213 13.9836 11.4373 13.9836 10.8402L13.9836 1.10973ZM2.13461 13.4066L13.667 1.87423L12.138 0.345237L0.605623 11.8776L2.13461 13.4066Z" fill="white" />
                        </svg>
                      </div>
                    </div>



                    <div className='d-flex home-contact-us-div2'>
                      <p className='home-contact-us-text3'>We are all set. Let’s get to work</p>
                      <div className='home-contact-us-text4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M0.605623 11.8776C0.183404 12.2998 0.183404 12.9844 0.605623 13.4066C1.02784 13.8288 1.71239 13.8288 2.13461 13.4066L0.605623 11.8776ZM13.9836 1.10973C13.9836 0.512624 13.4996 0.0285725 12.9025 0.0285736L3.17205 0.028573C2.57494 0.0285729 2.09089 0.512624 2.09089 1.10973C2.09089 1.70684 2.57494 2.19089 3.17205 2.19089L11.8213 2.19089L11.8213 10.8402C11.8213 11.4373 12.3054 11.9213 12.9025 11.9213C13.4996 11.9213 13.9836 11.4373 13.9836 10.8402L13.9836 1.10973ZM2.13461 13.4066L13.667 1.87423L12.138 0.345237L0.605623 11.8776L2.13461 13.4066Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>


      <Work></Work>
      <Gross></Gross>


      <div className='container-fluid home-support-div1'>
        <div className='d-flex justify-content-center'>
          <Fade bottom distance="0%">
          <img src={supporttruckpic1} className='img-fluid' alt="" />
          </Fade>
        </div>
        <div className='container  home-support-div2'>
          <div>
            <Fade bottom distance="1%">
            <h1 className='support-text1'>Our Dispatch Company</h1>
            <h1 className='support-text2'>Your 24/7 Route and Weather Support</h1>
            </Fade>
            <Fade bottom distance="1%">
            <p className='support-text3'>At our dispatch company, we prioritize the needs of our drivers by offering around-the-clock call support services. We understand that being on the road demands real-time assistance and information, especially concerning routes and weather conditions. That's why our dedicated team is available 24/7, ensuring that our drivers can reach out at any hour for guidance and support regarding their routes and weather inquiries. Our goal is to empower our drivers with the information they need to make informed decisions and navigate their journeys safely and efficiently.</p>
          </Fade>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
