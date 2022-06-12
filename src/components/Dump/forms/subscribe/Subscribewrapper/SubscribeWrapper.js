import React from 'react'
import './subscribewrapper.css'

function SubscribeWrapper({children,...restProps}) {
  return (
    <div  className="subscribe-wrapper" {...restProps}>
        {children}
    </div>
  )
}

export default SubscribeWrapper;