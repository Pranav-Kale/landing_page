import React from 'react';
import './Hero.css'

function Hero() {
  return (
    <>
      <div className='heroContainer'>
          <div className='hero-bg'>
            <div className='a'>
            <div className='heroH1'><h1>Secure and Scalable Proctored Exams</h1></div>
            <div className='heroImg'>
              <div className='img-bg'><img src="https://www.iitms.co.in/online-examination-system/assets/img/online%20exam%20banner%20image2.png" alt="heroImg"></img></div>
            </div>
          </div>
          <div className='heroText'>Ensuring Integrity in Remote Assessments</div>
          <div className='heroBtns'>
            <div className='heroBtn1'>Get Started</div>
            <div className='heroBtn2'>Book a Demo</div>
          </div>
          </div>
      </div>
    </>
  )
}

export default Hero