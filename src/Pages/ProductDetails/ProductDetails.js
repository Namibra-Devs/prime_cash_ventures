import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'


const ProductDetails = () => {
  return (
    <div>
      <Banner />
      <Navbar />
       <div className='productDetails'>
        <h5>PRODUCT DESCRIPTION</h5>
        <div className="product-img">
          <div className="product-img-small">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />

          </div>
          <div className="product-img-large">
              <img src="" alt="" />
          </div>
          <div className="product-img-text">
               <h5>Dual Band WiFi Router High Speed Wireless Internet Router </h5>
                <ul>
                  <li>Dual-Band 2.4GHz + 5 GHz: Get lightning quick connections for all your wireless devices by upgrading to Tenda's enhanced 1200 Mbps high speed Wi fi technology (300mbps at 2. 4GHz plus 867Mbps at 5GHz)</li>
                  <li>Powerful Belt Capacity: Link up to 20 wireless devices like Google assistant, Alexa and various streaming devices, simultaneously, while maintaining optimum network conditions</li>
                  <li>Antennas Maximum Signal Coverage: The Tenda AC6 is equipped with four powerful 5dBi antennas, delivering high speed internet throughout your home and provides seamless coverage for up to 2000 Sq. ft. Output: DC 9V1A</li>
                  <li>MU-MIMO Technology: More users in the network at the same time, due to advanced MU-MIMO technology, even more users can now use the network for games, streaming or data transmissions at the same time. The guest network also benefits from MU-MIMO technology.</li>
                </ul>
          </div>
        </div>

       </div>
       <Footer />
    </div>
  )
}

export default ProductDetails
