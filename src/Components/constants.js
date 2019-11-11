import React from 'react';
import posed from 'react-pose';

export const styleMap = {
  about: '12%',
  skills: '45%',
  projects: '78%'
}

export const EvilName = () => <NavName style={nameStyle}>Jon Langkammer</NavName>

const nameStyle = {marginLeft: '25px', cursor: 'pointer'}

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