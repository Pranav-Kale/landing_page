import React from 'react';
import './Benefit.css';
import Img9 from '../../Assets/img9.png';
import Img10 from '../../Assets/img10.png';
import Img8 from '../../Assets/img8.png';

function Benefit() {
  return (
    <div className='ben-container'>
        <div className='ben-bg'>
            <div className='i'>
                <p className='i-text'>Who Can Benefit from Our Proctored Exam Tool?</p>
            </div>
            <div className='j'>
                <div className='block-cont'>
                    <div className='b-circle'>
                        <img className='b-c-img' src={Img9} alt='img'></img>

                    </div>
                    <div className='b-square'>
                        <h3>School</h3>
                        <p>Schools can use our Proctored Exam Tool to conduct secure and monitored assessments for students. Whether it's regular class exams, standardized testing, or entrance examinations, our tool ensures fairness and integrity.</p>
                    </div>
                </div>
                <div className='block-cont'>

                    <div className='b-circle'>
                        <img className='b-c-img' src={Img10} alt='img'></img>
                    </div>
                    <div className='b-square'>
                        <h3>College</h3>
                        <p>Higher education institutions can benefit from our platform to administer online exams for a variety of courses and programs. From midterms to final assessments, our secure environment guarantees the credibility of results.</p>
                    </div>
                </div>
                <div className='block-cont'>

                    <div className='b-circle'>
                        <img className='b-c-img' src={Img8} alt='img'></img>
                    </div>
                    <div className='b-square'>
                        <h3>Institutes</h3>
                        <p> Professional training institutes and certification bodies can rely on our Proctored Exam Tool to verify the skills and knowledge of candidates. Our advanced monitoring features make certification exams trustworthy.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefit