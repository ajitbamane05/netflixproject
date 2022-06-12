import React from 'react'
import './Featuretitle.css'
function Featuretitle({children,...restProps}) {
  return (
    <div>
    <h1 {...restProps}>
        {children}
    </h1>
    </div>
  )
}

export default Featuretitle