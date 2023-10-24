// import React from 'react';
// import './Footer.css'


// function Footer() {
//   return (
//        <div className='footerContainer'>
//           <div className='footerSections'></div>
//           <div className='footerLinks'></div>
//        </div>
//   )
// }

// export default Footer;


import React from 'react';
import './Footer.css';
import Img11 from '../../Assets/img11.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section1">
          <h3 style={{fontSize:"50px"}}><img src={Img11} alt='logo' height="50px" style={{marginRight:"10px"}} />ProctorPro</h3>
        </div>
        <div className="footer-section2">
          <h3>Contact Us</h3>
          <p>Email: example@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div className="footer-section3">
          <h3>Follow Us</h3>
          <a style={{textDecoration:'none' , color:"yellow"}} href="#">Facebook</a>
          <a style={{textDecoration:'none' , color:"yellow"}} href="#">Twitter</a>
          <a style={{textDecoration:'none' , color:"yellow"}} href="#">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
