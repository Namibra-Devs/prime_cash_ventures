import React from 'react'
import './Privacy.css'
import Banner from '../../Components/Banner/Banner'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Privacy = () => {
  return (
    <div>
      <Banner />
      <Navbar />
        <div style={{fontSize:'20px', padding:'50px'}}>
            <h3 style={{textAlign:'center',color:'rgba(6, 154, 217, 1)'}}>Privacy Policy</h3>
            <p style={{fontSize:'24'}}>This Cookie Policy explains what cookies are and how we use them. You should read this policy to understand what cookies are <br />
               how we use them, the types of cookies we use
            </p>
            <dl>
            <dd>i.e., the information we collect using cookies and how that information is used and how to control the cookie preferences.
                For further information on how we use, store and keep your personal data secure, see our Privacy Policy. You can at any
                time change or withdraw your consent from the Cookie Declaration on our website. Learn more about who we are, 
                how you can contact us and how we process personal data in our Privacy Policy.</dd>
            </dl>

            <h3 style={{color:'rgba(6, 154, 217, 1)'}}>What are Cookies</h3>
            <p>
            Cookies are small text files that are used to store small pieces of information. The cookies are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make the website more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
            </p>
            <h3 style={{color:'rgba(6, 154, 217, 1)'}}>How do we use cookies ?</h3>
            <p>
            As most of the online services, our website uses cookies first-party and third-party cookies for a number of purposes. The first-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data. The third-party cookies used on our websites are used mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website
            </p>
            <h3 style={{color:'rgba(6, 154, 217, 1)'}}>How can I control the cookie preferences ?</h3>
            <p>
            You can manage your cookies preferences by clicking on the “Settings” button and enabling or disabling the cookie categories on the popup according to your preferences. Should you decide to change your preferences later through your browsing session, you can click on the “Privacy & Cookie Policy” tab on your screen. This will display the consent notice again enabling you to change your preferences or withdraw your consent entirely
            </p>
           
        </div>
    < Footer /> 
      
    </div>
  )
}

export default Privacy
