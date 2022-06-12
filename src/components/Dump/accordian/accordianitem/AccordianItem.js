import React from 'react'

function AccordianItem({children,...restProps}) {
    
  return (
    <div className='accordian-item' {...restProps}>{children}</div>
  )
}

export default AccordianItem