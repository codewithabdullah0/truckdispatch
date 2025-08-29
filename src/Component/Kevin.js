import React from 'react'
import kamiltruck from '../Images/Home page Footer above section truck.png'
import kamilpic1 from '../Images/WhatsApp Image 2023-10-16 at 6.26 (1).svg'
import AmericanMovers from './AmericanMovers'
import './kevin.css'


function Kevin() {
  return (
      <div className=' kamil-div01'>
          <div className='container-fluid kamil-div1'>
              <div className='container'>
                  <div className='row'>
                      <div className='col-lg-6 col-12 position-relative'>
                          <div className=''>
                              <svg className='kamil-svg1' xmlns="http://www.w3.org/2000/svg" width="72" height="70" viewBox="0 0 72 70" fill="none">
                                  <path d="M36 -3.14722e-06L32.9218 27.5428L12.8596 8.4224L28.2058 31.5L0.546926 29.7487L27.1367 37.5628L4.82308 54L30.2149 42.8944L23.6873 69.8289L36 45L48.3127 69.8289L41.7851 42.8944L67.1769 54L44.8633 37.5628L71.4531 29.7487L43.7942 31.5L59.1404 8.4224L39.0782 27.5428L36 -3.14722e-06Z" fill="#BE0B31" />
                              </svg>
                              <img src={kamilpic1} className='kamil-pic1' alt="" />
                              <div className='d-md-none d-block'>
                                  <h1 className='kamil-profile-text11'> Kevin Michael</h1>
                                  <p className='kamil-profile-text22'>Chief Operating Officer</p>
                                    
                              </div>
                          </div>
                      </div>
                      <div className='col-lg-6 col-12 kamil-div3'>
                          <div >
                              <img src={kamiltruck} alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className='container-fluid kevin-text-div1'>
              <div className='container'>
                  <div>
                      <p className='kevin-text1'>I am excited to share a detailed vision for American Movers , a vision that crystallizes our ambitions for becoming the industry leader in logistics through operational excellence and technological innovation while prioritizing unmatched client satisfaction.</p>
                      <p className='kevin-text2'>1. Operational Excellence: At AMERICAN MOVERS Truck Dispatch Company, we envision a streamlined and highly efficient operation. We will optimize our dispatch process to enhance resource utilization, reduce lead times, and minimize operational costs. Through intelligent route planning, real-time tracking, and smart load balancing, we will keep our fleet in continuous motion, aligning with evolving client demands while minimizing our environmental impact.</p>
                      <p className='kevin-text3'> 2. Technological Innovation: The cornerstone of our strategy is embracing the latest technologies. We envision a tech-driven ecosystem that leverages advanced data analytics, artificial intelligence, and machine learning. Our proprietary software will provide comprehensive insights and automate processes, enabling predictive maintenance, resource allocation, and decision-making. This technological leap will provide our clients with real-time visibility and a seamless experience.</p>
                      <p className='kevin-text4'>3. Client Satisfaction: Our ultimate goal is to exceed client expectations consistently. We envision a client-centric approach where we proactively anticipate their needs, provide exceptional service, and build enduring relationships. Effective communication, transparency, and personalized attention will be integral, ensuring that our clients remain informed and confident in our capabilities. <br /> Our journey towards realizing this vision demands collaboration, dedication, and a relentless pursuit of excellence. Together, we will tackle challenges and capitalize on opportunities, establishing AMERICAN MOVERS Truck Dispatch Company as an industry trailblazer, renowned for its efficiency, integrity, and unwavering commitment to excellence. <br />Thank you for your continued dedication and contributions to this exciting endeavor.</p>
                      {/* <p></p> */}
                  </div>
              </div>
          </div>



          <AmericanMovers></AmericanMovers>
      </div>
  )
}

export default Kevin
