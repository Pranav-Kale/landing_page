import React from 'react';
import './Features.css';
import Img4 from '../../Assets/img4.png';

function Features() {
  return (
    <div className='feat-container'>
      <div className='feat-bg'>
        <div className='e'>
          <div className='feat-h1'>Key Features</div>
          <div className='feat-text'><p><b>Remote Monitoring</b> :  Proctors can remotely observe exam-takers through webcam and screen sharing.<br/><b>Identity Verification</b> :  Robust identity verification mechanisms prevent impersonation and fraud.<br/><b>Cheating Prevention</b> :  AI-based facial recognition,eye tracking, and behavior analysis flag potential cheating.<br/><b>Secure Environment</b> :  Unauthorized resources are disabled during exams.<br/><b>Data Privacy</b> :  Stringent data privacy and security standards protect sensitive information.</p></div>
          <div className='feat-btn'><span>More info</span></div>
        </div>
        <div className='f'>
          <div className='f-bg'><img src={Img4} alt="featimage"></img></div>
        </div>
      </div>
    </div>
  )
}

export default Features