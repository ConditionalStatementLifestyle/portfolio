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
        description: 'Live drawing pictionary game',
        url: 'https://github.com/jyang81/pictionary-react', 
        image: 'https://raw.githubusercontent.com/jyang81/pictionary-react/master/react-pictionary-screenshot.png'
    }, {
        name: 'Invest Big',
        frontend: 'Vanilla JavaScript',
        backend: 'Rails',
        description: 'Simple compound interest modeling web app',
        url: 'https://secret-mesa-58919.herokuapp.com/', 
        image: 'https://github.com/ConditionalStatementLifestyle/InvestmentAnalyzer/raw/master/InvestBig.png'
    }
]

export default function Projects() {

    return (
        <div className='card-container'>
            { projectsObject.map(project => {
                return (
                    <div className='box'>
                        <div className='spacing'>
                            <h2>{project.name}</h2>
                            <img className='profile-img' alt='oh no' src={project.image}></img>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

{/* <div className='ui card centered'>
<div className="image">
    <img alt='oh no' src={project.image}/>
</div>
<div className="content">
    <div className="header">{project.name}</div>
    <div className="meta">
    <span className="date">{project.description}</span>
    </div>
    <div className="description">
        Frontend: {project.frontend}
    </div><br></br>
    <div className="description">
        Backend: {project.backend}
    </div>
</div>
</div> */}