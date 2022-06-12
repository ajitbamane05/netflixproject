import React from 'react'
import './navbar.css'

function Navbar({children,...restProps}) {
  return (
    <nav {...restProps}>
        {children}
    </nav>
  )
}

export default Navbar