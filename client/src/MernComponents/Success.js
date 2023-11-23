import React from 'react'
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>
    <div className='container-page'>
      <body className='login-container'>
        <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>
          <label className='input-label-border'>
            <h1><b style={{color: "red"}}>Success!</b></h1>
            <h4><Link to="/login" style={{color: "grey"}} className='sign-up-link'>Sign in</Link></h4>
          </label>
      </body>
    </div>
    </div>
  )
}

export default Success