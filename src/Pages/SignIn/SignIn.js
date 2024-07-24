import React from 'react'
import mtnlogo from '../../Components/Assets/mtnlogo.jpg'
import './SignIn.css'
import signimg from '../../Components/Assets/signin-img.jpeg'



const SignIn = () => {
  return (
     <div style={{display:'flex',justifyContent:'center'}}>
          <div className='Sign-in'>
              <div className="logo">
                <div>
                  <img src={mtnlogo} alt="" />
                </div>
                <div>
                  <h3 style={{fontSize:'17px',marginTop:'10px'}}>PRIME HOMES DATA PACKAGES</h3>
                </div>
              </div>
              <h3 style={{marginTop:'30px',color:'rgba(6, 154, 217, 1)'}}>Register to join our great family</h3>
              <p>kindly input your information to proceed with your registration</p>
            <form action="">
            <label>Preferred Username</label><br />
            <input type="text" placeholder='Enter your Username' style={{width:'350px'}}/><br />
            <label>Password</label><br />
            <input type="text" placeholder='Enter your Password'style={{width:'350px'}}/><br />
            <label>Confirm Password</label><br />
            <input type="text" placeholder='Re-enter your Password'style={{width:'350px'}}/><br /><br />
            <button className='SignBtn'>Create Account</button>
            </form>
            
          </div>
          <div className="login-in">
            <div className="login-img">
            <img src={signimg} alt="" />
            </div>
            <div className="login">
            <p>Already have an account?</p>
            <button>Login</button>
            
          </div>
            
          </div>
        
     </div>
         
  )
}

export default SignIn
