import React from 'react'

import back0 from '../Pictures/back0.jpg'
import back1 from '../Pictures/back1.jpg'

var images = {
  0: `url(${back0})`,
  1: `url(${back1})`,
}

var sectionStyle = {
  width: "100%",
  height: "1400px",
  backgroundImage: images[0],
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
//   position: 'absolute'
};

export default function About() {

    return (
        <div style={ sectionStyle } className='home'>
            <div className='about-paragraph'>
                Hi, my name is Jon and I'm a former electrical engineer with experience in the automation industry. 
                After receiving my bachelor's degree in electrical engineering from the University of Minnesota, 
                I took a job at a mid-size areospace supplier in Mukilteo, WA. During my tenure there, I was lucky 
                enough to serve as lead electrical engineer on two medium size projects. One of which was a winglet boring
                machine for the Boeing 777X. By far this was the most far reaching professional project I've ever been a part of, 
                considering that every 777X wing will be touched by that machine. 
            </div>
            <div className='about-paragraph'>
                After about 2 years there, I felt a desire to write more code, so I found a job back in my home town
                as a controls engineer in the industrial automation realm. Although I was able to write some machine code and 
                work with touch screen software layouts, I realized that what I was really interested in was cutting edge, 
                user centric software, like the kind each of us use on a daily basis. I wanted to make applications for phones
                or computers. Life is short, so I decided to enroll in Flatiron School's web development immersive program in Seattle
                as a full time student. 
            </div>
            <div className='about-paragraph'>
                I am grateful for the experience I was able to be a part of at Flatiron as I had a ton of fun 
                learning some of the relavent frontend and backend technologies in use today. Now that I've completed the course,
                I'm looking to combine my newly found coding skills with my professional engineering experiences in a position as 
                a software engineer. 
            </div>
            <div className='about-paragraph'>
                Outside of my professional endeavors, I am an avid outdoors person who loves hiking in the Cascades or Olympics, snowboarding 
                at Whistler or Steven's Pass, biking up some of Seattle's treacherous hills, playing tennis or table tennis, or playing frisbee. 
                Besides that, I am a music lover and musician and I thoroughly enjoy playing N64 games with others or playing a nice round of Halo 2. 
            </div>
        </div>
    )
}