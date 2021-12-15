import React from 'react'
import { Link } from 'react-router-dom'
import changePassImg from"./img/My password-pana.svg"

function ChangePassword() {
    return (
        <div className='authRoute'>
            
    <main>
        <div id="signup" class="form-container">
            <div class="auth-img">
                <img src={changePassImg} alt=""/>
            </div>
            <div class="auth-box">
                <span class="auth-head">Confirm new password</span>
                <form action="" id="login-form">
                    <span class="input-conatiner">
                        <i class="fas fa-lock icon"></i>
                        <input type="password" name="password" id="signup-password" placeholder="Enter New Password"/>
                    </span>
                    <span class="input-conatiner">
                        <i class="fas fa-lock icon"></i>
                        <input type="password" name="re-password" id="re-signup-password" placeholder="Re-enter New Password"/>
                    </span>
                    <input type="submit" value="Save Password" class="btn btn-login"/>
                </form>
                <Link to="/login">{"->"}</Link>

            </div>
        </div>
    </main>

        </div>
    )
}

export default ChangePassword
