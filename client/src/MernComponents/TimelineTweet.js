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
    const [descDisplay, setDescDisplay] = useState(true);
    const [description, setDescription] = useState("");
    const [userData, setUserData] = useState("");
  
    const page = useSelector((state) => state.user.page);
    const currentUser = useSelector((state) => state.user.currentUser);
    const username = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    
    const handleUpVote = async (e, id) => {
        e.preventDefault();
        try {
            const response = await axios.patch("/postAPI/upvote", id);
            console.log("upvote was successful", response);
        } catch (err) {
            console.log("Failed to upvote", err.response.data);
        }
    }
    
    const handleDownVote = async (e, id) => {
        e.preventDefault();
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
        } catch (err) {
          console.log("error", err);
        }
      };

      fetchData();
    },[handleDownVote, handleUpVote]);
    
    const handleInputClick = (e) => {
        // Stop the click event from reaching the sidebar
        e.stopPropagation();
    };

    useEffect(() => {
        const getUser = async() => {
            try {
                const res = await axios.get(`/userAPI/user/${username}`);
                setUserData(res.data);
                console.log("getting user was successful", res);
            } catch (err) {
                console.log("Failed to get user", err);
            }
        }
        getUser();
    },[userData])
    
    const handleDescription = () => {
        if (descDisplay) {
            setDescDisplay(false);
        } else {
            setDescDisplay(true);
        }
    }

    const handleSendDescription = async () => {
        try {
            const res = await axios.patch("/userAPI/description", {username, description});
            console.log("sending desc was successful", res);
        } catch (err) {
            console.log("Failed to send desc", err);
        }
    }

    
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
                    } else if (val.postTitle.toLowerCase().includes(searchTerm.toLowerCase()) || val.userID.toLowerCase().includes(searchTerm.toLowerCase())) {
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
                    </div>
                    <div className="profile-page-header">
                    <h1>{username}</h1>
                    <p>@{username}</p>
                    <>
                    {descDisplay? (
                        <div className="descript-desc-container">
                        <p className="description-text">{userData.description}</p>
                        <button onClick={handleDescription} className="description-button">Add Description</button>
                        </div>
                    ) : (
                    <form className='descript-form-container'>
                        <label className='description-label-container'>
                            <textarea onChange={(e) => setDescription(e.target.value)} onClick={handleInputClick} className="description-post-input" type="text" placeholder='Description' maxLength="140" value={description} ></textarea>
                        </label>
                        <button onClick={handleSendDescription} className='description-button'>Submit</button>
                        <button onClick={handleDescription} className='description-button'>Cancel</button>
                    </form>
                    )}
                    </>
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