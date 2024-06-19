import React from 'react'
import './Home.css'
import whiteheadphones from '../../Components/Assets/whiteheadphones.png'
import star_icon from '../../Components/Assets/star_icon.png'
import laptop from '../../Components/Assets/laptop.png'
import pad from '../../Components/Assets/pad.png'
import rerouter from '../../Components/Assets/rerouter.png'
import at from '../../Components/Assets/at.jpg'
import mtn from '../../Components/Assets/mtn.jpg'
import man from '../../Components/Assets/man.jpeg'
import star from '../../Components/Assets/star_icon.png'

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
            <div className="at" style={{background:'rgba(255, 255, 255, 1)',padding:'10px',marginTop:'40px'}}>
            <div className="input">
                <input type="text" placeholder='Search for products and offers'style={{width:'300px'}} /> <button style={{width:'100px'}}>Search</button>
            </div>
            <div className='at-rates' style={{display:'flex', gap:'10px'}}>
            
                <div>
                   <img style={{width:'200px'}} src={at} alt="" />
                </div>

                <div>
                <div className="rate-text">
                    <h3>AIRTEL TIGO UNLIMITED INTERNET <br />BUNDLES</h3>
                    <p>Very affordable at all prices and last longer ranges from</p>

                  <div className="rate-text-prices" style={{display:'flex'}}>
                   <div className="rate-text-prices1" style={{marginRight:'10px'}}>
                        <ul>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                        </ul>
                   </div>

                   <div className="rate-text-prices2">
                        <ul>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                        </ul>
                   </div>
                  </div>  

                </div>
                </div>
                


            </div>
            </div>

            <div className="mtn" style={{background:'rgba(255, 255, 255, 1)',padding:'10px',marginTop:'40px'}}>
            <div className='mtn-rates' style={{display:'flex', gap:'10px'}}>
            
                <div>
                   <img style={{width:'200px'}} src={mtn} alt="" />
                </div>

                <div>
                <div className="rate-text">
                    <h3>AIRTEL TIGO UNLIMITED INTERNET <br />BUNDLES</h3>
                    <p>Very affordable at all prices and last longer ranges from</p>

                  <div className="rate-text-prices" style={{display:'flex'}}>
                   <div className="rate-text-prices1" style={{marginRight:'10px'}}>
                        <ul>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                        </ul>
                   </div>

                   <div className="rate-text-prices2">
                        <ul>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                            <li>1GB = Ghs 4.00</li>
                        </ul>
                   </div>
                  </div>  

                </div>
                </div>
                


            </div>
            </div>
            <div className="accessories" style={{background:'rgba(255, 255, 255, 1)',padding:'10px',marginTop:'40px'}}>
                <p>Our online shop we deals in all electronic accessories</p>
                <div className="accessory-items1">
                    <div className='accessory-img'>
                       <img src={pad} alt="" />
                    </div>
                    <div className="accessory-text">
                      <h3>This MacBook Pro 16-inch</h3>
                      <h4>Color: Gray</h4>
                      <p>Apple's latest laptop with a stunning display and sleek design. <br/>Featuring the powerful M1 or M1 Max chip, this device is perfect <br />for both iOS and macOS users.</p>
                    </div>
                </div>

                <div className="accessory-items2">
                    <div className='accessory-img'>
                       <img src={laptop} alt="" />
                    </div>
                    <div className="accessory-text">
                      <h3>This MacBook Pro 16-inch</h3>
                      <h4>Color: Gray</h4>
                      <p>Apple's latest laptop with a stunning display and sleek design. <br/>Featuring the powerful M1 or M1 Max chip, this device is perfect <br />for both iOS and macOS users.</p>
                    </div>
                </div>

                <div className="accessory-items3">
                    <div className='accessory-img'>
                       <img src={rerouter} alt="" />
                    </div>
                    <div className="accessory-text">
                      <h3>This MacBook Pro 16-inch</h3>
                      <h4>Color: Gray</h4>
                      <p>Apple's latest laptop with a stunning display and sleek design. <br/>Featuring the powerful M1 or M1 Max chip, this device is perfect <br />for both iOS and macOS users.</p>
                    </div>
                </div>

                <div className="accessory-items4">
                    <div className='accessory-img'>
                       <img src={rerouter} alt="" />
                    </div>
                    <div className="accessory-text">
                      <h3>This MacBook Pro 16-inch</h3>
                      <h4>Color: Gray</h4>
                      <p>Apple's latest laptop with a stunning display and sleek design. <br/>Featuring the powerful M1 or M1 Max chip, this device is perfect <br />for both iOS and macOS users.</p>
                    </div>
                </div>

                <button>Shop now</button>

               
            </div>

            <div className="reviews">
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div><p>Our agent reviews</p></div>
                    
                    <div style={{flex:''}}><button>Filter</button></div>

                    </div>
                    <div className="review-box">
                        <div className="review-comments">
                        <div className="review-img">
                            <img src={man} alt="" />
                        </div>
                        <div className="review-star">
                            <h4>Amin Idrissu</h4>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                    <div className="review-text">
                            <p>Lorem ipsum dolor sit amet consectetur. Commodo quam turpis faucibus enim proin mauris eget justo. Porttitor elementum at aliquam phasellus convallis. Et viverra duis lectus ipsum lectus non malesuada. Dolor varius adipiscing integer pretium </p>
                    </div>
                       
                    </div>
                    
                    <div className="review-box">
                        <div className="review-comments">
                        <div className="review-img">
                            <img src={man} alt="" />
                        </div>
                        <div className="review-star">
                            <h4>Amin Idrissu</h4>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                    <div className="review-text">
                            <p>Lorem ipsum dolor sit amet consectetur. Commodo quam turpis faucibus enim proin mauris eget justo. Porttitor elementum at aliquam phasellus convallis. Et viverra duis lectus ipsum lectus non malesuada. Dolor varius adipiscing integer pretium </p>
                    </div>
                       
                    </div>
                   
                    
                </div>
           

        </div>
        
    </div>

   
    

    </div>
  )
}

export default Home
