import React from 'react'
import SignTitle from '../../Dump/signtitle/SignTitle'
import SignInput from '../../Dump/signinput/SignInput'
import SignButton from '../../Dump/signbutton/SignButton'
import SignText from '../../Dump/signtext/SignText'
import SignLink from '../../Dump/signlink/SignLink'
import SigninCapcha from '../../Dump/signincapcha/SigninCapcha'
import './signupcomponent.css'
import {Link} from 'react-router-dom'

function Signupcomponent({...restProps}) {
  return (
    <>
     <div className='signin-wrapper' {...restProps}>
      <form action="" className='signin-form-base'>
          <SignTitle>Sign up</SignTitle>
          <SignInput type='text'
             placeholder='First name' />
             <SignInput type='text'
             placeholder='Last name' />
          <SignInput type='text'
             placeholder='Email address' />
          <SignInput type='password'
             placeholder='password'
             autoComplete='off'/>
          <SignButton> Sign up</SignButton>
          <SignText>Already have a account ? <SignLink > <Link className='link' to='/signin'>Sign in  now.</Link></SignLink></SignText>
          <SigninCapcha>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</SigninCapcha>
       </form>
    </div>
    </>
  )
}

export default Signupcomponent