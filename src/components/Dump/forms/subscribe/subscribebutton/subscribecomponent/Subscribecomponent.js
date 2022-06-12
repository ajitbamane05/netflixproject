import React from 'react'
import SubscribeWrapper from '../../Subscribewrapper/SubscribeWrapper'
import SubscribeMail from '../../SubscribeMail/SubscribeMail'
import Subuscribebutton from '../subscribebutton'
import './subscribecomponent.css'

function Subscribecomponent() {
  return (
    <div className='subscribe-component'>
    <h3 className='Subscribe-content'>Ready to watch? Enter your email to create or restart your membership.</h3>
     <SubscribeWrapper>
        <SubscribeMail type="email"  className="subscribe-mail" />
            <Subuscribebutton className="subscribe-button">
                        {"Get Started"}   {">"}
            </Subuscribebutton>
     </SubscribeWrapper>
    </div>
  )
}

export default Subscribecomponent