import React from 'react'
import ProjectModal from '../Components/ProjectModal'

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

export default class Projects extends React.Component {

    render() {
        return (
            <div className='card-container'>
                { projectsObject.map(project => {
                    return (
                        <div className='box'>
                            <div className='spacing' >
                                <div className='project-header'>{project.name}</div>
                                <img className='profile-img' alt='oh no' src={project.image}></img>
                            </div>
                            <ProjectModal projectInfo={project}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
