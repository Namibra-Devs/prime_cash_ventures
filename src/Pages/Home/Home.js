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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Banner from '../../Components/Banner/Banner'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <div>
         <Banner />
        <Navbar />
         <div style={{background: 'whitesmoke'}}>
        <div className="container-fluid home-text">
            <div className="center-box" style={{marginRight:'80px'}}>
            <p>Your trusted plug and dealer in great mobile unlimited bundles with a touch of quality and great <br /> electronic appliances</p>
            </div>
        </div>
        <div className="maindiv">
            <div className="right">

            {/* <div className="container-fluid " id='product'>
                    <div className='product-img'style={{display:'flex',justifyContent:'center'}}>
                        <div className="headphone-main">
                        <img src={whiteheadphones} alt="" style={{marginTop:'30px'}}/>
                        </div>
                        <div className="headphone-sub" style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'flex-end',marginLeft:'150px',marginTop:'30px',textAlign:'center'}}>
                        <div style={{width:'110px',height:'105px'}}><img src={whiteheadphones} alt=""  style={{width:'50px',height:'105px',transform:'scaleX(-1)'}}/></div> 
                        <div style={{width:'110px',height:'105px'}}><img src={whiteheadphones} alt="" style={{width:'50px',height:'105px'}} /></div>
                        <div style={{width:'110px',height:'105px'}}><img src={whiteheadphones} alt=""  style={{width:'50px',height:'105px',transform:'scaleX(-1)'}}/></div>
                        </div>
                    
                    </div>
                    <div className='product-details'>
                        <div style={{padding:'0',margin:'0'}}>
                        <h3>Samsung headphones</h3>
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <p>Ghs 45,000.00</p>
                        </div>

                        <div style={{ marginLeft: '200px', marginBottom: '20px', color: 'white' }}>
                        <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                            Buy now <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                    </div>
                
            </div>  */}

            <div class="container bg-white" style={{marginLeft:'130px',paddingTop:'30px',width:'90%',height:'auto',marginTop:'20px',maxWidth:'730px'}}>
                <div class="row gy-5">
                    <div class="col-4">
                        <div className="border bg-light" style={{width:'360px', height:'570px', paddingLeft:"100px"}}>
                            <img src={whiteheadphones} alt="" />
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="row gy-4 flex-column" style={{paddingLeft:'230px'}}>
                            <div class="col-12 d-flex">
                                <div class="border bg-dark" style={{width:'190px', height:'150px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <img src={whiteheadphones} alt="" style={{width:'90px', height:'130px'}} />
                                </div>
                            </div>
                            <div class="col-12 d-flex">
                                <div class="border bg-dark" style={{width:'190px', height:'150px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <img src={whiteheadphones} alt="" style={{width:'90px', height:'130px',maxWidth:'100%'}} />
                                </div>
                            </div>
                            <div class="col-12 d-flex">
                                <div class="border bg-dark" style={{width:'190px', height:'150px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <img src={whiteheadphones} alt="" style={{width:'90px', height:'130px'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-black" style={{padding:'0',margin:'0',width:'100%',color:'white', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',boxSizing:'border-box'}}>
                <h4>Samsung Headphones</h4>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                </div>
                <p>Ghs 45000.00</p>

                <div style={{alignSelf: 'flex-end',marginRight:'30px'}}>
                    <button>Buy now</button>
                </div>

                </div>

                
            </div>



            {/* <div className="items-background" style={{marginTop:'20px',background:'rgba(255, 255, 255, 1)', marginLeft:'130px'}}>
            <div className="items">
                <div className=''>
                    <a href="/productdetails">
                    <img src={laptop} alt=""  className='img-fluid'/>
                    <div style={{height:'50px',width:'200px',marginLeft:'-10px',background:'rgba(51, 51, 51, 1)',color:'white',display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
                    <h3>XBOX Game Pad <br /> Ghs 45,000.00</h3>

                        <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px',marginTop:'30px' }}>
                        Buy now <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>

                    </a>   
                </div>

                <div className=''>
                    <img src={pad} alt="" />
                    <div style={{height:'50px',width:'200px',marginLeft:'-10px',background:'rgba(51, 51, 51, 1)',color:'white',display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
                    <h3>XBOX Game Pad <br /> Ghs 45,000.00</h3>

                        <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px',marginTop:'30px' }}>
                        Buy now <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                
                </div>

                <div className=''>
                    <img src={rerouter} alt="" />
                    <div style={{height:'50px',width:'200px',marginLeft:'-10px',background:'rgba(51, 51, 51, 1)',color:'white',display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
                    <h3>XBOX Game Pad <br /> Ghs 45,000.00</h3>

                        <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px',marginTop:'30px' }}>
                        Buy now <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                    
                </div>

                <div className=''>
                    <img src={laptop} alt="" />
                    <div style={{height:'50px',width:'200px',marginLeft:'-10px',background:'rgba(51, 51, 51, 1)',color:'white',display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
                    <h3>XBOX Game Pad <br /> Ghs 45,000.00</h3>

                        <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px',marginTop:'30px' }}>
                        Buy now <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                    
                </div>

                <div className=''>
                    <img src={pad} alt="" />
                    <div style={{height:'50px',width:'200px',marginLeft:'-10px',background:'rgba(51, 51, 51, 1)',color:'white',display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
                    <h3>XBOX Game Pad <br /> Ghs 45,000.00</h3>

                        <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px',marginTop:'30px' }}>
                        Buy now <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                
                </div>

                <div className=''>
                    <img src={rerouter} alt="" />
                    <div style={{height:'50px',width:'200px',marginLeft:'-10px',background:'rgba(51, 51, 51, 1)',color:'white',display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
                    <h3>XBOX Game Pad <br /> Ghs 45,000.00</h3>

                        <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px',marginTop:'30px' }}>
                        Buy now <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                    
                </div>

            </div>
            </div> */}
            <div className='bg-white' style={{width:'730px',height:'auto',marginTop:'30px',marginLeft:'130px'}}>
            <div class="container mt-4">
            <div class="row">
            <div class="col-md-4 mt-4">
                <div class="box">
                    <div>
                        <img src={laptop} alt="" style={{width:'140px',height:'100px'}} />
                    </div>
                    <div className='text-white container-fluid' style={{background:'rgba(51, 51, 51, 1)',padding:'0',boxSizing:'border-box',width:'100%d'}}>
                        <h4 style={{fontSize:'13px',margin:'0'}}>Macbook Laptop1</h4>
                        <h4 style={{fontSize:'13px'}}>Ghs 45000.00</h4>
                    </div>
                    
                </div>
            </div>
            <div class="col-md-4 mt-4">
                <div class="box">
                  <div>
                        <img src={laptop} alt="" style={{width:'140px',height:'100px'}} />
                    </div>
                    <div className='text-white container-fluid' style={{width:'100%', background:'rgba(51, 51, 51, 1)',padding:'0',boxSizing:'border-box'}}>
                        <h4 style={{fontSize:'13px',margin:'0'}}>Macbook Laptop</h4>
                        <h4 style={{fontSize:'13px'}}>Ghs 45000.00</h4>
                    </div>  
                </div>
            </div>
            <div class="col-md-4 mt-4">
                <div class="box">
                <div>
                        <img src={laptop} alt="" style={{width:'140px',height:'100px'}} />
                </div>
                    <div className='text-white container-fluid' style={{width:'100%', background:'rgba(51, 51, 51, 1)',padding:'0',boxSizing:'border-box'}}>
                        <h4 style={{fontSize:'13px',margin:'0'}}>Macbook Laptop</h4>
                        <h4 style={{fontSize:'13px'}}>Ghs 45000.00</h4>
                    </div>
                </div>
            </div>
            </div>
            <div class="row mt-3 ">
            <div class="col-md-4">
                <div class="box">
                <div>
                        <img src={laptop} alt="" style={{width:'140px',height:'100px'}} />
                    </div>
                    <div className='text-white container-fluid' style={{width:'100%', background:'rgba(51, 51, 51, 1)',padding:'0',boxSizing:'border-box'}}>
                        <h4 style={{fontSize:'13px',margin:'0'}}>Macbook Laptop</h4>
                        <h4 style={{fontSize:'13px'}}>Ghs 45000.00</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="box">
                <div>
                        <img src={laptop} alt="" style={{width:'140px',height:'100px'}} />
                    </div>
                    <div className='text-white container-fluid' style={{width:'100%', background:'rgba(51, 51, 51, 1)',padding:'0',boxSizing:'border-box'}}>
                        <h4 style={{fontSize:'13px',margin:'0'}}>Macbook Laptop</h4>
                        <h4 style={{fontSize:'13px'}}>Ghs 45000.00</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="box">
                <div>
                        <img src={laptop} alt="" style={{width:'140px',height:'100px'}} />
                    </div>
                    <div className='text-white container-fluid' style={{width:'100%', background:'rgba(51, 51, 51, 1)',padding:'0',boxSizing:'border-box'}}>
                        <h4 style={{fontSize:'13px',margin:'0'}}>Macbook Laptop</h4>
                        <h4 style={{fontSize:'13px'}}>Ghs 45000.00</h4>
                    </div>
                </div>
            </div>
            </div>
             </div>
            </div>
            


            {/* <div className="bundles">
                <div>
                        <img src={at} alt=""/>
                        <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                        <h3>10GB Unlimited Bundle <br />Ghs 40.00</h3>
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
                        <img src={mtn} alt="" />
                        <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                        <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                        <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                        Buy now <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        </div>
                </div>
                <div>
                        <img src={mtn} alt="" />
                        <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                        <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                        <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                        Buy now <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        </div>
                </div>
                <div>
                        <img src={mtn} alt="" />
                        <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                        <h3>10GB Unlimited Bundle <br /> Ghs 40.00</h3>
                        <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '70px', height: '20px', borderRadius: '45px', fontSize: '10px' }}>
                        Buy now <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        </div>
                </div>
            </div> */}
            </div>

            <div className="right-side">
                <div className="at" style={{background:'rgba(255, 255, 255, 1)',padding:'10px',marginTop:'10px'}}>
                <div className="input">
                    <input type="text" placeholder='Search for products and offers'style={{width:'200px',fontSize:'14px'}} /> <button style={{width:'100px',background:'rgba(6, 154, 217, 1)',color:'white',borderColor:'white'}}>Search</button>
                </div>
                <div className='at-rates' style={{display:'flex', gap:'10px'}}>
                
                    <div>
                    <img style={{width:'100px'}} src={at} alt="" />
                    </div>

                    <div>
                    <div className="rate-text">
                        <h3>AIRTEL TIGO UNLIMITED INTERNET <br />BUNDLES</h3>
                        <p>Very affordable at all prices and last longer ranges from</p>

                    <div className="rate-text-prices" style={{display:'flex',border:'1px solid #ccc',borderRadius:'8px', boxShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}>
                    <div className="rate-text-prices1" style={{marginLeft:'-20px'}}>
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

                <div className="mtn" style={{background:'rgba(255, 255, 255, 1)',padding:'10px',marginTop:'20px'}}>
                <div className='mtn-rates' style={{display:'flex', gap:'10px'}}>
                
                    <div>
                    <img style={{width:'100px'}} src={mtn} alt="" />
                    </div>

                    <div>
                    <div className="rate-text">
                        <h3>AIRTEL TIGO UNLIMITED INTERNET <br />BUNDLES</h3>
                        <p>Very affordable at all prices and last longer ranges from</p>

                    <div className="rate-text-prices" style={{display:'flex', border:'1px solid #ccc',borderRadius:'8px',boxShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.1)'}}>
                    <div className="rate-text-prices1" style={{marginLeft:'-20px'}}>
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
                <div className="accessories" style={{background:'rgba(255, 255, 255, 1)',padding:'10px',marginTop:'10px',width:'360px'}}>
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

                <div style={{textAlign:'center'}}>
                        <button style={{ background: 'rgba(6, 154, 217, 1)', color: 'white', width: '100px', height: '40px', borderRadius: '45px', fontSize: '13px',marginTop:'10px',borderColor:'white' }}>
                                    Shop Now <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                </div>

                
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
            +

            </div>
            
        </div>

   
    

         </div>
         {/* <div class="container overflow-hidden">
            <div class="row gy-5">
                <div class="col-4">
                    <div class="p-3 border bg-light"style={{width:'360px',height:'570px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img src={whiteheadphones} alt="" />
                    </div>
                </div>
                <div class="col-8">
                    <div class="row gy-5 flex-column">
                        <div class="col-12">
                            <div class="p-3 border bg-light" style={{width:'190px',height:'150px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <img src={whiteheadphones} alt="" style={{width:'90px',height:'130px'}} />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="p-3 border bg-light" style={{width:'190px',height:'150px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                               <img src={whiteheadphones} alt="" style={{width:'90px',height:'130px'}}/>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="p-3 border bg-light" style={{width:'190px',height:'150px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <img src={whiteheadphones} alt=""  style={{width:'90px',height:'130px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div> */}
         <Footer />
    </div>
    
  )
}

export default Home
