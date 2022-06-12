import React from 'react'
import './Featurewrapper.css'

function Featurewrapper({children,...restProps}) {
  return (
    <>
    <div {...restProps}>
        {children}
    </div>
    </>
  )
}

export default Featurewrapper