import React from 'react';
import posed from 'react-pose';

export const styleMap = {
  about: '12%',
  skills: '45%',
  projects: '78%'
}

export const EvilName = () => <NavName style={nameStyle}>Jon <br/> Langkammer</NavName>

export const languages = [
  'React/Redux', 
  'Ruby on Rails',
  'JavaScript',
  'Cypress.js',
  'Ruby',
  'Django',
  'CSS',
  'HTML',
  'SASS'
]

export const technologies = [
  'Git',
  'Github',
  'Gitlab',
  'Action Cable (Rails Web Sockets)',
  'Web Scraping',
  'Semantic UI',
  'Material UI',
  'React CSS Transition Group',
  'React Router',
  'React Pose',
  'Google OAuth',
  'HTML Canvas'
]

const nameStyle = {
  marginLeft: '5px',
  marginBottom: '10px',
  cursor: 'pointer',
  textAlign: 'center',
  lineHeight: 'calc(15px + 1vw)',
}

const NavName = posed.div({
  hoverable: true,
  pressable: true,
  init: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      scale: {
        type: "spring",
        stiffness: 1000,
        delay: 20
      }
    }
  },
  press: { scale: 0.2 }
});