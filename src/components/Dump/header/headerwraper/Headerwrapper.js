import React from 'react'
import './headerwrapper.css'
function Headerwrapper({children, ...restProps}) {
  return (
    <>
      <header className='header-wraper' {...restProps}>
          <div className='header-background'>
          {children}
          </div>
      </header>
    </>
  )
}

export default Headerwrapper