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






const Shop = () => {
  return (
    <div>
        <div className="shop-main">
            <div className="shop-mini">
            <h3>Shop</h3>
            <div class="search-container">
                <input type="text" placeholder="Search for products" />
                <button>Search</button>
            </div>
            </div>

            <div>
                <div className='shop-grid' style={{background:'blue', textAlign:'center'}}>
                        <div className='product-item'>
                        <img src={laptop} alt="" />
                        <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                         </div> 
                            
                        </div>
                        <div className='product-item'>
                            <img src={pad} alt="" />
                            <div>
                            <h3>XBOX Game Pad</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                        
                        </div>
                        <div className='product-item'>
                            <img src={rerouter} alt="" />
                            <div>
                            <h3>XBOX Game Pad</h3>
                            <p>Ghs 45,000.00</p>
                            </div>
                            
                        </div>
                        <div className='product-item'>
                            <img src={jbl} alt="" />
                            <div>
                            <h3>MacBook Laptop</h3>
                            <p>Ghs 45,000.00</p>
                           
                            </div>
                            
                        </div>
                        <div className='product-item'>
                            <img src={headphones} alt="" />
                            <div>
                            <h3>XBOX Game Pad</h3>
                            <p>Ghs 45,000.00</p>

                            </div>
                        
                        </div>
                        <div className='product-item'>
                            <img src={rerouter} alt="" />
                            <div>
                            <h3>XBOX Game Pad</h3>
                            <p>Ghs 45,000.00</p>
                            

                            </div>
                            
                        </div>

                </div>
            </div>

            <div className="mobi-acc" style={{marginTop:'30px'}}>
                <h3>Mobile Accessories</h3>
                <div className="mobi-accessories">
                    <div className='product-item'>
                            <img src={jbl} alt="" />
                            <div>
                                <h3>This MacBook Pro 16-inch </h3>
                                <p>Ghs 45,000.00</p>
                                </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={phone} alt="" />
                            <div>
                                <h3>XBOX GAME CONTROLLER(PAD) </h3>
                                <p>Ghs 45,000.00</p>
                                </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={iphone} alt="" />
                            <div>
                                <h3>Dual Band Wifi router</h3>
                                <p>Ghs 45,000.00</p>
                                </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={whiteheadset} alt="" />
                            <div>
                                <h3>This MacBook Pro 16-inch </h3>
                                <p>Ghs 45,000.00</p>
                                </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={headphones} alt="" />
                            <div>
                                <h3>XBOX GAME CONTROLLER(PAD)</h3>
                                <p>Ghs 45,000.00</p>
                                </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={airbuds} alt="" />
                            <div>
                                <h3>Dual Band Wifi router</h3>
                                <p>Ghs 45,000.00</p>
                                </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={jbl} alt="" />
                            <div>
                                <h3>This MacBook Pro 16-inch </h3>
                                <p>Ghs 45,000.00</p>
                                </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={phone} alt="" />
                            <div>
                                <h3>XBOX GAME CONTROLLER(PAD)</h3>
                                <p>Ghs 45,000.00</p>
                                </div> 
                                
                    </div>

                    <div className='product-item'>
                            <img src={iphone} alt="" />
                            <div>
                                <h3>Dual Band Wifi Router</h3>
                                <p>Ghs 45,000.00</p>
                                </div> 
                                
                    </div>
                 </div>
            </div>

        </div>
      
    </div>
  )
}

export default Shop
