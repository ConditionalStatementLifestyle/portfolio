import React, {useEffect} from 'react'

// var sectionStyle = {
//   width: "80%",
//   height: "1100px",
//   // backgroundImage: images[1],
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   position: 'relative'
// };

export default function Home() {

  useEffect(() => {
    window.scrollTo(0,0)
  })

    return (
        <div className='home'>
          <div className='home-text-container'>
            <div className='left-home-container'>
              <div className='skills-title'>
                Languages & Frameworks
              </div>
              <div className='language-list-item'>
                JavaScript
              </div>
              <div className='language-list-item'>
                React
              </div>
              <div className='language-list-item'>
                Ruby
              </div>
              <div className='language-list-item'>
                Ruby on Rails
              </div>
              <div className='language-list-item'>
                HTML
              </div>
              <div className='language-list-item'>
                CSS
              </div>
              <div className='language-list-item'>
                PostgreSQL
              </div>
            </div>
            <div className='right-home-container'>
              <div className='skills-title'>
                Technologies & Libraries 
              </div>
              <div className='language-list-item'>
                Semantic UI
              </div>
              <div className='language-list-item'>
                Action Cable (Web Sockets)
              </div>
              <div className='language-list-item'>
                Chart.js
              </div>
              <div className='language-list-item'>
                React CSS Transition Group
              </div>
              <div className='language-list-item'>
                Web Scraping
              </div>
              <div className='language-list-item'>
                React Router
              </div>
              <div className='language-list-item'>
                React Pose
              </div>
            </div>
          </div>
        </div>
    )
}