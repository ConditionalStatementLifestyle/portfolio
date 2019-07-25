import React from 'react'

const projectsObject = [
    {
        name: 'Hop Centricity',
        frontend: 'React.js',
        backend: 'Rails',
        description: 'An interactive beer rating web app, dedicated to IPAs',
        url: 'https://mysterious-reaches-84669.herokuapp.com/login',
        image: 'https://github.com/ConditionalStatementLifestyle/HopCentricity-React/raw/master/src/Pictures/ScreenShot.png',
        technologies: 'React Router, Semantic UI, React-Pose, React CSS Transition Group'
    }, {
        name: 'React Pictionary',
        frontend: 'React.js',
        backend: 'Rails (Action Cable)',
        description: 'Live drawing pictionary application',
        url: 'https://github.com/jyang81/pictionary-react', 
        image: 'https://raw.githubusercontent.com/jyang81/pictionary-react/master/react-pictionary-screenshot.png'
    }, {
        name: 'Invest Big',
        frontend: 'Vanilla JavaScript',
        backend: 'Rails',
        description: 'Simple compound interest modeling',
        url: 'https://secret-mesa-58919.herokuapp.com/', 
        image: 'https://github.com/ConditionalStatementLifestyle/InvestmentAnalyzer/raw/master/InvestBig.png'
    }
]

export default function Projects() {

    return (
        <div className='card-container'>
            { projectsObject.map(project => {
                return (
                    <div className='ui card center'>
                        <div className="image">
                            <img alt='oh no' src={project.image}/>
                        </div>
                        <div className="content">
                            <div className="header">{project.name}</div>
                            <div className="meta">
                            <span className="date">Joined in 2013</span>
                            </div>
                            <div className="description">
                            Kristy is an art director living in New York.
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}