import React from 'react'
import { Link } from "react-router-dom";
const emailValidation = require('../nodeMailer/nodeMailer')

const Success = ({ values }) => {
  const resendValidation = () => {
    // Place the logic for email validation here
    emailValidation(values.email, values.username)
    console.log('Email validation triggered!');
    // You can make an API call to your server to handle email validation
  };

  return (
    <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>
    <div className='container-page'>
      <body className='login-container'>
        <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>
          <label className='input-label-border'>
            <h1><b style={{color: "red"}}>Success!</b></h1>
            <h4><Link to="/login" style={{color: "grey"}} className='sign-up-link'>Sign in</Link></h4>
            <p>
            Please check your email and click the link to verify your account.
            If you haven't received the email, you can request a new one by clicking
            the "Resend Verification Email" link below.
            </p>
            <button onClick={emailValidation}>Resend Verification Email</button>
          </label>
      </body>
    </div>
    </div>
  )
}

export default Success