import { React, useState, useEffect} from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import "./ProfileTweet.css";
import "./TimelineTweet.css";

function ProfileTweet({tweet}) {
    const [info, setInfo] = useState(null);
    const [username, setUserName] = useState("trial");
    const [name, setName] = useState("");
    const [id, setId] = useState("");
  
    // const {currentUser} = useSelector((state) => state.user);
    
    const handleUpVote = async (id) => {
        // e.preventDefault();
        console.log(id);
        try {
            const response = await axios.patch("/postAPI/upvote", {id});
            console.log("upvote was successful", response);
        } catch (err) {
            console.log("Failed to upvote", err.response.data);
        }
    }
    
    const handleDownVote = async (id) => {
        // e.preventDefault();
        try {
            const response = await axios.patch("/postAPI/downvote", {id});
            console.log("downvote was successful", response);
        } catch (err) {
            console.log("Failed to downvote", err.response.data);
        }
    }

    const handleDelete = async (id) => {
        try {
            console.log(id);
            console.log({id});
            const response = await axios.delete(`/postAPI/deletePost/${id}`);
            console.log("Delete was successful", response);
        } catch (err) {
            console.log("Failed to Delete", err.response.data);
        }
    }
    
    
    return (
        <div className="timeline-tweet-container">
        <div className="table-row">
            {/* <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img> */}
            <div className="post-container">
                <h3 style={{margin: "0"}}>Profile Name</h3>
                            <img onClick={() => {handleDelete(tweet._id)}} role="button" className='trashcan-image' src="/Images/trash-noun-888071.svg" alt="trashcan-logo"></img>
                <small style={{margin: "0"}}>@{tweet.userID}</small>
                <h2 className="post-title"><b style={{color: "red"}}>{tweet.postTitle}</b></h2>
                <p className="post-main" style={{ maxHeight: "100px", overflowY: "auto" }}>{tweet.postMain}</p>
                <div  className="votes-container">
                <img  onClick={() => {handleUpVote()}} role="button" className='dog-paw-image-up' src="/Images/noun-paw-5940362middle.svg" alt="upvote-paw-logo"></img>
                <p >{tweet.upvotes}</p>
                <img  onClick={() => {handleDownVote()}} role="button" className='dog-paw-image-down' src="/Images/upsidedown-noun-paw-5940362middle.svg" alt="downvote-paw-logo"></img>
                <p >{tweet.downvotes}</p>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default ProfileTweet
