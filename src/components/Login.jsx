import React from 'react'
import '../styles/Login.css'
import loginBg from '../assests/login-bg.jpg'
import iconLogo from '../assests/icon-logo.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login-container'>
        <div className="login-content">
            <Link to="/" className="logo">
                <img src={iconLogo} alt="icon-logo" />
            </Link>
            <div className="form">
                <h2>Get started to Login</h2>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className='login-btn'>Log In</button>
                    </form>
            </div>
        </div>
        
        <div className="login-bg">
            <img src={loginBg} alt="login-bg" />
        </div>
    </div>
  )
}

export default Login