import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import googleLogo from "../../google.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="form-container">
      <h2 className="title-text">Login</h2>
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
            name="password"
            required
          />
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        <p className="text-new">
          New to AnNisa Shop?{" "}
          <Link className="link-text" to="/signup">
            Create New Account
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

export default Login;
