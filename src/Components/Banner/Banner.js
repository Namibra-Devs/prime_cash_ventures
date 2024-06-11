import React from 'react'
import './Banner.css'
import headphones from '../Assets/headphones.png'
import laptop from '../Assets/laptop.png'
import mouse from '../Assets/mouse.png'
import pad  from '../Assets/pad.png'
import rerouter from '../Assets/rerouter.png'
import mtnlogo from '../Assets/mtnlogo.jpg'
import girl from '../Assets/girl.png'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-text'>
        <h2>PRIME HOMES DATA PACKAGES</h2>
        <p>Your trusted plug and dealer in great mobile unlimited <br /> bundles with a touch of quality and great electronic <br /> appliances</p>
            <img style={{width:'110px',height:'84px'}} src={laptop} />
            <img style={{width:'54px',height:'54px'}} src={pad} />
            <img style={{width:'42px',height:'42px'}} src={rerouter} />
            <img style={{width:'41px',height:'41px'}} src={mouse} />
            <img style={{width:'27px',height:'33px'}} src={headphones} />
        </div>
        
        <div style={{display:'flex'}}>
        <div className="banner-img">
         <img style={{width:'80px',height:'60px'}} src={mtnlogo} /> <h3>PRIME HOMES DATA PACKAGES</h3> 
        
        </div>
        <div className="banner-girl">
         <img src={girl}/>
         </div>
        </div>
       
        
    </div>
  )
}

export default Banner;
