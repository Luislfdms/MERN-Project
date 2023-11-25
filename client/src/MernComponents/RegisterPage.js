import {React, useState} from 'react'
import Login from "./LoginPage";
import "./Register.css";
import {Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { start, logout } from '../redux/userSlice.js';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [followers, setFollowers] = useState("trial");
  const [following, setFollowing] = useState("trial");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  
  const registerUser = async (e) => {
    e.preventDefault();
    // dispatch(loginStart());
    try {
      const response = await axios.post("/userAPI/register", {firstname, lastname, email, username, password, followers, following});
      // dispatch(loginSuccess(response.data));
      console.log("Register succesful:", response.data)
      // setErrorMessage("");
      navigate('/');
  } catch (err) {
      // dispatch(loginFailed());
      console.log("Register Failed", err.response.data);
      // setErrorMessage("Incorrect username or password. Please try again.");
  }
  };

  return (
    <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524.jpg")'}}>
          <div className='container-page'>
            <body className='register-container'>
                <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>            
                <h1><b style={{color: "red"}}>Register</b> your Account</h1>
                <form onSubmit={registerUser} className='input-container'>
                  <p className='register-text'>First Name</p>
                  <input onChange={(e) => {setFirstname(e.target.value)}} type="text" className='input-box' placeholder='First Name'/>
                  <p className='register-text'>Last Name</p>
                  <input onChange={(e) => {setLastname(e.target.value)}} type="text" className='input-box' placeholder='Last Name'/>
                  <p className='register-text'>Email</p>
                  <input onChange={(e) => {setEmail(e.target.value)}} type="text" className='input-box' placeholder='Email'/>
                  <p className='register-text'>Username</p>
                  <input onChange={(e) => {setUsername(e.target.value)}} type="text" className='input-box' placeholder='User Name'/>
                  <p className='register-text'>Password</p>
                  <input onChange={(e) => {setPassword(e.target.value)}} type="text" className='input-box' placeholder='Password'/>
                  <button className='register-button'>Sign up</button>
                  <h4>Already have an account? <Link to="/" className='sign-up-link'>Sign in</Link></h4>
                </form>
            </body>
        </div>
    </div>
  )
}

export default RegisterPage
