import { useState } from "react";
import "./TableRow.css";
// import "/Images/noun-paw-5940362 (2).svg"
// import

function TableRow() {
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [feed, setFeed] = useState(null);



  const handleUpVote = (e) => {
    setUpvoted(true);
    
  }

  const handleDownVote = (e) => {

  }

  return (
    <div className="table-row">
        {/* <img className='clifford-image' src="/Images/imgonline-com-ua-ReplaceColor-x9TGUbjJLxxRliO4.jpg" alt="clifford-logo"></img> */}
        <div className="post-container">
            <h3 style={{margin: "0"}}>Profile Name</h3>
            <small style={{margin: "0"}}>@Username</small>
            <h2 className="post-title">Theory of relativity</h2>
            <p>What is the theory of relativity and how does it relate to everyones everyday life?</p>
            <div className="votes-container">
            <img onClick={() => {handleUpVote()}} role="button" className='dog-paw-image-up' src="/Images/noun-paw-5940362middle.svg" alt="clifford-logo"></img>
            <p>10</p>
            <img onClick={() => {handleDownVote()}} role="button" className='dog-paw-image-down' src="/Images/upsidedown-noun-paw-5940362middle.svg" alt="clifford-logo"></img>
            <p>5</p>
            </div>
        </div>
    </div>
  )
}

export default TableRow
