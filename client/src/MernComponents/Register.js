import React from 'react'
import RegisterName from "./RegisterName";
import RegisterUserName from "./RegisterUserName";

function Register() {
  return (
    <div>
        <RegisterName />
        {/* Gotta add a onClick between the two so after the next button
        is pressed, it goes onto the username, email, and password screen without
        changing the entire page. */}
        {/* <RegisterUserName />  */}
    </div>
  )
}

export default Register