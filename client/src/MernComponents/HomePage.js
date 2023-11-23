import React from 'react'
import TableRow from "./TableRow"
import "./HomePage.css";
import QuickFollowers  from './QuickFollowers';


function HomePage() {

  

  return (
    // <div className='background-images' style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>

    <div className="home-container" style={{backgroundImage:'url("/Images/iStock-1310371524 (1).jpg")'}}>
      <div className="favorite-followers-tab">
        <div className='space-div'></div>
        <div className='nav-tab'>
        <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img>
          <button className='nav-buttons'>
            <img className='home-image' src="/Images/noun-home-6302446-FFFFFF (1).svg" alt="home-logo"></img>
            Home
            </button>
          <button className='nav-buttons'>
          <img className='profile-image' src="/Images/noun-profile-854888-FFFFFF.svg" alt="profile-logo"></img>
            Profile
            </button>
          <button className='nav-buttons'>
          <img className='followers-image' src="/Images/noun-community-2082321-FFFFFF.svg" alt="followers-logo"></img>
            Followers
            </button>
        {/* <button className='post-button'>All Followers</button> */}
        <button className='logout-button'>Logout</button>
        </div>
      </div>
      <body className="main-feed">
        <table className="table-feed">
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </table>
      </body>
      <div className="quick-post-feed">
        <h3>What's on your mind?</h3>
        <form className='form-container'>
          <label className='label-container'>
            <input className="post-input" type="text" placeholder='Title' />
            <textarea className="post-input post-body" type="text" placeholder='Post'></textarea>
          </label>
          <button className='post-button'>Post</button>
        </form>
      </div>
    </div>
  )
}

export default HomePage