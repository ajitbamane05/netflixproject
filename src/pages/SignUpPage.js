import React from 'react'
import Headerwrapper from '../components/Dump/header/headerwraper/Headerwrapper'
import Navbar from '../components/Dump/header/navbar/navbar'
import Logo from '../components/Dump/header/netflixlogo'
import Footercomponent from '../components/Dump/Footer/footercomponent/Footercomponent'
import Signupcomponent from '../components/Smart/signupcomponent/Signupcomponent'

function SignUpPage() {
  return (
    <>
    <Headerwrapper>
          <Navbar>
             <Logo/> 
          </Navbar>
           <Signupcomponent/>
          <Footercomponent/>
      </Headerwrapper>
    </>
  )
}

export default SignUpPage