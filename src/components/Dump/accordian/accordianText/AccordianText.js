import React from 'react'
import './accordiantext.css'

function AccordianText({children,isOpen,...restProps}) {
    
  return (
      
    isOpen ? <div className='accordian-text'{...restProps}>
            {children}
             </div> : null
  )
}

export default AccordianText;