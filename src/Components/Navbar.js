import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {

  return (
    <div className="navigation">
      <div className='nav-left-space'>Jon Langkammer</div>
      <ul>
        <li className='nav-link one'><Link to="/about" className='nav-links'>About</Link></li>
        <li className='nav-link two'><Link to="/skills" className='nav-links'>Skills</Link></li>
        <li className='nav-link three'><Link to="/projects" className='nav-links'>Projects</Link></li>
        <hr className='hr'/>
      </ul>
      <div className='nav-right-space'></div>
    </div>
  )
}
