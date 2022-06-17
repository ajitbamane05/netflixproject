import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
function Signinbutton(props) {
  return (
    <>
      <div  onClick={props.click}> 
      <Link className='link' to='/signin'> 
        <a className="signin" href="/signin">Sign In</a>
      </Link>
      </div>
    </>
  )
}

export default Signinbutton