import { React, useState, useEffect} from 'react'
import { start, user, currentUser, page } from '../redux/userSlice.js';
import "./HomePage.css";
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import TimelineTweet from './TimelineTweet';
import { logout } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useSwipeable } from 'react-swipeable';

function HomePage() {
  const [info, setInfo] = useState(null);
  // const [username, setUserName] = useState("");
  const [postMain, setPostMain] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [upvotes, setUpvotes] = useState("");
  const [downvotes, setDownvotes] = useState("");
  const [image, setImage] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const start = useSelector((state) => state.user.start);
  const userID = useSelector((state) => state.user.user);
  const currentUser = useSelector((state) => state.currentUser);


  const handlePost = async (e) => {
    try {
        const response = await axios.post("/postAPI/add", {postTitle, postMain, userID, image, upvotes, downvotes});
        console.log("Post was successful", response);
        setPostMain("");
        setPostTitle("");
    } catch (err) {
        console.log("Failed to post", err.response.data);
    }
};

const handleInputClick = (e) => {
  // Stop the click event from reaching the sidebar
  e.stopPropagation();
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
const handleFollow = () => {
  dispatch(page(3));
}



const handlers = useSwipeable({
  onSwipedRight: () => setSidebarVisible(true),
  preventDefaultTouchmoveEvent: true,
  onSwipedLeft: () => {
    setSidebarVisible(false);
  },
  trackTouch: true,
  trackMouse: false,
});

const toggleSidebar = () => {
  setSidebarVisible(!sidebarVisible);
};

  useEffect(() => {
    const fetchUserData = async () => {
      console.log(user);
      try {
        const currentUser = await axios.get('/userAPI/user', {user});
        dispatch(currentUser(currentUser.data));
        console.log(currentUser.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    fetchUserData();
  },[]);

  return (


    <div className="max-container">
      {!start ? (
        <LoginPage />
      ):(

    <div className="home-container" style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>
        <div
          className="draggable-handle"
          onClick={toggleSidebar}
      ></div>
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
          {/* <button onClick={handleFollow} className='nav-buttons'>
          <img className='followers-image' src="/Images/noun-community-2082321-FFFFFF.svg" alt="followers-logo"></img>
            Followers
            </button> */}
        <button onClick={handleLogout} className='logout-button'>Logout</button>
        </div>
      <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}
            onClick={toggleSidebar}
          >
            <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>
              <div className="blocker" onClick={toggleSidebar}></div>
              <div className="content">
                <button onClick={handleHome} className='nav-buttons'>
                  <img className='home-image' src="/Images/noun-home-6302446-FFFFFF.svg" alt="home-logo"></img>
                  Home
                  </button>
                <button onClick={handleProfile} className='nav-buttons'>
                <img className='profile-image' src="/Images/noun-profile-854888-FFFFFF.svg" alt="profile-logo"></img>
                  Profile
                  </button>
                <button onClick={handleLogout} className='logout-button'>Logout</button>
              </div>
              <div className="quick-post-feed">
                <h3><b style={{color: "red"}}>What's</b> on your mind?</h3>
                <form className='form-container'>
                  <label className='label-container'>
                    <input onChange={(e) => setPostTitle(e.target.value)} onClick={handleInputClick} className="post-input" type="text" placeholder='Title' maxLength="30" value={postTitle} />
                    <textarea onChange={(e) => setPostMain(e.target.value)} onClick={handleInputClick} className="post-input post-body" type="text" placeholder='Post' maxLength="140" value={postMain} ></textarea>
                  </label>
                  <button onClick={handlePost} className='post-button'>Post</button>
                </form>
              </div>
          </div>
        </div>
      <div className="main-feed">
        <div className="table-feed">
          <TimelineTweet />
        </div>
      </div>
      <div className="quick-post-feed1">
        <h3><b style={{color: "red"}}>What's</b> on your mind?</h3>
        <form className='form-container'>
          <label className='label-container'>
            <input onChange={(e) => setPostTitle(e.target.value)} className="post-input" type="text" placeholder='Title' maxLength="30" value={postTitle} />
            <textarea onChange={(e) => setPostMain(e.target.value)} className="post-input post-body" type="text" placeholder='Post' maxLength="140" value={postMain} ></textarea>
          </label>
          <button onClick={handlePost} className='post-button'>Post</button>
        </form>
      </div>
    </div>

      )}
    </div>
  )
}

export default HomePage