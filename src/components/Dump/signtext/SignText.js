import React from 'react'
import './signtext.css'

function SignText({children,...restProps}) {
  return (
    <p className='sign-text'>
        {children}
    </p>
  )
}

export default SignText