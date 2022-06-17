import React from 'react'
import Headerwrapper from '../components/Dump/header/headerwraper/Headerwrapper'
import Navbar from '../components/Dump/header/navbar/navbar'
import Logo from '../components/Dump/header/netflixlogo'
import SignInComponent from '../components/Smart/signcomponent/SignInComponent'
import Footercomponent from '../components/Dump/Footer/footercomponent/Footercomponent'
import { Link } from 'react-router-dom'

function Signpage() {
  return (
    <>
      <Headerwrapper>
          <Navbar>
          <Link className='link' to='/'>  <Logo/> </Link>
          </Navbar>
          <SignInComponent/>
          <Footercomponent/>
      </Headerwrapper>
    </>
  )
}

export default Signpage