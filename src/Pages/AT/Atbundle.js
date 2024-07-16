import React, { useState } from 'react'
import at from '../../Components/Assets/at.jpg'
import './Atbundle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Atbundle = () => {

        const [cart, setCart] = useState([]);

  const addToCart = () => {
    // Define the product object to be added to the cart
    const product = {
      name: '10GB Unlimited Bundle',
      price: 40.00,
    };

    // Add the product to the cart
    setCart([...cart, product]);

    // You can also display a success message or update the UI to indicate the product has been added to the cart
    console.log('Product added to cart:', product);
  };

  return (
    <div>
     <div className="bundles-offer">
                        <div>
                                <img src={at} alt=""/>
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br />Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }} onClick={addToCart}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        
                        </div> 

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        <div>
                                <img src={at} alt="" />
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                                <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                                Buy now <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                </div>
                        </div>

                        
        </div>
    </div>
  )
}

export default Atbundle
