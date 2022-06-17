import React from 'react'
import Headerwrapper from '../components/Dump/header/headerwraper/Headerwrapper'
import Navbar from '../components/Dump/header/navbar/navbar'
import Logo from '../components/Dump/header/netflixlogo'
import Footercomponent from '../components/Dump/Footer/footercomponent/Footercomponent'
import Signupcomponent from '../components/Smart/signupcomponent/Signupcomponent'
import { Link } from 'react-router-dom'

function SignUpPage() {
  return (
    <>
    <Headerwrapper>
          <Navbar>
          <Link className='link' to='/'> <Logo/> </Link>
          </Navbar>
           <Signupcomponent/>
          <Footercomponent/>
      </Headerwrapper>
    </>
  )
}

export default SignUpPage