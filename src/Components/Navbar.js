import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {

  return (
    <div className="navigation">
      <div className='nav-left-space'>Jon Langkammer</div>
      <span className='nav-link'><Link to="/about" className='nav-links'>About</Link></span>
      <span className='nav-link'><Link to="/home" className='nav-links'>Skills</Link></span>
      <span className='nav-link'><Link to="/projects" className='nav-links'>Projects</Link></span>
      <div className='nav-right-space'></div>
    </div>
  )
}
