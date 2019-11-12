import React from 'react'

export default function ProjectModal(props) {

    const {
        description,
        frontend,
        backend,
        technologies,
    } = props.projectInfo;
    
    return (
        <div className='project-details'>
            <div className='desc'>{description}</div>
            <div className='line-break-height'/>
            <div>Frontend: {frontend}</div>
            <div className='line-break-height'/>
            <div>Backend: {backend}</div>
            <div className='line-break-height'/>
            <div>Technologies & Libraries: {technologies}</div>
            <div className='line-break-height'/>
        </div>
    )
}