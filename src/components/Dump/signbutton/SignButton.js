import React from 'react'
import './signbutton.css'
function SignButton({children,...restProps}) {
  return (
    <>
    <span className="sign-button" {...restProps}>
        {children}
    </span>
    </>
  )
}

export default SignButton