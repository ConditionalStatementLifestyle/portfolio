import React from 'react'

import back0 from '../Pictures/back0.jpg'
import back1 from '../Pictures/back1.jpg'
import jon from '../Pictures/jon2.jpg'

var images = {
  0: `url(${back0})`,
  1: `url(${back1})`,
  2: `url(${jon})`
}

var sectionStyle = {
  width: "80%",
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
            <div className='left-home-container'>
              Languages & Frameworks
              <div className='language-list-item'>
                JavaScript
              </div>
              <div className='language-list-item'>
                React
              </div>
              <div className='language-list-item'>
                Ruby
              </div>
              <div className='language-list-item'>
                Ruby on Rails
              </div>
              <div className='language-list-item'>
                HTML
              </div>
              <div className='language-list-item'>
                CSS
              </div>
            </div>
            <div className='right-home-container'>
              Technologies & Libraries 
              <div className='language-list-item'>
                Semantic UI
              </div>
              <div className='language-list-item'>
                Action Cable (Web Sockets)
              </div>
              <div className='language-list-item'>
                Chart.js
              </div>
              <div className='language-list-item'>
                React CSS Transition Group
              </div>
              <div className='language-list-item'>
                Web Scraping
              </div>
              <div className='language-list-item'>
                React Router
              </div>
              <div className='language-list-item'>
                React Pose
              </div>
            </div>
          </div>
        </div>
    )
}