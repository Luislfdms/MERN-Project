import React from 'react'
import Login from "./LoginPage";
import "./Register.css";
import { Link } from "react-router-dom";

function RegisterUserName() {
//Use redux in order change the display from the name ask to account info ask.

  return (
    <label className='input-label-border userNameDisplay'>
      <p className='register-text'>Email</p>
      <input type="text" className='input-box' placeholder='Email'/>
      <p className='register-text'>Username</p>
      <input type="text" className='input-box' placeholder='User Name'/>
      <p className='register-text'>Password</p>
      <input type="text" className='input-box' placeholder='Password'/>
      <button className='register-button'>Sign up</button>
      <button className='register-button reverse-back-button'>Back</button>
      <h4>Already have an account? <Link to="/" className='sign-up-link'>Sign in</Link></h4>
    </label>
  )
}

export default RegisterUserName
