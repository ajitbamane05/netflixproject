import React from 'react'
import './JumboSubheading.css'

function JumboSubheading({children,...restProps}) {
  return (
    <h2 className='jumbo-subheading'{...restProps}>{children}</h2>
  )
}

export default JumboSubheading;