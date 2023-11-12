import React from 'react'
import Login from "./Login";
import "./Register.css";

function RegisterName() {
  return (
    <div className='container-page'>
    <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>

    </div>
    <body className='register-container'>
        <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>            
        <h1><b style={{color: "red"}}>Register</b> your Account</h1>
        <form className='input-container'>
            <label className='input-label-border'>
                <p className='register-text'>First Name</p>
                <input type="text" className='input-box' placeholder='First Name'/>
                <p className='register-text'>Last Name</p>
                <input type="text" className='input-box' placeholder='Last Name'/>

            <button className='register-button'>Next</button>
            {/* <button className='forgot-password-button'>Forgot password?</button> */}
            <h4>Already have an account? <a href="/Login" className='sign-up-link'>Sign in</a></h4>
            </label>
            </form>
    </body>
        </div>
  )
}

export default RegisterName