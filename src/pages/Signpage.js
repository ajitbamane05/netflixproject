import React from 'react'
import Headerwrapper from '../components/Dump/header/headerwraper/Headerwrapper'
import Navbar from '../components/Dump/header/navbar/navbar'
import Logo from '../components/Dump/header/netflixlogo'
import SignInComponent from '../components/Smart/signcomponent/SignInComponent'
import Footercomponent from '../components/Dump/Footer/footercomponent/Footercomponent'

function Signpage() {
  return (
    <>
      <Headerwrapper>
          <Navbar>
             <Logo/> 
          </Navbar>
          <SignInComponent/>
          <Footercomponent/>
      </Headerwrapper>
    </>
  )
}

export default Signpage