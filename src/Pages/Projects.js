import React, { useEffect } from 'react';
import ProjectModal from '../Components/ProjectModal';
import { Image } from 'semantic-ui-react';
import Page from '../Components/Page';

const projectsObject = [
    {
        name: 'Hop Centricity',
        frontend: 'React.js',
        backend: 'Ruby on Rails',
        description: 'An interactive beer rating web app, dedicated to IPAs',
        url: 'https://mysterious-reaches-84669.herokuapp.com/login',
        image: 'https://github.com/ConditionalStatementLifestyle/HopCentricity-React/raw/master/src/Pictures/ScreenShot.png',
        technologies: 'React Router, Semantic UI, React-Pose, React CSS Transition Group'
    }, {
        name: 'React Pictionary',
        frontend: 'React.js',
        backend: 'Ruby on Rails utilizing Action Cable',
        description: 'Live drawing pictionary game',
        url: 'https://react-pictionary.herokuapp.com/',
        image: 'https://raw.githubusercontent.com/jyang81/pictionary-react/master/react-pictionary-screenshot.png',
        technologies: 'Semantic UI, Web Sockets'
    }, {
        name: 'Invest Big',
        frontend: 'Vanilla JavaScript',
        backend: 'Ruby on Rails',
        description: 'Simple compound interest modeling web app',
        url: 'https://secret-mesa-58919.herokuapp.com/',
        image: 'https://github.com/ConditionalStatementLifestyle/InvestmentAnalyzer/raw/master/InvestBig.png',
        technologies: 'Chart.js'
    }
]

export default function Projects(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <Page background="linear-gradient(90deg, #FFFFFF  0%, #BCBCBC 100%)">
            <div className='card-container'>
                {projectsObject.map(project => {
                    return (
                        <div key={project.name} className='box'>
                            <div className='spacing' >
                                <div className='project-header'>{project.name}</div>
                                <Image className='profile-img' alt='oh no' src={project.image} fluid></Image>
                            </div>
                            <ProjectModal projectInfo={project} />
                        </div>
                    )
                })}
            </div>
        </Page>
    )
}
