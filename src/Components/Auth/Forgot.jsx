import React from "react";
import { Link } from "react-router-dom";
import forgotImg from "./img/Forgot password-bro.svg"
function Forgot() {
  return (
    <div className="authRoute">
      <main>
        <div id="forgot" class="form-container">
          <div class="auth-img">
            <img src={forgotImg} alt="" />
          </div>
          <div class="auth-box">
            <span class="auth-head">Forgot Password</span>
            <form action="" id="login-form">
              <span class="input-conatiner">
                <i class="fas fa-envelope icon"></i>
                <input
                  type="email"
                  name="email"
                  id="login-email"
                  placeholder="Enter Email"
                  required
                  spellcheck="false"
                />
              </span>
              <input type="submit" value="Request OTP" class="btn btn-login" />
                <Link to="/verify-otp">{"->"}</Link>
            </form>
            <span class="extra-text">
              Remembered Password <Link to="/login">Login Now</Link>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Forgot;
