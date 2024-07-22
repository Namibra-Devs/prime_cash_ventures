import React from 'react'
import './ReturnPolicy.css'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar'

const ReturnPolicy = () => {
  return (
    <div>
          <Banner />
          <Navbar />
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:''}}>

            <div className='policy'> 
                <h3>Delivery & RETURN POLICY</h3>

            </div>
         </div>

         <div style={{padding:'50px'}}>
         <h3 style={{textAlign:'center',color:'rgba(6, 154, 217, 1)', marginTop:'30px'}}>DELIVERY POLICY</h3>
         <p>Please allow 1 to 3 business days for an order to be processed (prior to shipping). If we require additional time we will update your 
         order status accordingly.
         </p>
         <p>Daniko Trading to shipping to 9 countries</p>
         <p>
            Since shipments do not ship on Saturdays or Sundays (even for express shipping), the actual delivery date may differ from the
            estimated transit time. For example: an overnight order leaving our warehouse on a Friday will not arrive until Monday, even though
            it has a one day transit time.
         </p>
         <ul style={{paddingLeft:'0'}}>
          <li style={{marginBottom:'10px'}}>Any other shipping address may require additional shipping. If there is additional shipping required we will notify you of the additional amount before the order is ready to be shipped
          </li>
          <li style={{marginBottom:'10px'}}>
              All initial orders will be shipped via UPS or FedEx using ground service unless otherwise indicated. These orders need to be 
              prepaid via any major credit card or PAYPAL
          </li>
          <li style={{marginBottom:'10px'}}>
              We do carry many more items in stock so ask your customers service representative about your special requests. You may
              also ask about our current specials, best sellers, product information, and product assortment for your store.
          </li>
          <li style={{marginBottom:'10px'}}>
              Orders placed after sundown on Friday, all day Saturday and any other Jewish Holidays are able to be canceled by the buyer
              or seller
          </li>
         </ul>

         <h3 style={{textAlign:'center',marginTop:'30px'}}>Return Policy</h3>


         <ol style={{marginBottom:'10px', padding:'0'}}>
    <li>Management must authorize all returns. Contact us for an authorization number before shipping back any Products.</li><br />
    
    <li>
        Returns are permitted within 7 days from the date of purchase (we do not accept returns or exchanges on items that can constitute a health risk). All Shipping, Handling and Insurance charges are not refundable under any circumstances for any reason. We reserve the right to charge a minimum 15% re-stocking fee on all returns. <br />
        
        <ol type="a" style={{padding:'0'}}>
            <li style={{marginTop:'20px'}}>All returned Products must be in its original mint and clean condition. Returns on damaged or scratched Products will not be accepted.</li><br />
            
            <li>
                To ensure the safety and health of our customers we do not accept returns or exchanges on items that can constitute a health risk or any item that comes into contact with ANY bodily fluid. Once these items leave our warehouse, we consider them to be used and non-resalable. <br />
            </li>
            
            <li style={{marginTop:'20px'}}>
                All returns must be authorized by us, contact us for an authorization number and instructions prior to shipping any goods back. With your return, enclose the original receipt or a copy of it. Also include a brief letter of explanation of why the Products is being returned and state your request for either a refund or an exchange. Include the authorization number on the letter, and on the outside of the shipping box (on the shipping label).
            </li>
        </ol> 
    </li>
    
           <li style={{marginTop:'20px'}}>All images are for illustration only, and may not represent the product described.</li> <br />
    
           <li>We are not responsible for typographical errors.</li>
         </ol>

         </div>
        <Footer />
     
      
    </div>
  )
}

export default ReturnPolicy
