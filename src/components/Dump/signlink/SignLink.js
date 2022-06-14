import React from 'react'
import './signlink.css'

function SignLink({children,...restProps}) {
  return (
    <>
    <a href="./signup" className='sign-link' {...restProps}>{children}</a>
    </>
  )
}

export default SignLink