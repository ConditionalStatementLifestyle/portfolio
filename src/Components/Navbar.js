import React from 'react'
import logo from '../hop.png'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Navbar>
      {/* <nav className="navbar"> */}
        {/* <span className="navbar-toggle" id="js-navbar-toggle" onClick={() => this.toggle()}>
          <img alt='' src="https://img.icons8.com/android/24/000000/menu.png"></img>
        </span>
          <Link to="/menu" className='cursor'>
            <div className='nav-icon'><img src={logo} alt=''></img></div>
          </Link>
          <div className='nav-title'>Hop Centricity</div>
        <div >
          <ul className="main-nav" id="js-menu">
            <li>
              <Link onClick={() => this.robot()} to="/home" className='nav-links'>Home</Link>
            </li>
            <li>
              <Link onClick={() => this.robot()} to="/projects" className='nav-links'>Projects</Link>
            </li>
            <li>
              <Link onClick={() => this.robot()} to="/about" className='nav-links'>About</Link>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  )
}


