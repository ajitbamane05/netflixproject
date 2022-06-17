import React from 'react'
import './signlink.css'

function SignLink({children,...restProps}) {
  return (
    <>
    <span className='sign-link' {...restProps}>{children}</span>
    </>
  )
}

export default SignLink