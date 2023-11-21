import {React, useState} from 'react'
import RegisterName from "./RegisterName";
import RegisterUserName from "./RegisterUserName";
import "./Register.css";
import {Routes, Route} from "react-router-dom";

function RegisterPage() {

  
  const registerUser = (e) => {
    e.preventDefault();
  }

  return (
    <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>
          <div className='container-page'>
            <body className='login-container'>
                <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>            
                <h1><b style={{color: "red"}}>Register</b> your Account</h1>
                <form onSubmit={registerUser} className='input-container'>
                <RegisterName />
                {/* <RegisterUserName /> */}
                </form>
            </body>
        </div>
    </div>
  )
}

export default RegisterPage
