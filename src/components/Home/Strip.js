import React from 'react';
import './Strip.css';
import Img7 from '../../Assets/img7.png';

function Strip() {
  return (
        <div className="scroller">
            <div className="scroller-in">
                <h4><img src={Img7} className='logoImage' alt="logo"></img>ProctorPro</h4>
                <h4><img src={Img7} className='logoImage' alt="logo"></img>ProctorPro</h4>
                <h4><img src={Img7} className='logoImage' alt="logo"></img>ProctorPro</h4>
                <h4><img src={Img7} className='logoImage' alt="logo"></img>ProctorPro</h4>
                <h4><img src={Img7} className='logoImage' alt="logo"></img>ProctorPro</h4>
            </div>
            <div className="scroller-in">
                <h4><img src={Img7} className='logoImage' alt="logo"></img>ProctorPro</h4>
                <h4><img src={Img7} className='logoImage' alt="logo"></img>ProctorPro</h4>
                <h4><img src={Img7} className='logoImage' alt="logo"></img>ProctorPro</h4>
                <h4><img src={Img7} className='logoImage' alt="logo"></img>ProctorPro</h4>
                <h4><img src={Img7} className='logoImage' alt="logo"></img>ProctorPro</h4>
            </div>
        </div>
  )
}

export default Strip