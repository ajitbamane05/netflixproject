import React from 'react'
import Footerlink from '../footerlink/Footerlink'
import './footercomponent.css'
function Footercomponent() {
  return (
    <div className='footer-section'>
      <h4 className='care-no'>Questions? Call 000-800-040-1843</h4>
          <div className="footer-wrapper">
            <div className="footer-column">
              <Footerlink>FAQ</Footerlink>
              <Footerlink>Investor Relations</Footerlink>
              <Footerlink>Privacy</Footerlink>
              <Footerlink>Speed Test</Footerlink>  
            </div>
            <div className="footer-column">
              <Footerlink>Help Centre</Footerlink>
              <Footerlink>Jobs</Footerlink>
              <Footerlink>Cookie Preferences</Footerlink>
              <Footerlink>Legal Notices</Footerlink>  
            </div>
            <div className="footer-column">
              <Footerlink>Account</Footerlink>
              <Footerlink>Ways to Watch</Footerlink>
              <Footerlink>Corporate Information</Footerlink>
              <Footerlink>Only on Netflix</Footerlink>  
            </div>
            <div className="footer-column">
              <Footerlink>Media Centre</Footerlink>
              <Footerlink>Terms of Use</Footerlink>
              <Footerlink>Contact Us</Footerlink>
            </div>
          </div>
    </div>
  )
}

export default Footercomponent;