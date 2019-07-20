import React from 'react'
import { Col, Image } from 'react-bootstrap'

import back0 from '../Pictures/back0.jpg'
import back1 from '../Pictures/back1.jpg'
import jon from '../Pictures/jon.jpg'

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
            <Col xs={6} md={4}>
              <Image src={jon} className='profile-pic' roundedCircle={true} />
            </Col>
            <div className='home-text'>
              Jon Langkammer
            </div><br></br>
            <div className='home-subtext'>
              Full-Stack Web Developer
            </div>
          </div>
        </div>
    )
}