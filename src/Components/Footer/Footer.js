import React from 'react';
import footerimg from '../Assets/footer-img.jpeg';
import './Footer.css';

const Footer = () => {
  return (
    <div className="" style={{marginTop:'150px'}}>
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>

        <section className="">
          <div className=" text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <div style={{ display: 'flex'}}>
                  <div><img src={footerimg} alt="" style={{ width: '50px', height: '40px' }} /></div>
                  <div><p style={{ fontSize: '12px', marginLeft: '10px' }}>PRIME HOMES DATA PACKAGES</p></div>
                  
                </div>
                <p style={{ fontSize: '8px', marginTop: '10px' }}>
                  Lorem ipsum dolor sit amet consectetur. Commodo quam turpis faucibus enim proin mauris eget justo. Porttitor elementum at aliquam phasellus convallis. Et viverra duis lectus ipsum lectus non malesuada. Dolor varius adipiscing integer pretium Lorem ipsum dolor sit amet consectetur. Commodo quam turpis faucibus enim proin mauris eget justo. Porttitor elementum at aliquam phasellus convallis. 
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Company</h6>
                <p><a href="#!" className="text-white" style={{ textDecoration: 'none' }}>Home</a></p>
                <p><a href="#!" className="text-white" style={{ textDecoration: 'none' }}>Shop</a></p>
                <p><a href="#!" className="text-white" style={{ textDecoration: 'none' }}>Mtn Bundle</a></p>
                <p><a href="#!" className="text-white" style={{ textDecoration: 'none' }}>Airtel-Tigo Bundle</a></p>
                <p><a href="#!" className="text-white" style={{ textDecoration: 'none' }}>Staff login</a></p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Customer Service</h6>
                <p><a href="#!" className="text-white" style={{ textDecoration: 'none' }}>Agent Account</a></p>
                <p><a href="#!" className="text-white" style={{ textDecoration: 'none' }}>Track your order</a></p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Our Information</h6>
                <p><a href="/privacy" className="text-white" style={{ textDecoration: 'none' }}>Privacy</a></p>
                <p><a href="#!" className="text-white" style={{ textDecoration: 'none' }}>User Terms & Conditions</a></p>
                <p><a href="/return-policy" className="text-white" style={{ textDecoration: 'none' }}>Return Policy</a></p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Contact Info</h6>
                <p><a href="tel:+233024001144" className="text-white" style={{ textDecoration: 'none' }}>+233(0)24001144</a></p>
                <p><a href="mailto:primecashventures@gmail.com" className="text-white" style={{ textDecoration: 'none' }}>raymondbog@gmail.com</a></p>
                <p><a href="#!" className="text-white" style={{ textDecoration: 'none' }}>Online Shop</a></p>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <div className="" style={{display: 'flex', backgroundColor: '#1c2331',justifyContent: 'space-between', alignItems: 'stretch', color: 'white',width:'100%', marginBottom:"0"}}>
          <div style={{ flex: '1', textAlign: 'center', fontSize: '13px',backgroundColor: 'rgba(6, 154, 217, 1)',margin:'0',padding:'0'}}>
            <p>© Prime Home Data Bundles All Right Reserved. Designed <br /> and developed by Namibra inc.</p>
          </div>
          <div style={{ flex: '1', backgroundColor: 'rgba(255, 255, 255, 1)',textAlign: 'center',justifyContent: 'center'}}>
            <p style={{ color: 'black' }}>BECOME OUR CHERISHED AGENT <a href="">SIGN IN</a></p>
          </div>
      </div>
      




    </div>
  );
};

export default Footer;
