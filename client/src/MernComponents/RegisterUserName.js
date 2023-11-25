import React from 'react'
import Login from "./LoginPage";
import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";

const RegisterUserName = ( {prevStep, nextStep, handleChange, values} ) => {

  const Continue = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('/userAPI/register', {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        username: values.username,
        password: values.password,
        followers: [],
        following: []
      })

      if (response.status === 200) {
        nextStep();
      } else {
        console.log('Unexpected status code:', response.status);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('Username already exists. Please choose another username.')
      } else {
        console.error('Error creating user:', error.message);
      }
    }
  };

  const Previous = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>
      <div className='container-page'>
        <div className='login-container'>
          <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>
          <h1><b style={{color: "red"}}>Register</b> your Account</h1>
          <form>
            <label className='input-label-border'>
              <p className='register-text'>Username</p>
                <input 
                  type="text" 
                  className='input-box' 
                  placeholder='username'
                  value={values.username}
                  onChange={handleChange('username')} 
                />
                <p className='register-text'>Email Address</p>
                <input 
                  type="text" 
                  className='input-box' 
                  placeholder='email address'
                  value={values.email}
                  onChange={handleChange('email')} 
                />
                <p className='register-text'>Password</p>
                <input 
                  type="password" 
                  className='input-box' 
                  placeholder='password'
                  value={values.password}
                  onChange={handleChange('password')} 
                />
              <button onClick={ Continue } className='register-button'>Next</button>
              <button onClick={ Previous } className='register-button'>Previous</button>
              <h4>Already have an account? <Link to="/login" className='sign-up-link'>Sign in</Link></h4>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterUserName