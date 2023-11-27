import { React, useState, useEffect} from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./HomeTweet.css";

function HomeTweet({tweet}) {
    const [info, setInfo] = useState(null);
    const [username, setUserName] = useState("trial");
    const [name, setName] = useState("");
    const [id, setId] = useState("");
  
    // const {currentUser} = useSelector((state) => state.user);
    
    const handleUpVote = async (id) => {
        try {
            const response = await axios.patch("/postAPI/upvote", {id});
            console.log("upvote was successful", response);
        } catch (err) {
            console.log("Failed to upvote", err.response.data);
        }
    }
    
    const handleDownVote = async (id) => {
        try {
            const response = await axios.patch("/postAPI/downvote", {id});
            console.log("downvote was successful", response);
        } catch (err) {
            console.log("Failed to downvote", err.response.data);
        }
    }    

    
    
    return (
        <div className="timeline-tweet-container">
            <div className="table-row">
            <div className="post-container">
                <div className="name-delete-container">
                    <h3 className="profile-name-h3" style={{margin: "0"}}>{tweet.userID}</h3>
                </div>
                <small className="user-name-small" style={{margin: "0"}}>@{tweet.userID}</small>
                <h2 className="post-title"><b style={{color: "red"}}>{tweet.postTitle}</b></h2>
                <p className="post-main" style={{ maxHeight: "80px", overflowY: "auto", margin:"0" }}>{tweet.postMain}</p>
                <div className="votes-container">
                <img onClick={() => {handleUpVote(tweet._id)}} role="button" className='dog-paw-image-up' src="/Images/noun-paw-5940362middle.svg" alt="upvote-paw-logo"></img>
                <p>{tweet.upvotes}</p>
                <img onClick={() => {handleDownVote(tweet._id)}} role="button" className='dog-paw-image-down' src="/Images/upsidedown-noun-paw-5940362middle.svg" alt="downvote-paw-logo"></img>
                <p>{tweet.downvotes}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeTweet
