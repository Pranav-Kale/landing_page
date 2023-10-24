import { Link } from 'react-router-dom';
import './SignUp.css'
import React from 'react';

function Signup() {
  return (
    <div className="outerbody">
      <div className="innerbody">
        <header>
          <h1>Signup</h1>
          <p>It just takes 30 seconds</p>
        </header>

        <main className="signup-body">
          <form action="#">
            <p>
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" placeholder="eg. abc def gji" required />
            </p>

            <p>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="eg. abc123$@gmail.com" required />
            </p>

            <p>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="eg. Abc@#1234" required />
            </p>

            <p>
              <input type="submit" id="submit" value="Create Account" />
            </p>
          </form>
        </main>

        <footer className="signup-footer">
          <p>
            Already have an Account <Link to="#">Login</Link>
          </p>
        </footer>
      </div>

    </div>
  );
}

export default Signup;
