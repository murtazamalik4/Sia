import React from 'react'
import './ContactUs.css';
import {Row , Col } from 'antd';


function ContacUs() {
  return (
    <>
      <div className="events_component_1">
        <div className="events_1">
          <h1>CONTACT US</h1>
        </div>
        <div className="events_2">HOME - Contact Us</div>
      </div>
      <div style={{fontSize: '2.4rem',fontWeight:'600',color: '#161616', display:"flex",justifyContent:"center",lineHeight:'32px',alignItems:"center",margin:"40px 0px 0px 0px"}}>
      Want to get in touch? We’d love to hear from you. Here how you can reach us...
      </div>
      <div className="Contact_us_Row">
        <div  >
        
        <div className="Col_1">
            <div className='call-icon'/>
            <div>Give us a Call</div>
            <div>Interested in Singapore Indian Association? You are just a call away from talking to our executive.</div>
            <div>(+65) 81 332 5695</div>
        </div> 
        </div>
        <div span={12} >
        <div className="Col_1">
            <div className="mail-icon"/>
            <div className='Col_2'>Write us on Email</div>
            <div className='Col_2'>Send us your message on our 
              email id in details.</div>
            <div>contact@sia.com</div>
        </div> 
        </div>
       </div>

       <div className='send_us'>
         <div > SEND US MESSAGE</div>
         <form >
            <div className='input_to_send'>
            <div >
                <div>Your Name</div>
                <input type="text" placeholder='Full Name'/>
                
                <div>Your Phone Number</div>
                <input type="text" placeholder='Phone number'/>

               
              
                
            </div>
            <div>
            <div>Your Email</div>
               <input type="email" name="" id="" placeholder='Email' />
          
            </div>
            </div>

            <div >Your Message</div>
            <input className="youmsg" type="text" placeholder='Message'/>
            <div className='checkbox'>
            <input className='check' type="checkbox" />
            <div>I agree to terms & conditions</div>
            </div>
            <button>Send Message</button>
         </form>
       </div>
      

    </>
  )
}

export default ContacUs