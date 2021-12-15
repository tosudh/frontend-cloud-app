import React from 'react'
import { Link } from 'react-router-dom'
import signupImg from "./img/Mobile login-pana.svg"
function Signup() {
    return (
        <div className='authRoute'>
                <main>
        <div id="signup" class="form-container">
            <div class="auth-img">
                <img src={signupImg} alt=""/>
            </div>
            <div class="auth-box">
                <span class="auth-head">Signup</span>
                <form action="" id="login-form">
                    <span class="input-conatiner">
                        <i class="fas fa-envelope icon"></i>
                        <input type="email" name="email" id="login-email" placeholder="Enter Email" required
                            spellcheck="false"/>

                    </span>
                    <span class="input-conatiner">
                        <i class="fas fa-lock icon"></i>
                        <input type="password" name="password" id="signup-password" placeholder="Enter Password"/>
                    </span>
                    <span class="input-conatiner">
                        <i class="fas fa-lock icon"></i>
                        <input type="password" name="re-password" id="re-signup-password" placeholder="Re-enter Password"/>
                    </span>
                    <input type="submit" value="Signup" class="btn btn-login"/>
                </form>
                <span class='extra-text'>Already a member {" "}
                <Link to="/login">Login Now</Link>
                </span>
            </div>
        </div>
    </main>
        </div>
    )
}

export default Signup
