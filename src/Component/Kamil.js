import React from 'react'
import './Kamil.css'
import kamiltruck from '../Images/Home page Footer above section truck.png'
import kamilpic1 from '../Images/WhatsApp Image 2023-10-16 at 6.26.svg'
import missionpic1 from '../Images/Group 19.svg'
import vissionpic1 from '../Images/Group 18.svg'
import AmericanMovers from './AmericanMovers'


function Kamil() {
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
                                  <h1 className='kamil-profile-text11'>Kamil</h1>
                                  <p className='kamil-profile-text22'>Managing Director</p>
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

      <div className='container-fluid mission-div1'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-12'>
                    <div>
                        <img src={missionpic1} alt="" />
                        <h1 className='mission-text1'>Mission</h1>
                              <p className='mission-text2'>Our mission is to optimize transportation logistics through efficient truck dispatch services. We are committed to delivering timely and reliable solutions to our clients while prioritizing safety, sustainability, and cost-effectiveness. By leveraging technology and fostering a culture of continuous improvement, we aim to exceed our clients' expectations and contribute to their success in an ever-evolving industry.</p>
                    </div>
                </div>
                <div className='col-lg-6 col-12 mt-lg-0 mt-5'>
                          <div>
                              <img src={vissionpic1} alt="" />
                              <h1 className='mission-text1'>Vision</h1>
                              <p className='mission-text2'>Our vision is to be the leading truck dispatch company known for our unwavering dedication to exceptional customer service, innovative technological solutions, and a dynamic and engaged workforce. We strive to set industry standards, embracing sustainable practices that benefit both our clients and the environment. Through strategic partnerships and a global reach, we aim to revolutionize logistics and make a positive impact on the communities we serve.</p>
                          </div>
                </div>
            </div>
        </div>
      </div>



      <AmericanMovers></AmericanMovers>
    </div>
  )
}

export default Kamil
