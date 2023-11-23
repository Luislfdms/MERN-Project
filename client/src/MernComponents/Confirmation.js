import React from 'react'
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from '@mui/material'

const Confirmation = ({prevStep, nextStep, values}) => {

console.log(values);
const { firstName, lastName, email, username, country, levelOfEducation } = values
const Continue = e => {
    e.preventDefault();
    nextStep();
}

const Previous = e => {
    e.preventDefault();
    prevStep();
}

  return (
    <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>
    <div className='container-page'>
      <body className='login-container'>
        <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>
        <h1><b style={{color: "red"}}>Confirm</b> your Information</h1>
          <label className='input-label-border'>
            <List>
                <ListItem>
                    <ListItemText primary="Email" secondary={email}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Username" secondary={username}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="First Name" secondary={firstName}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Last Name" secondary={lastName}/>
                </ListItem>
            </List>
          <button onClick={ Continue } className='register-button'>Confirm</button>
          <button onClick={ Previous } className='register-button'>Previous</button>
          <h4>Already have an account? <Link to="/login" className='sign-up-link'>Sign in</Link></h4>
          </label>
      </body>
    </div>
    </div>
  )
}

export default Confirmation