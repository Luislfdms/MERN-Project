import {React, useState} from 'react'
import Login from "./LoginPage";
import "./Register.css";
import { Link } from "react-router-dom";

const RegisterName = ( {nextStep, handleChange, values} ) => {

  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>
    <div className='container-page'>
      <body className='login-container'>
        <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>
        <h1><b style={{color: "red"}}>Register</b> your Account</h1>
        <form>
          <label className='input-label-border'>
            <p className='register-text'>First Name</p>
            <input 
              type="text" 
              className='input-box' 
              placeholder='First Name'
              value={values.firstName}
              onChange={handleChange('firstName')} 
            />
            <p className='register-text'>Last Name</p>
            <input 
              type="text" 
              className='input-box' 
              placeholder='Last Name'
              value={values.lastName}
              onChange={handleChange('lastName')} 
            />
          <button onClick={ Continue } className='register-button'>Next</button>
          <h4>Already have an account? <Link to="/login" className='sign-up-link'>Sign in</Link></h4>
          </label>
        </form>
      </body>
    </div>
    </div>
  )
}

export default RegisterName
