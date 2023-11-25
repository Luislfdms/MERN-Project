import { React, useState, useEffect} from 'react'
import { start, user, currentUser, page } from '../redux/userSlice.js';
import "./HomePage.css";
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import TimelineTweet from './TimelineTweet';
import RegisterPage from './RegisterPage';
import { Link } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import ProfilePage from './ProfilePage';
import { logout } from '../redux/userSlice';
import { useDispatch } from 'react-redux';





function HomePage() {
  const [info, setInfo] = useState(null);
  const [username, setUserName] = useState("lulu");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);
  const [upvote, setUpVote] = useState("0");
  const [downvote, setDownVote] = useState("0");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const start = useSelector((state) => state.user.start);
  const user = useSelector((state) => state.user.user);
  // const currentUser = useSelector((state) => state.currentUser);


  const handlePost = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("/postAPI/add", {title, post, username, image, upvote, downvote});
        console.log("Post was successful", response);
    } catch (err) {
        console.log("Failed to post", err.response.data);
    }
};

const handleLogout = (e) => {
  e.preventDefault();
  dispatch(logout());
  navigate('/');
}

const handleHome = () => {
  dispatch(page(1));
}
const handleProfile = () => {
  dispatch(page(2));
}
  useEffect(() => {
    const fetchUserData = async () => {
      console.log(user);
      try {
        const currentUser = await axios.get('/userAPI/user', {username});
        dispatch(currentUser(currentUser.data));
        console.log(currentUser.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    fetchUserData();
  },[]);




  return (
    // <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>

    <>
      {!start ? (
        <LoginPage />
      ):(

    <div className="home-container" style={{backgroundImage:'url("/Images/iStock-1310371524.jpg")'}}>
      <div className="favorite-followers-tab">
        <div className='space-div'></div>
        <div className='nav-tab'>
        <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>
          <button onClick={handleHome} className='nav-buttons'>
            <img className='home-image' src="/Images/noun-home-6302446-FFFFFF.svg" alt="home-logo"></img>
            Home
            </button>
          <button onClick={handleProfile} className='nav-buttons'>
          <img className='profile-image' src="/Images/noun-profile-854888-FFFFFF.svg" alt="profile-logo"></img>
            Profile
            </button>
          <button onClick={handleProfile} className='nav-buttons'>
          <img className='followers-image' src="/Images/noun-community-2082321-FFFFFF.svg" alt="followers-logo"></img>
            Followers
            </button>
        {/* <button className='post-button'>All Followers</button> */}
        <button onClick={handleLogout} className='logout-button'>Logout</button>
        </div>
      </div>
      <div className="main-feed">
        <div className="table-feed">
          <TimelineTweet />
        </div>
      </div>
      <div className="quick-post-feed">
        <h3>What's on your mind?</h3>
        <form className='form-container'>
          <label className='label-container'>
            <input onChange={(e) => setTitle(e.target.value)} className="post-input" type="text" placeholder='Title' />
            <textarea onChange={(e) => setPost(e.target.value)} className="post-input post-body" type="text" placeholder='Post'></textarea>
          </label>
          <button onClick={handlePost} className='post-button'>Post</button>
        </form>
      </div>
    </div>

      )}
    </>
  )
}

export default HomePage