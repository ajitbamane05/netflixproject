import React from 'react'
import './jumboimage.css'

function Jumboimage({...restProps}) {
  return (
    <img  className='jumbo-image' {...restProps} alt=''/> 
  )
}

export default Jumboimage