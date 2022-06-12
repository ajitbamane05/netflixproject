import React from 'react'
import './accordiantitle.css'

function AccordianTitle({children,isOpen,index,handleClick,...restProps}) {
    
  return (
    <div className='accordian-title' {...restProps} onClick={()=>handleClick()}>
      {children}
      {
        isOpen===true && (
          <span className='cross'>X</span>
        ) 
      }
       {
        isOpen===false && (
          <span className='plus'>+</span>
        )
      }
    </div>
  )
}

export default AccordianTitle