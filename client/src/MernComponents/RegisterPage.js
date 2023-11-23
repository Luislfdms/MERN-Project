import {React, useState} from 'react'
import Login from "./LoginPage";
import "./Register.css";
import {Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterPage() {

  
  const registerUser = (e) => {
    e.preventDefault();
  }

  return (
    <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>
          <div className='container-page'>
            <body className='register-container'>
                <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>            
                <h1><b style={{color: "red"}}>Register</b> your Account</h1>
                <form onSubmit={registerUser} className='input-container'>
                  <p className='register-text'>First Name</p>
                  <input type="text" className='input-box' placeholder='First Name'/>
                  <p className='register-text'>Last Name</p>
                  <input type="text" className='input-box' placeholder='Last Name'/>
                  <p className='register-text'>Email</p>
                  <input type="text" className='input-box' placeholder='Email'/>
                  <p className='register-text'>Username</p>
                  <input type="text" className='input-box' placeholder='User Name'/>
                  <p className='register-text'>Password</p>
                  <input type="text" className='input-box' placeholder='Password'/>
                  <button className='register-button'>Sign up</button>
                  <h4>Already have an account? <Link to="/login" className='sign-up-link'>Sign in</Link></h4>
                </form>
            </body>
        </div>
    </div>
  )
}

export default RegisterPage
