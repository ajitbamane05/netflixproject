import React from 'react'
import './signincapacha.css'

function SigninCapcha({children,...restProps}) {
  return (
    <p className='signin-capcha'>{children}</p>
  )
}

export default SigninCapcha