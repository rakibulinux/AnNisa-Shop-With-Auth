import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import googleLogo from "../../google.png";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password.length < 6) {
      setError("Password should be 6 carrcets or more");
      return;
    }
    if (password !== confirm) {
      setError("Your Password did not match");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="form-container">
      <h2 className="title-text">Sign Up</h2>
      <form onSubmit={handleSubmit} className="form-field">
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
          Sign Up
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
      <p>{error}</p>
    </div>
  );
};

export default SignUp;
