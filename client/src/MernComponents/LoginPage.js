import React, { useState, useRef, useEffect } from 'react';
import "./Login.css";
import Register from "./RegisterPage.js";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { start, user } from '../redux/userSlice.js';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/userAPI/login", {username, password});
            dispatch(start());
            dispatch(user(username));
            navigate('/home');
            console.log("Login succesful:", response);
            setErrorMessage("");
        } catch (err) {
            console.log("Login Failed", err.response.data);
            if(err.response.data === 'DENIED ACCESS: VERIFY EMAIL') {
                setErrorMessage("Please verify your email");
            }
            else {
                setErrorMessage("Incorrect username or password. Please try again.");
            }
        }
    };

  return (
    <body className='container-page'>
    <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>

    </div>
    <div className='login-container'>
        <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>            
        <h1><b style={{color: "red"}}>Login</b> to your Account</h1>
        <form onSubmit={handleLogin} className='input-container'>
            <label className='input-label-border'>
                <p className='login-text'>Username</p>
                <input onChange={(e) => setUsername(e.target.value)} type="text" className='input-box' placeholder='Username' />
                <p className='login-text'>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className='input-box' placeholder='Password'/>
            <button className='login-button'>Sign in</button>
            {/* <button className='forgot-password-button'>Forgot password?</button> */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <h4>Don't have an account? <Link to='/register' className='sign-up-link'>Sign up</Link></h4> 
            </label>
        </form>
    </div>
        </body>
  )
}

export default LoginPage
