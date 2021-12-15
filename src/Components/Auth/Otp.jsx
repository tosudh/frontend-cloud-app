import React from 'react'
import { Link } from 'react-router-dom'
import otpImg from "./img/Key-pana.svg"
function Otp() {
    return (
        <div className='authRoute'>
            
    <main>
        <div id="forgot" class="form-container">
            <div class="auth-img">
                <img src={otpImg} alt=""/>
            </div>
            <div class="auth-box">
                <span class="auth-head">Enter your verification code</span>
                <form action="" id="login-form">
                    <span class="input-conatiner">
                        <i class="fas fa-key icon"></i>
                        <input type="number" name="otp" id="otp" placeholder="Enter OTP" required
                            spellcheck="false"/>
                    </span>
       
                    <input type="submit" value="Request OTP" class="btn btn-login"/>
                    <Link to="/set-password">{"->"}</Link>

                </form>
            </div>
        </div>
    </main>
        </div>
    )
}

export default Otp
