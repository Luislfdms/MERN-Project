import React from 'react'
import "./Login.css";
import Register from "./Register.js";

function Login() {
  return (
    <div className='container-page'>
    <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>

    </div>
    <body className='login-container'>
        <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>            
        <h1><b style={{color: "red"}}>Login</b> to your Account</h1>
        <form className='input-container'>
            <label className='input-label-border'>
                <p className='login-text'>Username</p>
                <input type="text" className='input-box' placeholder='Username' />
                <p className='login-text'>Password</p>
                <input type="password" className='input-box' placeholder='Password'/>
            <button className='login-button'>Sign in</button>
            <button className='forgot-password-button'>Forgot password?</button>
            {/* This is where we would replace the a href with a link/route, for now just left it as an href */}
            <h4>Don't have an account? <a href="./Register" className='sign-up-link'>Sign up</a></h4> 
            </label>
        </form>
    </body>
        </div>
  )
}

export default Login