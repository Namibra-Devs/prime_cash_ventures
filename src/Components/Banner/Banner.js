import React from 'react';
import './Banner.css';
import headphones from '../Assets/headphones.png';
import laptop from '../Assets/laptop.png';
import mouse from '../Assets/mouse.png';
import pad from '../Assets/pad.png';
import rerouter from '../Assets/rerouter.png';
import mtnlogo from '../Assets/mtnlogo.jpg';
import girl from '../Assets/girl.png';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-text'>
        <h2>PRIME HOMES DATA PACKAGES</h2>
        <p>Your trusted plug and dealer in great mobile unlimited <br /> bundles with a touch of quality and great electronic <br /> appliances</p>

        <div style={{ marginLeft: '30px', marginBottom: '30px' }}>
          <img style={{ width: '50px', height: 'auto' }} src={laptop} alt="Laptop" />
          <img style={{ width: '30px', height: 'auto' }} src={pad} alt="Pad" />
          <img style={{ width: '30px', height: 'auto' }} src={rerouter} alt="Router" />
          <img style={{ width: '20px', height: 'auto' }} src={mouse} alt="Mouse" />
          <img style={{ width: '20px', height: 'auto' }} src={headphones} alt="Headphones" />
       </div>
       </div>
       <div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="banner-img" style={{marginRight:'200px'}}>
          <img style={{ width: '60px', height: '40px',marginTop: '15px'}} src={mtnlogo} alt="MTN Logo" />
          <h3>PRIME HOMES DATA PACKAGES</h3>
        </div>
        <div className="banner-girl" style={{}}>
          <img src={girl} alt="Girl" style={{ width: '100%', maxWidth: '200px', height: '80px',marginLeft:'110px' }} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
