import React from 'react'
import './signinput.css'

function SignInput({...restProps}) {
  return (
    <>
    <input type="text" className='sign-input' {...restProps}/>
    </>
  )
}

export default SignInput