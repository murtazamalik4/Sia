import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='Login_main'>
      <div className='events_component_1'>
        <div className="events_1">
          <h1>Member LOG IN</h1>
        </div>
        <div className='events_2'>
          Home - Member Log In
        </div>
      </div>
      <div className='Login_component_2'>
        Community organizing is all about building grassroots support. It's about identifying the people around you with whom you can create a common, passionate cause. And it's about ignoring the conventional wisdom of company politics and instead playing the game by very different rules.
      </div>
      <div className='login_component_1 margin-bottom-extra'>
        <div className="login_information">
          <div className='login_info_head'>Login In to Get Started Now</div>
          <form>
            <div className='id'>Member Id</div>
            <input type="text" placeholder='Enter your member id' />
            <div className='pass' >Password</div>
            <input type="password" placeholder='Enter your password' name="" id="" />
            <div className='log_in_btn'>
              <button className='log_in_btn'>Log in now</button>
            </div>
            <div className='forgot'>
              <a href="#forget">forget password</a>
            </div>
          </form>
        </div>
        <div className="signup">
          <div className='signup_head'>Not a Member Yet?</div>
          <div className='signup_component'>Sign up now & get exclusive access to all the content from singapore indian association.</div>
          <Link to="/Membership">
            <div className='signup_btn'>     
              <button className='signup_in_btn'>Be a Member</button>
            </div>
          </Link>
        </div>
      </div> 

    </div>
  )
}

export default Login