import React from 'react'
import SubscribeWrapper from '../../Subscribewrapper/SubscribeWrapper'
import SubscribeMail from '../../SubscribeMail/SubscribeMail'
import Subuscribebutton from '../subscribebutton'
import { Link } from 'react-router-dom'
import './subscribecomponent.css'

function Subscribecomponent() {
  return (
    <div className='subscribe-component'>
    <h3 className='Subscribe-content'>Ready to watch? Enter your email to create or restart your membership.</h3>
     <SubscribeWrapper>
        <SubscribeMail type="email"  className="subscribe-mail" />
        <Link className='link' to='/signup'>  <Subuscribebutton className="subscribe-button">
                        {"Get Started"}   {">"}
            </Subuscribebutton>
        </Link>
     </SubscribeWrapper>
    </div>
  )
}

export default Subscribecomponent