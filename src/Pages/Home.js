import React from 'react'

import back0 from '../Pictures/back0.jpg'
import back1 from '../Pictures/back1.jpg'
import { relative } from 'path';

var images = {
  0: `url(${back0})`,
  1: `url(${back1})`
}

var sectionStyle = {
  width: "100%",
  height: "1100px",
  backgroundImage: images[1],
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative'
};

export default function Home() {

    return (
        <div style={ sectionStyle } className='home'>
          <div className='home-text-container'>
            <div className='home-text'>
              About text
            </div>
          </div>
        </div>
    )
}