import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styleMap, EvilName, navConfigs } from './constants';

export default function Navigation(props) {

  const [currentURL, setCurrentURL] = useState(window.location.href);
  const [lineStyle, setLineStyle] = useState({ marginLeft: '12%' });

  useEffect(() => {
    if (currentURL.includes('about')) {
      setStyle('12%');
    } else if (currentURL.includes('tech')) {
      setStyle('45%');
    } else {
      setStyle('78%');
    }
  }, [currentURL])

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

  const { windowWidth } = props;

  return (
    <div className="navigation">
      {windowWidth > 500 && <div className='nav-left-space'>
        <EvilName />
      </div>}
      <ul>
        {navConfigs.map(navItem => {
          const { style, name } = navItem;
          return (
            <li key={name} className='nav-link'
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
      {windowWidth > 500 && <div className='nav-right-space'></div>}
    </div>
  )
}
