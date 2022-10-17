import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import googleLogo from "../../google.png";
const SignUp = () => {
  return (
    <div className="form-container">
      <h2 className="title-text">Sign Up</h2>
      <form className="form-field">
        <div className="email-input">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="email" name="email" required />
        </div>
        <div className="password-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            required
            name="password"
          />
        </div>
        <div className="password-input">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            placeholder="password"
            required
            name="confirm"
          />
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        <p className="text-new">
          Already have an account?
          <Link className="link-text" to="/login">
            Login
          </Link>
        </p>
        <div className="or-text">
          <hr /> <span>or</span> <hr />
        </div>
        <button className="google-btn" type="submit">
          <img src={googleLogo} alt="" /> <span>Continue with Google</span>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
