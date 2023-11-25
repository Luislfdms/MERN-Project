import { React, useState, useEffect} from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Tweet from './Tweet';
import "./TimelineTweet.css";

function TimelineTweet() {
    const [info, setInfo] = useState(null);
    const [username, setUserName] = useState("");
    const [name, setName] = useState("");
    const [id, setId] = useState("");
  
    const page = useSelector((state) => state.user.page);
    const currentUser = useSelector((state) => state.user.currentUser)
    
    const handleUpVote = async (id) => {
        // e.preventDefault();
        console.log(id);
        try {
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
                {info && info.map((tweet) => {
                    return     <div key={tweet._id} className="table-row">
                    {/* <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img> */}
                    <div className="post-container">
                        <h3 style={{margin: "0"}}>Profile Name</h3>
                        <small style={{margin: "0"}}>@{tweet.userID}</small>
                        <h2 className="post-title">{tweet.postTitle}</h2>
                        <p>{}</p>
                        <div className="votes-container">
                        <img onClick={() => {handleUpVote()}} role="button" className='dog-paw-image-up' src="/Images/noun-paw-5940362middle.svg" alt="upvote-paw-logo"></img>
                        <p>{tweet.upvotes}</p>
                        <img onClick={() => {handleDownVote()}} role="button" className='dog-paw-image-down' src="/Images/upsidedown-noun-paw-5940362middle.svg" alt="downvote-paw-logo"></img>
                        <p>{tweet.downvotes}</p>
                        </div>
                    </div>
                </div>
                })}
            </>
            )
                break;
        case 2:
            return (
                <>
                <div className='profile-page-container'>
                    <div className='profile-button-container'>
                        <button className='profile-edit-button'>Edit Profile</button>
                    </div>
                    <div className="profile-page-header">
                    <h1>{username}</h1>
                    <p>@{username}</p>
                    <div className='profile-follow'>
                        <small><b>5</b> Following</small>
                        <small><b>10</b> Followers</small>
                    </div>
                </div>
                </div>
                    {info && info.map((tweet) => {
                        // if (tweet.username == username) {
                        return     <div className="table-row">
                        {/* <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img> */}
                        <div className="post-container">
                            <h3 style={{margin: "0"}}>Profile Name</h3>
                            <small style={{margin: "0"}}>@{tweet.userID}</small>
                            <h2 className="post-title">{tweet.postTitle}</h2>
                            <p>{tweet.postMain}</p>
                            <div className="votes-container">
                            <img onClick={() => {handleUpVote()}} role="button" className='dog-paw-image-up' src="/Images/noun-paw-5940362middle.svg" alt="upvote-paw-logo"></img>
                            <p>{tweet.upvotes}</p>
                            <img onClick={() => {handleDownVote()}} role="button" className='dog-paw-image-down' src="/Images/upsidedown-noun-paw-5940362middle.svg" alt="downvote-paw-logo"></img>
                            <p>{tweet.downvotes}</p>
                            </div>
                        </div>
                    </div>  
                        // }
                    })}
                </>
                )
            break;
            case 3:
                return (
                    <>
                    <div className="profile-page-header">
                    <h1>{username}</h1>
                    <p>@{username}</p>
                    </div>
                        {info && info.map((tweet) => {
                            return     <div className="table-row">
                            {/* <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img> */}
                            <div className="post-container">
                                <h3 style={{margin: "0"}}>Profile Name</h3>
                                <small style={{margin: "0"}}>@{tweet.userID}</small>
                                <h2 className="post-title">{tweet.postTitle}</h2>
                                <p>{tweet.postMain}</p>
                                <div className="votes-container">
                                <img onClick={() => {handleUpVote()}} role="button" className='dog-paw-image-up' src="/Images/noun-paw-5940362middle.svg" alt="upvote-paw-logo"></img>
                                <p>{tweet.upvotes}</p>
                                <img onClick={() => {handleDownVote()}} role="button" className='dog-paw-image-down' src="/Images/upsidedown-noun-paw-5940362middle.svg" alt="downvote-paw-logo"></img>
                                <p>{tweet.downvotes}</p>
                                </div>
                            </div>
                        </div>
                        })}
                    </>
                    )
                break;
            default:
                break;
        }

}

export default TimelineTweet