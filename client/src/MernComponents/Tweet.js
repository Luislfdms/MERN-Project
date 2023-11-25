import {React, useState, useEffect} from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import axios from "axios";
import formatDistance from "date-fns/formatDistance";
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailed } from '../redux/userSlice.js';


function Tweet({tweet, setData, username}) {
    const dispatch = useDispatch();
    // const {currentUser} = useSelector((state) => state.user);
    const [userData, setUserData] = useState();

    // const dateStr = formatDistance(new DataTransfer(tweet.createdAt), new Date());
    

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const user = getState().user.currentUser;
    //             console.log(user);
    //             const findUser = await axios.get('userAPI/user',username);
    //             setUserData(findUser.data);
    //         } catch (err) {
    //             console.log("error", err);
    //         }
    //     }
    //     fetchData();
    // }, []);
    // setUserData(dispatch(getInfo()));
    

    console.log(setData);
    return (
    <div>
            <>
            <div>
                {/* <h3>{userData.username}</h3> */}
                {/* <div>
                    <span>@{setData.username}</span>
                </div> */}
                {/* <h3>{tweet.title}</h3> */}
                <p>{tweet.postMain}</p>
            </div>
            </>
    </div>
  )
}

export default Tweet