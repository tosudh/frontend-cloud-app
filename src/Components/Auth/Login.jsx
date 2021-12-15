import React from 'react'
import { Link } from 'react-router-dom'
import './auth.scss'
import loginImg from "./img/Mobile login-rafiki (1).svg"
function Login() {
    return (
        <div className='authRoute'>
                <main>
        <div id="login" class="form-container">
            <div class="auth-img">
                <img src={loginImg} alt=""/>
            </div>
            <div class="auth-box">
                <span class="auth-head">Login</span>
                <form action="" id="login-form">
                    <span class="input-conatiner">
                        <i class="fas fa-envelope icon"></i>
                        <input type="email" name="email" id="login-email" placeholder="Enter Email" required
                            spellcheck="false"/>

                    </span>
                    <span class="input-conatiner">
                        <i class="fas fa-lock icon"></i>
                        <input type="password" name="password" id="login-password" placeholder="Enter Password"/>
                    </span>
                <Link to="/forgot">Forgot Password ?</Link>
                    <input type="submit" value="Login" class="btn btn-login"/>
                </form>
                <span class='extra-text'>Not yet member  {" "}
                <Link to="/signup">Signup Now</Link>
                </span>
            </div>
        </div>
    </main>
        </div>
    )
}

export default Login
