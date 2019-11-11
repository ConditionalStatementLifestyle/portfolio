import React from 'react'

export default function ProjectModal(props) {

    const {
        description,
        frontend,
        backend,
        technologies,
        url
    } = props.projectInfo;
    return (
        <div className='project-details'>
            <div className='desc'>{description}</div><br></br>
            <div>Frontend: {frontend}</div><br></br>
            <div>Backend: {backend}</div><br></br>
            <div>Technologies & Libraries: {technologies}</div><br></br>
            <div><a href={url}>Go to demo</a></div><br></br>
        </div>
    )
}