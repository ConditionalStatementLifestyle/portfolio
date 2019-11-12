import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styleMap, EvilName, navConfigs } from './constants';

export default function Navigation() {

  const [currentURL, setCurrentURL] = useState(window.location.href);
  const [lineStyle, setLineStyle] = useState({ marginLeft: '12%' });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (currentURL.includes('about')) {
      setStyle('12%');
    } else if (currentURL.includes('tech')) {
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
        {navConfigs.map(navItem => {
          const { style, name } = navItem;
          return (
            <li className='nav-link'
              onClick={() => setCurrentURL(window.location.href)}
              onMouseEnter={() => setStyle(style, true)}
              onMouseLeave={() => determineStyle(name)}
            >
              <Link to={`/${name}`} className='nav-links' >{name}</Link>
            </li>
          )
        })}
        <hr className='hr' style={lineStyle} />
      </ul>
      {windowWidth >
        500 && <div className='nav-right-space'></div>}
    </div>
  )
}
