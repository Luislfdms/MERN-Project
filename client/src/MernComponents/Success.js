import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
const emailValidation = require('/userAPI/nodemailer')

const Success = ({ values }) => {
  const resendValidation = () => {
    emailValidation(values.email, values.username)
    console.log('Email validation triggered!')
  };

  const handleVerification = () => {
    const response = axios.patch('/userAPI/verify', {
      email: values.email,
      username: values.username
    })
    if (response.statusText === 'user verified') {
      // Redirect to the sign-in page
      history.push('/login');
    }
  };

  // Call the handleVerification function when the component mounts
  React.useEffect(() => {
    handleVerification();
  }, []); 

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
            <button onClick={resendValidation}>Resend Verification Email</button>
          </label>
      </body>
    </div>
    </div>
  )
}

export default Success