import React from 'react'
import './signbutton.css'
function SignButton({children,...restProps}) {
  return (
    <>
    <button className="sign-button" {...restProps}>
        {children}
    </button>
    </>
  )
}

export default SignButton