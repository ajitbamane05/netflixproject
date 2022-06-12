import React from 'react';
import './seperator.css'

function Seperator({children,...restProps}) {
  return (
    <div className='seperator' {...restProps}>
        {children}
    </div>
  )
}

export default Seperator;