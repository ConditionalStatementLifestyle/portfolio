import React, { useEffect } from 'react';
import Page from '../Components/Page';
import { languages, technologies } from '../Components/constants';

export default function Tech(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Page background="linear-gradient(0deg, #FFFFFF  0%, #BCBCBC 100%)">
      <div className='home-text-container'>
        <div className='skills-title'>
          Languages & Frameworks
          </div>
        {languages.map(language => {
          return (
            <div className='language-list-item'>
              {language}
            </div>
          )
        })}
        <hr className='hr-page-long' />
        <div className='skills-title'>
          Technologies & Libraries
            </div>
        {technologies.map(technology => {
          return (
            <div className='technology-list-item'>
              {technology}
            </div>
          )
        })}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Page>
  )
}