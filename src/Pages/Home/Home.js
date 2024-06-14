import React from 'react'
import './Home.css'
import whiteheadphones from '../../Components/Assets/whiteheadphones.png'
import star_icon from '../../Components/Assets/star_icon.png'
import laptop from '../../Components/Assets/laptop.png'
import pad from '../../Components/Assets/pad.png'
import rerouter from '../../Components/Assets/rerouter.png'
import at from '../../Components/Assets/at.jpg'
import mtn from '../../Components/Assets/mtn.jpg'

const Home = () => {
  return (
    <div style={{background: 'whitesmoke'}}>
    <div className="container-fluid home-text">
      <div className="center-box">
        <p>Your trusted plug and dealer in great mobile unlimited bundles with a touch of quality and great <br /> electronic appliances</p>
      </div>
    </div>
    <div className="main">
        <div className="left-side">
            <div className="container-fluid " id='product'>
                <div className='product-img'>
                <img src={whiteheadphones} alt="" />
                </div>
                <div className='product-details'>
                    <h3>Samsung headphones</h3>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <p>Ghs 45,000.00</p>
                </div>
            
            </div>
            <div className="items-background">
                <div className="items">
                <div>
                    <img src={laptop} alt="" />
                    <h3>MacBook Laptop</h3>
                    <p>Ghs 45,000.00</p>
                </div>
                <div>
                    <img src={pad} alt="" />
                    <h3>XBOX Game Pad</h3>
                    <p>Ghs 45,000.00</p>
                </div>
                <div>
                    <img src={rerouter} alt="" />
                    <h3>XBOX Game Pad</h3>
                    <p>Ghs 45,000.00</p>
                </div>
                <div>
                    <img src={laptop} alt="" />
                    <h3>MacBook Laptop</h3>
                    <p>Ghs 45,000.00</p>
                </div>
                <div>
                    <img src={pad} alt="" />
                    <h3>XBOX Game Pad</h3>
                    <p>Ghs 45,000.00</p>
                </div>
                <div>
                    <img src={rerouter} alt="" />
                    <h3>XBOX Game Pad</h3>
                    <p>Ghs 45,000.00</p>
                </div>

                </div>
            </div>
            <div className="bundles">
                <div>
                        <img src={at} alt="" />
                        <h3>10GB Unlimited Bundle</h3>
                        <p>Ghs 40.00</p>
                </div> 
                <div>
                        <img src={at} alt="" />
                        <h3>30GB Unlimited Bundle</h3>
                        <p>Ghs 125.00</p>
                </div>
                <div>
                        <img src={at} alt="" />
                        <h3>100GB Unlimited Bundle</h3>
                        <p>Ghs 350.00</p>
                </div>
                <div>
                        <img src={mtn} alt="" />
                        <h3>10GB Unlimited Bundle</h3>
                        <p>Ghs 40.00</p>
                </div>
                <div>
                        <img src={mtn} alt="" />
                        <h3>30GB Unlimited Bundle</h3>
                        <p>Ghs 125.00</p>
                </div>
                <div>
                        <img src={mtn} alt="" />
                        <h3>100GB Unlimited Bundle</h3>
                        <p>Ghs 350.00</p>
                </div>
            </div>
        </div>

        <div className="right-side">
            <div className="input">
                <input type="text" placeholder='Search for products and offers'style={{width:'300px'}} /> <button style={{width:'100px'}}>Search</button>
            </div>
            <div className='at-rates' style={{display:'flex'}}>
                <div className="rates-img">
                <img src={at} alt="" />
                <div className="rate-text">
                    <h3>AIRTEL TIGO UNLIMITED INTERNET <br />BUNDLES</h3>
                    <p>Very affordable at all prices and last longer ranges from</p>
                </div>
            </div>
                


            </div>

        </div>
        
    </div>

   
    

    </div>
  )
}

export default Home
