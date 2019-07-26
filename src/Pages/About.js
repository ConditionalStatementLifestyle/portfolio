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
  position: 'absolute'
};

export default function About() {

    return (
        <div style={ sectionStyle } className='home'>
            <div className='about'>
                Hi, my name is Jon and I'm a former electrical engineer with experience in the automation industry. 
                After receiving my bachelor's degree in electrical engineering from the University of Minnesota, 
                I took a job at a mid-size areospace supplier in Mukilteo, WA. During my tenure there, I was lucky 
                enough to serve as lead electrical engineer on two medium size projects. One of which was a winglet boring
                machine for the Boeing 777X. By far this was the most far reaching professional project I've ever been a part of, 
                considering that every 777X wing will be touched by that machine. 
            </div>
            <div className='about'>
                After about 2 years there, I felt a desire to write more code, so I found a job back in my home town
                as a controls engineer in the industrial automation realm. Although I was able to write some machine code and 
                work with touch screen software layouts, I realized that what I was really interested in was cutting edge, 
                user centric software, like the kind each of us use on a daily basis. I wanted to make applications for phones
                or computers. Life is short, so I decided to enroll in Flatiron School's web development immersive program in Seattle
                as a full time student. 
            </div>
            <div className='about'>
                Now I'm looking to combine my newly found coding skills with my professional engineering experiences in a position as 
                a software engineer. 
            </div>
        </div>
    )
}