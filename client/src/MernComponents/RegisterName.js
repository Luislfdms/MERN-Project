import {React, useState} from 'react'
import Login from "./LoginPage";
import "./Register.css";
import { Link } from "react-router-dom";

function RegisterName() {
//Use redux in order change the display from the name ask to account info ask.
//temporary state to see how it would function, would make name display none and account display to 
const [visibleRegister, setVisibleRegister] = useState(true);  
const [firstName, setFirstname] = useState("");
const [lastName, setLastname] = useState("");

const nextRegisterScreen = () => { 
    setVisibleRegister(!visibleRegister);
  }

  return (
    <>
    {visibleRegister && (
    <label className='input-label-border'>
      <p className='register-text'>First Name</p>
      <input type="text" className='input-box' placeholder='First Name'/>
      <p className='register-text'>Last Name</p>
      <input type="text" className='input-box' placeholder='Last Name'/>
      <button onClick={nextRegisterScreen} className='register-button'>Next</button>
      <h4>Already have an account? <Link to="/login" className='sign-up-link'>Sign in</Link></h4>
    </label>
     )}
    </>
  )
}

export default RegisterName
