import React from 'react'
import './jumbotitle.css'
function Jumbotitle({children,...restProps}) {
  return (
    <h1 className='jumbo-title' {...restProps}>{children}</h1>
  )
}

export default Jumbotitle;