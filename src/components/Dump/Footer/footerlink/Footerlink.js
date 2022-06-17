import React from 'react'
import './footerlink.css'

function Footerlink({children,...restProps}) {
  return (
    <>
      <p className='footer-link' {...restProps}>{children}</p>
    </>
  )
}

export default Footerlink