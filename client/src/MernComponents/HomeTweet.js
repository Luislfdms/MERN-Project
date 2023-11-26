import { React, useState, useEffect} from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import "./HomeTweet.css";

function HomeTweet({tweet}) {
    const [info, setInfo] = useState(null);
    const [username, setUserName] = useState("trial");
    const [name, setName] = useState("");
    const [id, setId] = useState("");
  
    // const {currentUser} = useSelector((state) => state.user);
    
    const handleUpVote = async (id) => {
        // e.preventDefault();
        // console.log(id);
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

    
    
    return (
        <>
                    <div className="table-row">
                    {/* <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img> */}
                    <div className="post-container">
                        <div className="name-delete-container">
                            <h3 style={{margin: "0"}}>Profile Name</h3>
                        </div>
                        <small style={{margin: "0"}}>@{tweet.userID}</small>
                        <h2 className="post-title"><b style={{color: "red"}}>{tweet.postTitle}</b></h2>
                        <p>{tweet.postMain}</p>
                        <div className="votes-container">
                        <img onClick={() => {handleUpVote(tweet._id)}} role="button" className='dog-paw-image-up' src="/Images/noun-paw-5940362middle.svg" alt="upvote-paw-logo"></img>
                        <p>{tweet.upvotes}</p>
                        <img onClick={() => {handleDownVote(tweet._id)}} role="button" className='dog-paw-image-down' src="/Images/upsidedown-noun-paw-5940362middle.svg" alt="downvote-paw-logo"></img>
                        <p>{tweet.downvotes}</p>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default HomeTweet
