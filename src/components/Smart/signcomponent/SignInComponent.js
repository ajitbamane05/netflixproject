import React from 'react'
import SignTitle from '../../Dump/signtitle/SignTitle'
import SignInput from '../../Dump/signinput/SignInput'
import SignButton from '../../Dump/signbutton/SignButton'
import SignText from '../../Dump/signtext/SignText'
import SignLink from '../../Dump/signlink/SignLink'
import SigninCapcha from '../../Dump/signincapcha/SigninCapcha'
import './signincomponent.css'
import {Link} from 'react-router-dom'

function SignInComponent({children,...restProps}) {
  return (
    <>
    <div className='signin-wrapper' {...restProps}>
      <form action="" className='signin-form-base'>
          <SignTitle>Sign In</SignTitle>
          <SignInput type='text'
             placeholder='Email address' />
          <SignInput type='password'
             placeholder='password'
             autoComplete='off'/>
          <SignButton> Sign In</SignButton>
          <SignText>New to Netflix? <SignLink > <Link className='link' to='/signup'>Sign up  now.</Link></SignLink></SignText>
          <SigninCapcha>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</SigninCapcha>
       </form>
    </div>
    </> 
  )
}

export default SignInComponent