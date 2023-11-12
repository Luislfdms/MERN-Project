import React from 'react'
import Login from "./Login";
import "./Register.css";

function RegisterUserName() {
  return (
    <div className='container-page'>
    <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>

    </div>
    <body className='login-container'>
        <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>            
        <h1><b style={{color: "red"}}>Register</b> your Account</h1>
        <form className='input-container'>
            <label className='input-label-border'>
                <p className='register-text'>Email</p>
                <input type="text" className='input-box' placeholder='Email'/>
                <p className='register-text'>Username</p>
                <input type="text" className='input-box' placeholder='User Name'/>
                <p className='register-text'>Password</p>
                <input type="text" className='input-box' placeholder='Password'/>
            <button className='register-button'>Sign up</button>
            {/* <button className='forgot-password-button'>Forgot password?</button> */}
            <h4>Already have an account? <a href="/Login" className='sign-up-link'>Sign in</a></h4>
            </label>
            </form>
    </body>
        </div>
  )
}

export default RegisterUserName