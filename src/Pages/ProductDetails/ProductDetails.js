import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import rerouter from '../../Components/Assets/rerouter.png'
import './ProductDetails.css'
import laptop from '../../Components/Assets/laptop.png'
import pad from '../../Components/Assets/pad.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const ProductDetails = () => {
  return (
    <div>
      <Banner />
      <Navbar />
       <div className='productDetails'>
        <h5>PRODUCT DESCRIPTION</h5>
        <div className="product-img">
          <div className="product-img-small">
            <img src={rerouter} alt="" />
            <img src={rerouter} alt="" />
            <img src={rerouter} alt="" />

          </div>
          <div className="product-img-large">
              <img src={rerouter} alt="" />
          </div>
          <div className="product-img-text">
            <div className="product-img-text-bg">
                 <h5>Dual Band WiFi Router High Speed Wireless Internet Router </h5> 
            </div>
               
                <ul>
                  <li>Dual-Band 2.4GHz + 5 GHz: Get lightning quick connections for all your wireless devices by upgrading to Tenda's enhanced 1200 Mbps high speed Wi fi technology (300mbps at 2. 4GHz plus 867Mbps at 5GHz)</li>
                  <li>Powerful Belt Capacity: Link up to 20 wireless devices like Google assistant, Alexa and various streaming devices, simultaneously, while maintaining optimum network conditions</li>
                  <li>Antennas Maximum Signal Coverage: The Tenda AC6 is equipped with four powerful 5dBi antennas, delivering high speed internet throughout your home and provides seamless coverage for up to 2000 Sq. ft. Output: DC 9V1A</li>
                  <li>MU-MIMO Technology: More users in the network at the same time, due to advanced MU-MIMO technology, even more users can now use the network for games, streaming or data transmissions at the same time. The guest network also benefits from MU-MIMO technology.</li>
                </ul>
                <p>Condition: New <br />Ghs 120</p>
                <button>Buy Now</button>
          </div>
        </div>

       </div>
       <div className='similar-products'>
        <h5 className='similar-products5' style={{fontSize:'15px'}}>Similar Products</h5>
        <p className='similar-products5'>check out this product, we think you might be interested. People who view and purchase this product also do have interest in <br />
        products, we edge you to take some time and explore </p>
        <div className="similar-products-background" style={{marginTop:'20px',background:'rgba(255, 255, 255, 1)', marginLeft:'130px'}}>
                    <div className="similar-products-items">
                    <div>
                        <a href="/productdetails">
                        <img src={laptop} alt="" />
                        <div style={{height:'70px',width:'250px',marginLeft:'-10px',background:'rgba(51, 51, 51, 1)',color:'white',display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
                        <h3>XBOX Game Pad <br /> Ghs 45,000.00</h3>

                            <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px',marginTop:'30px' }}>
                            Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>

                        </a>   
                    </div>

                    <div>
                        <img src={pad} alt="" />
                        <div style={{height:'70px',width:'250px',marginLeft:'-10px',background:'rgba(51, 51, 51, 1)',color:'white',display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
                        <h3>XBOX Game Pad <br /> Ghs 45,000.00</h3>

                            <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px',marginTop:'30px' }}>
                            Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    
                    </div>

                    <div>
                        <img src={rerouter} alt="" />
                        <div style={{height:'70px',width:'250px',marginLeft:'-10px',background:'rgba(51, 51, 51, 1)',color:'white',display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
                        <h3>XBOX Game Pad <br /> Ghs 45,000.00</h3>

                            <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px',marginTop:'30px' }}>
                            Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                        
                    </div>

                    <div>
                        <img src={laptop} alt="" />
                        <div style={{height:'70px',width:'250px',marginLeft:'-10px',background:'rgba(51, 51, 51, 1)',color:'white',display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
                        <h3>XBOX Game Pad <br /> Ghs 45,000.00</h3>

                            <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px',marginTop:'30px' }}>
                            Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                        
                    </div>

                    <div>
                        <img src={pad} alt="" />
                        <div style={{height:'70px',width:'250px',marginLeft:'-10px',background:'rgba(51, 51, 51, 1)',color:'white',display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
                        <h3>XBOX Game Pad <br /> Ghs 45,000.00</h3>

                            <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px',marginTop:'30px' }}>
                            Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    
                    </div>

                    <div>
                        <img src={rerouter} alt="" />
                        <div style={{height:'70px',width:'250px',marginLeft:'-10px',background:'rgba(51, 51, 51, 1)',color:'white',display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
                        <h3>XBOX Game Pad <br /> Ghs 45,000.00</h3>

                            <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px',marginTop:'30px' }}>
                            Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                        
                    </div>

                    </div>
                </div>
       </div>
       <Footer />
    </div>
  )
}

export default ProductDetails
