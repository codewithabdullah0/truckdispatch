import React from 'react'
import './Contact.css'
import contactpic1 from '../Images/Home page Footer above section truck.png'
import truckimg1 from '../Images/Trailer-Truck-Mockup-Free-PSD 2.png'
import starimg1 from '../Images/Group 7.svg'
 
function Contact() {
  return (
    <div>
      <div className='container-fluid contact-div1'>
        <div>
            <h1 className='contact-text1'>Contact Us</h1>

            <div className='d-flex justify-content-center'>
                <img src={contactpic1}  className='contact-truckpic1' alt="" />
            </div>
        </div>
      </div>


          <div className='movers-maindiv1'>
              <div className='container-fluid movers-div1' >
                  

                  <div className='row'>
                      <div className='col-lg-6 col-12 movers-img-div1'>
                          <div>
                              <img src={truckimg1} alt="" />
                          </div>
                      </div>
                      <div className='col-lg-6 col-12 d-flex align-items-center justify-content-center contact-uss-form-div1'>

                          <div >
                              <form action="">
                                <div className='row'>
                                  <div className='col-lg-6 col-12'>
                                      <input type="text" name="fname" class="form-control contact-uss-input-field1" placeHolder='Full Name' />
                                  </div>
                                  <div className='col-lg-6 col-12 contact-uss-input-div33'>
                                      <input type="email" name="email" class="form-control contact-uss-input-field1" placeHolder='Email' />
                                  </div>
                                  <div className='col-lg-6 col-12 contact-uss-input-div2'>
                                      <input type="number" name="phone" class="form-control contact-uss-input-field1"  placeHolder='Phone Number' />
                                  </div>

                                      <div className='col-lg-6 col-12 contact-uss-input-div2'>
                                          <input type="text" name="phone" class="form-control contact-uss-input-field1" placeHolder='Subject'/>
                                      </div>

                                      <div className=' col-12 contact-uss-input-div2'>
                                          <textarea  row={50}   class="form-control contact-uss-input-field1" placeHolder='Please Type your Message Here...' ></textarea>
                                      </div>
                                      


                                  <div className=' position-relative col-12'>
                                      <a href="#" >
                                          <div className="truck-contact-us-btn1">
                                              Submit
                                          </div>
                                      </a>
                                  </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default Contact
