import React from 'react'
import "./FollowTweet.css"
import "./TimelineTweet.css";

function FollowTweet({tweet}) {
  return (
    <div className="timeline-tweet-container">
      <div className="table-row">
      {/* <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img> */}
        <div className="follow-container">
          <div className='follow-name-container'>
          <h3 style={{margin: "0"}}>Profile Name</h3>
          <small style={{margin: "0"}}>@{tweet.userID}</small>
          </div>
            <h3>Following</h3>
        </div>
      </div>
    </div>
  )
}

export default FollowTweet