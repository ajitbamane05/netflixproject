import React from 'react'
import './jumbocontent.css'
import Jumboitem from '../Jumboitems/Jumboitem'
import Seperator from '../../seperator/Seperator';

function Jumbocontent() {
    const data =[
        {
            'title':'Enjoy on your TV.',
            'subtitle':'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            'imgAlt':'',
            'imageSrc' : 'images/homepage/tv.png'
    
        },
        {
            'title':'Download your shows to watch offline.',
            'subtitle':'Save your favourites easily and always have something to watch.',
            'imgAlt':'',
            'imageSrc':'images/homepage/mobile.jpg'
        },
        {
            'title':'Watch everywhere.',
            'subtitle':'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            'imgAlt':'',
            'imageSrc':'../../../../images/homepage/device.png'
        },
        {
             'title':'Create profiles for children.',
             'subtitle':'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
             'imgAlt':'',
             'imageSrc':'../../../../images/homepage/kidsValueProp.png'    
        }
    ];
  return (
      <div className='jumbo-content'>
      { 
         data.map( (item,index) => (
         <>
         <Jumboitem alignment={index%2===0} title={item.title} subtitle={item.subtitle} imgAlt={item.imgAlt} imageSrc={item.imageSrc} />
         <Seperator/>
         </>
         ))
        
      } 
      </div>
      )
}    

export default Jumbocontent;