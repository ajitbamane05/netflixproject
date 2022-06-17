import React from 'react'
import './signin.css'
import { Link } from 'react-router-dom'
function Signinbutton(props) {
  return (
    <>
      <div  onClick={props.click}> 
      <Link className='link' to='/signin'> 
        <p className="signin" >Sign In</p>
      </Link>
      </div>
    </>
  )
}

export default Signinbutton