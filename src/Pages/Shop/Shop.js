import React from 'react'
import "./Shop.css"
import laptop from '../../Components/Assets/laptop.png'
import pad from '../../Components/Assets/pad.png'
import rerouter from '../../Components/Assets/rerouter.png'
import headphones from '../../Components/Assets/headphones.png'
import jbl from '../../Components/Assets/jbl.png'
import phone from '../../Components/Assets/phone.png'
import iphone from '../../Components/Assets/iphone.png'
import whiteheadset from '../../Components/Assets/whiteheadphones.png'
import airbuds from '../../Components/Assets/airbuds.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Banner from '../../Components/Banner/Banner'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'






const Shop = () => {
  return (
      
    <div>
        <Banner />
        <Navbar />
        <div className="shop-main">
            <div className="shop-mini">
            <h3>Shop</h3>
            <div className="search-container">
                <input type="text" placeholder="Search for products" />
                <button>Search</button>
            </div>
            </div>

            <div>
                <div className='shop-grid' style={{}}>
                        <div className='product-item'>
                        <img src={laptop} alt="" />
                        <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div> 
                            
                        </div>

                        <div className='product-item'>
                            <img src={pad} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{ color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div>
                        
                        </div>

                        <div className='product-item'>
                            <img src={rerouter} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                            
                        </div>

                        <div className='product-item'>
                            <img src={jbl} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div>
                            
                        </div>
                        <div className='product-item'>
                            <img src={headphones} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{ color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div>
                        
                        </div>
                        <div className='product-item'>
                            <img src={rerouter} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div>
                            
                        </div>

                </div>
            </div>

            <div className="mobi-acc" style={{marginTop:'30px'}}>
                <h3>Mobile Accessories</h3>
                <div className="mobi-accessories">
                    <div className='product-item'>
                            <img src={jbl} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={phone} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div>
                                
                    </div>

                    <div className='product-item'>
                            <img src={iphone} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{ color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div>
                                
                    </div>

                    <div className='product-item'>
                            <img src={whiteheadset} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={headphones} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{ color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={airbuds} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={jbl} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={phone} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                  Buy now <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={iphone} alt="" />
                            <div className='text' style={{background:'rgba(51, 51, 51, 1)',color:'white'}} >
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                            <button style={{ color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
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

export default Shop
