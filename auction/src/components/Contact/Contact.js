import React from 'react'

import Form from 'react-bootstrap/Form';
import Img from './img10.jpg'
import './Contact.css';
function Contact() {
  return (
    <>
    
        <section className='contact-section'>
            <div className='contact-bg'>
                <h3>Get in Touch with Us</h3>
                <h2>Contact Us</h2>
            </div>
            

            <div className='contact-body'>
                
                <div className='contact-info'>
                <div className='contact-img'><img src={Img} alt=""></img></div>
                    <div>
                    <div>
                        <span>
                            <i className="fa-solid fa-mobile-screen-button"></i> 
                        </span>
                        <span>
                            Phone No.
                        </span>
                        <span className='text'>
                            123457890
                        </span>
                    </div>
                    <div>
                        <span>
                            <i className="fa-solid fa-envelope"></i> 
                        </span>
                        <span>
                            E-mail
                        </span>
                        <span className='text'>
                            coalindia@gmail.com
                        </span>
                    </div>
                    <div>
                        <span>
                            <i className="fa-solid fa-location-dot"></i> 
                        </span>
                        <span>
                            Address
                        </span>
                        <span className='text'>
                            CMPDI Kanke Road
                        </span>
                    </div>
                    <div>
                        <span>
                            <i className="fa-solid fa-clock"></i> 
                        </span>
                        <span>
                            Opening Hours
                        </span>
                        <span className='text'>
                            09:30 am - 05:30 pm
                        </span>
                    </div>
                    </div>
                </div>

                <div className='contact-form'>
                    <Form>
                        <div>
                            <input type='text' className='form-control' placeholder='First Name'></input>
                            <input type='text' className='form-control' placeholder='Last Name'></input>
                        </div>
                        <div>
                            <input type='email' className='form-control' placeholder='Email'></input>
                            <input type='text' className='form-control' placeholder='Phone'></input>
                        </div>
                        <textarea rows={5} placeholder='Message' className='form-control' style={{background: 'transparent'}}></textarea>
                        <input type='submit' className='send-btn' value='Send Message'></input>
                    </Form>
                    <div>

                    </div>
                </div>
            </div>
            
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.6904686804605!2d85.3112218797147!3d23.399412424536006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e129a80ff219%3A0xe455c1f0fe231692!2sCMPDI%20Office!5e0!3m2!1sen!2sin!4v1721303563504!5m2!1sen!2sin" title="Google Maps Embed" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
   
    </>
  )
}

export default Contact