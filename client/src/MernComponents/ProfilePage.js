// import { React, useState, useEffect} from 'react'
// import TableRow from "./TableRow"
// import "./HomePage.css";
// import axios from "axios";
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import LoginPage from './LoginPage';
// import UserTweet from "./UserTweet";
// import RegisterPage from './RegisterPage';
// import { Link } from "react-router-dom";
// import {Routes, Route} from "react-router-dom";
// import ProfilePage from './ProfilePage';
// import { logout } from '../redux/userSlice';
// import { useDispatch } from 'react-redux';





// function HomePage() {
//   const [info, setInfo] = useState(null);
//   const [username, setUserName] = useState("trial");
//   const [name, setName] = useState("");
//   const [title, setTitle] = useState("");
//   const [post, setPost] = useState("");
//   const [image, setImage] = useState(null);
//   const [upvote, setUpVote] = useState("0");
//   const [downvote, setDownVote] = useState("0");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();


//   const start = useSelector((state) => state.user.start);
//   const currentUser = useSelector((state) => state.user);

//   const handlePost = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await axios.post("/postAPI/post", {title, post, username, image, upvote, downvote});
//         console.log("Post was successful", response);
//     } catch (err) {
//         console.log("Failed to post", err.response.data);
//     }
// };

// const handleLogout = (e) => {
//   e.preventDefault();
//   dispatch(logout());
//   navigate('/');
// }
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const feed = await axios.get('/postAPI/feed');
//         setInfo(feed.data);
//         console.log(feed.data);
//       } catch (err) {
//         console.log("error", err);
//       }
//     };
//     fetchData();
//   },[]);




//   return (
//     // <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>

//     <>
//       {!start ? (
//         <LoginPage />
//       ):(

//     <div className="home-container" style={{backgroundImage:'url("/Images/iStock-1310371524.jpg")'}}>
//       <div className="favorite-followers-tab">
//         <div className='space-div'></div>
//         <div className='nav-tab'>
//         <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>
//           <Link to="/home"><button className='nav-buttons'>
//             <img className='home-image' src="/Images/noun-home-6302446-FFFFFF.svg" alt="home-logo"></img>
//             Home
//             </button></Link>
//           <Link to="/profile"><button className='nav-buttons'>
//           <img className='profile-image' src="/Images/noun-profile-854888-FFFFFF.svg" alt="profile-logo"></img>
//             Profile
//             </button></Link>
//           <Link to="/followers"><button className='nav-buttons'>
//           <img className='followers-image' src="/Images/noun-community-2082321-FFFFFF.svg" alt="followers-logo"></img>
//             Followers
//             </button></Link>
//         {/* <button className='post-button'>All Followers</button> */}
//         <button onClick={handleLogout} className='logout-button'>Logout</button>
//         </div>
//       </div>
//       <div className="main-feed">
//         <div className="table-feed">
//           <UserTweet />
//         </div>
//       </div>
//       <div className="quick-post-feed">
//         <h3>What's on your mind?</h3>
//         <form className='form-container'>
//           <label className='label-container'>
//             <input onChange={(e) => setTitle(e.target.value)} className="post-input" type="text" placeholder='Title' />
//             <textarea onChange={(e) => setPost(e.target.value)} className="post-input post-body" type="text" placeholder='Post'></textarea>
//           </label>
//           <button onClick={handlePost} className='post-button'>Post</button>
//         </form>
//       </div>
//     </div>

//       )}
//     </>
//   )
// }

// export default HomePage