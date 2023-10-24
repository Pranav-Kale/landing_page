import React from 'react';
import './About.css';
import Img5 from '../../Assets/img4.png'

function About() {
  return (
    <div className='aboutContainer'>
        <div className='bg'>
            <div className='c'>
              <div className='c-bg'><img src={Img5} alt='aboutImg'></img></div>
            </div>
            <div className='d'>
                <div className='aboutHead'>About Our Proctored Exam Tool</div>
                <div className='aboutText'>Our Proctored Exam Tool is designed to revolutionize the way institutions and organizations conduct remote examinations. With advanced monitoring and security features, we ensure the integrity of each assessment.Our user-friendly interface, real-time AI monitoring, and data privacy standards set us apart. Join the future of secure online exams.</div>
                <div className='aboutBtn'><span>Book a Demo Session</span></div>
            </div>
        </div>
    </div>
  )
}

export default About