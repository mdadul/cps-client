import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import image from '../img/edu1.gif';

export default function Banner() {
  return (
    <Carousel >
      <div>
        <img src={image} alt="edu1" border="0" />
       
      </div>
      <div>
        <img src={image} alt="edu1" border="0" /> 
      </div>
      <div>
        <img src={image} alt="edu1" border="0" />
  
      </div>
      <div>
        <img src={image} alt="edu1" border="0" /> 
       
      </div>

      </Carousel>
  )
}
