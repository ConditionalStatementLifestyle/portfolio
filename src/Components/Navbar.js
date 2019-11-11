import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styleMap, EvilName } from './constants';

export default function Navigation() {

  const [currentURL, setCurrentURL] = useState(window.location.href);
  const [lineStyle, setLineStyle] = useState({ marginLeft: '12%' });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (currentURL.includes('about')) {
      setStyle('12%');
    } else if (currentURL.includes('skills')) {
      setStyle('45%');
    } else {
      setStyle('78%');
    }
  }, [currentURL])

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
  })

  const updateWidth = () => {
    setWindowWidth(window.innerWidth)
    console.log('width', windowWidth);
  }

  const setStyle = (marginLeft) => {
    setLineStyle({ marginLeft });
  }

  const determineStyle = (link = null) => {
    if (!currentURL.includes(link)) {
      Object.keys(styleMap).forEach(page => {
        if (currentURL.includes(page)) {
          setStyle(styleMap[page]);
        }
      })
    }
  }

  return (
    <div className="navigation">
      {windowWidth > 500 && <div className='nav-left-space'>
        <EvilName />
      </div>}
      <ul>
        <li className='nav-link one'
          onClick={() => setCurrentURL(window.location.href)}
          onMouseEnter={() => setStyle('12%', true)}
          onMouseLeave={() => determineStyle('about')}
        >
          <Link to="/about" className='nav-links' >About</Link>
        </li>
        <li className='nav-link two'
          onClick={() => setCurrentURL(window.location.href)}
          onMouseEnter={() => setStyle('45%', true)}
          onMouseLeave={() => determineStyle('skills')}
        >
          <Link to="/skills" className='nav-links' >Skills</Link>
        </li>
        <li className='nav-link three'
          onClick={() => setCurrentURL(window.location.href)}
          onMouseEnter={() => setStyle('78%', true)}
          onMouseLeave={() => determineStyle('projects')}
        >
          <Link to="/projects" className='nav-links' >Projects</Link>
        </li>
        <hr className='hr' style={lineStyle} />
      </ul>
      {windowWidth > 500 && <div className='nav-right-space'></div>}
    </div>
  )
}
