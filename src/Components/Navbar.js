import React from 'react'
import logo from '../hop.png'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  toggle = () => {
    let mainNav = document.getElementById("js-menu");
    mainNav.classList.toggle("active");
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <span className="navbar-toggle" id="js-navbar-toggle" onClick={() => this.toggle()}>
          <img alt='' src="https://img.icons8.com/android/24/000000/menu.png"></img>
          </span>
            <Link to="/menu" className='cursor'>
              <div className='nav-icon'><img src={logo} alt=''></img></div>
            </Link>
            <div className='nav-title'>Hop Centricity</div>
          <div >
            <ul className="main-nav" id="js-menu">
              <li>
                <Link onClick={() => this.robot()} to="/menu" className='nav-links'>Menu</Link>
              </li>
              <li>
                <Link onClick={() => this.robot()} to="/search" className='nav-links'>Search</Link>
              </li>
              <li>
                <Link onClick={() => this.robot()} to="/profile" className='nav-links'>Profile</Link>
              </li>
              <li>
                <Link to="/login" className="nav-links" onClick={() => this.props.handleLogout()}>Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
