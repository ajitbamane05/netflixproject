import React from 'react'
import './jumboitem.css'
import Jumbotitle from '../Jumbotitle/Jumbotitle'
import JumboSubheading from '../JumboSubheading/JumboSubheading'
import Jumboimage from '../jumboimage/Jumboimage'


function Jumboitem({title,alignment,subtitle,imageSrc,video,imgAlt,...restProps}) {
  return (
    <div className='jumbo-item' {...restProps}>
      {
        alignment===true &&
        (
          <div className='jumbo-item-content'>
          <Jumbotitle>{title}</Jumbotitle> 
          <JumboSubheading>{subtitle}</JumboSubheading>
        </div>
        )
      }
      {
        alignment===false &&
        (
          <div>
          <Jumboimage src={imageSrc} alt={imgAlt}/>
          </div>
        )
      }
       {
        alignment===false &&
        (
          <div className='jumbo-item-content'>
          <Jumbotitle>{title}</Jumbotitle> 
          <JumboSubheading>{subtitle}</JumboSubheading>
        </div>
        )
      }
        {
        alignment===true &&
        (
          <div>
          <Jumboimage src={imageSrc} alt={imgAlt}/>
          </div>
        )
      }
       
        
      
    </div>
  )
}

export default Jumboitem;