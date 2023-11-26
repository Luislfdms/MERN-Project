import { React, useState, useEffect} from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import "./TimelineTweet.css";
import { postId } from '../redux/userSlice.js';
import { useDispatch } from 'react-redux';
import HomeTweet from './HomeTweet.js'
import ProfileTweet from './ProfileTweet.js'
import FollowTweet from './FollowTweet.js'

function TimelineTweet() {
    const [info, setInfo] = useState(null);
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
  
    const page = useSelector((state) => state.user.page);
    const currentUser = useSelector((state) => state.user.currentUser);
    const username = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    
    const handleUpVote = async (e, id) => {
        // e.preventDefault();
        console.log(id);
        try {
            console.log(id);
            const response = await axios.patch("/postAPI/upvote", id);
            console.log("upvote was successful", response);
        } catch (err) {
            console.log("Failed to upvote", err.response.data);
        }
    }
    
    const handleDownVote = async (id) => {
        // e.preventDefault();
        try {
            const response = await axios.post("/postAPI/downvote", id);
            console.log("downvote was successful", response);
        } catch (err) {
            console.log("Failed to downvote", err.response.data);
        }
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const feed = await axios.get('/postAPI/feed');
          setInfo(feed.data);
        //   console.log(feed.data);
        } catch (err) {
          console.log("error", err);
        }
      };
      fetchData();
    },[handleDownVote, handleUpVote]);
    
    
    switch (page) {
        case 1:
            return (
            <>
                <form className='follow-search-bar-form'>
                        <img className='search-icon' src="/Images/noun-search-6312568.svg" alt="search-icon"></img>
                        <input className='follow-search-bar-input' onChange={(e) => {setSearchTerm(e.target.value)}} type="text" placeholder='Search'></input>
                </form>
                {info && info.filter((val) => {
                    if (searchTerm == "") {
                        return val;
                    } else if (val.postTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                }).map((tweet) => {
                    return    ( 
                        <HomeTweet tweet={tweet} key={tweet._id} />
                )
                })}
            </>
            )
                break;
        case 2:
            return (
                <>
                    <div className='profile-page-container'>
                    <div className='profile-button-container'>
                        {/* <button onClick={handleDarkMode} className='profile-edit-button'>Dark Mode</button> */}
                    </div>
                    <div className="profile-page-header">
                    <h1>{username}</h1>
                    <p>@{username}</p>
                    <div className='profile-follow'>
                        {/* <small><b>5</b> Following</small>
                        <small><b>10</b> Followers</small> */}
                    </div>
                </div>
                </div>
                {info && info.map((tweet) => {
                if (tweet.userID == username) {
                    return    ( 
                        <ProfileTweet tweet={tweet} key={tweet._id} />
                )
                }
                })}
                </>
                )
            break;
            case 3:
                return (
                    <>
                        {info && info.map((tweet) => {
                            return  (   
                                <FollowTweet tweet={tweet} key={tweet._id} />
                            )
                        })}
                    </>
                    )
                break;
            default:
                break;
        }

}

export default TimelineTweet