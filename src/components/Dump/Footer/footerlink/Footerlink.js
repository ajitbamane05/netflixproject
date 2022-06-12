import React from 'react'
import './footerlink.css'

function Footerlink({children,...restProps}) {
  return (
    <>
      <a className='footer-link' href="/faq" {...restProps}>{children}</a>
    </>
  )
}

export default Footerlink