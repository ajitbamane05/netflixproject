import React from 'react'
import './featuretext.css'

function Featuretext({children,...restProps}) {
  return (
    <h3 className='feature-text'{...restProps}>{children}</h3>
  )
}

export default Featuretext