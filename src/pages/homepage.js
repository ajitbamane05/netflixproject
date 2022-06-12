import React from 'react'
import HeaderComponent from '../components/Smart/HeaderComponent'
import Seperator from '../components/Dump/seperator/Seperator'
import Jumbocontent from '../components/Dump/jumbo/Jumbocontent/Jumbocontent'
import AccordianComponent from '../components/Dump/accordian/accordiancomponent/AccordianComponent'
import Footercomponent from '../components/Dump/Footer/footercomponent/Footercomponent'
import Subscribecomponent from '../components/Dump/forms/subscribe/subscribebutton/subscribecomponent/Subscribecomponent'

function Homepage() {
  return (
    <>
       <HeaderComponent/>
       <Seperator/>
       <Jumbocontent/>
       <AccordianComponent/>
       <Subscribecomponent/>
       <Seperator/>
       <Footercomponent/>
    </>
  )
}

export default Homepage