import React from 'react'
import './subscribemail.css'

function SubscribeMail({...restProps}) {
  return (
  
      <input className='subscribe-mail' type="text" placeholder='Email address' {...restProps}/>
   
  )
}

export default SubscribeMail;