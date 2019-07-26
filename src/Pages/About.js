import React from 'react'
import { Image } from 'react-bootstrap'

import back0 from '../Pictures/back0.jpg'
import back1 from '../Pictures/back1.jpg'

var images = {
  0: `url(${back0})`,
  1: `url(${back1})`,
}

var sectionStyle = {
  width: "100%",
  height: "1100px",
  backgroundImage: images[0],
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative'
};

export default function About() {

    return (
        <div style={ sectionStyle } className='home'>
          <div className='home-text-container'>

          </div>
        </div>
    )
}