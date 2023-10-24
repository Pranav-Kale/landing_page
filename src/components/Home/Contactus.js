import React from "react";
import "./Contactus.css";

function Contactus() {
  return (
    <div className="cnt-container">
      <div className="cnt-bg">
      <div className="k">
        <div className="box-cont">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </div>
        <h3>Contact us</h3>
        <p>
          Need to get in touch with us? Either fill out the form with your
          inquiry or find the department email you'd like to contact below
        </p>
      </div>
      <div className="l">
        <div className="l-bg">
          <form action="#">
            <div className="ct-box">
              <p>
                <label htmlFor="fullname">
                  First Name<r> *</r>
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="eg. abc"
                  required
                />
              </p>

              <p>
                <label htmlFor="fullname">
                  Last Name<r> *</r>
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="eg. def"
                  required
                />
              </p>
            </div>

            <p className="p">
              <label htmlFor="email">Your Email<r> *</r></label>
              <input
                type="email"
                id="email"
                placeholder="eg. abc123$@gmail.com"
                required
              />
            </p>

            <p className="p">
              <label htmlFor="What can we help you with?">What can we help you with?</label>
              <textarea
                id="feedback"
                placeholder="Type your feedback here..."
                rows="10" 
                ></textarea>
            </p>

            <p>
              <input type="submit" id="submit" value="Submit" />
            </p>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contactus;
