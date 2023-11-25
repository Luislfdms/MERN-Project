import React from 'react'
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const Success = ({ values }) => {

  const resendValidation = () => {
    const emailValidation = axios.get('/userAPI/nodemailer', {
      email: values.email,
      username: values.username
    })
    emailValidation()
    console.log('Email validation triggered!')
  };

  return (
    <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524.jpg")'}}>
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
            <button onClick={resendValidation}>Resend Verification Email</button>
          </label>
      </body>
    </div>
    </div>
  )
}

export default Success