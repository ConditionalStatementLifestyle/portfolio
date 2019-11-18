import React from 'react';
import posed from 'react-pose';

export const styleMap = {
  about: '12%',
  tech: '45%',
  projects: '78%'
}

export const EvilName = () => <NavName style={nameStyle}>Jon <br /> Langkammer</NavName>

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
  'HTML Canvas',
  'Heroku',
  'Azure'
]

export const projects = [
  {
    name: 'Hop Centricity',
    frontend: 'React.js',
    backend: 'Ruby on Rails',
    description: 'An interactive beer rating web app, dedicated to IPAs',
    url: 'https://mysterious-reaches-84669.herokuapp.com/login',
    image: 'https://github.com/ConditionalStatementLifestyle/HopCentricity-React/raw/master/src/Pictures/ScreenShot.png',
    imageSize: 'large',
    technologies: 'React Router, Semantic UI, React-Pose, React CSS Transition Group',
  }, {
    name: 'React Pictionary',
    frontend: 'React.js',
    backend: 'Ruby on Rails utilizing Action Cable',
    description: 'Live drawing pictionary game',
    url: 'https://react-pictionary.herokuapp.com/',
    image: 'https://raw.githubusercontent.com/jyang81/pictionary-react/master/react-pictionary-screenshot.png',
    imageSize: 'small',
    technologies: 'Semantic UI, Web Sockets'
  }, {
    name: 'Invest Big',
    frontend: 'Vanilla JavaScript',
    backend: 'Ruby on Rails',
    description: 'Simple compound interest modeling web app',
    url: 'https://secret-mesa-58919.herokuapp.com/',
    image: 'https://github.com/ConditionalStatementLifestyle/InvestmentAnalyzer/raw/master/InvestBig.png',
    imageSize: 'small',
    technologies: 'Chart.js'
  }
]

export const navConfigs = [
  {
    style: '12%',
    name: 'about'
  },
  {
    style: '45%',
    name: 'tech'
  },
  {
    style: '78%',
    name: 'projects'
  },
]

const nameStyle = {
  marginLeft: '5px',
  marginBottom: '5px',
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