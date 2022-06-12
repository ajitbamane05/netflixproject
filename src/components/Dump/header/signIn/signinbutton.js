import React from 'react'
import './signup.css'
function Signinbutton(props) {
  return (
    <>
      <div  onClick={props.click}> 
        <a className="signin" href="/signin">Sign In</a>
      </div>
    </>
  )
}

export default Signinbutton