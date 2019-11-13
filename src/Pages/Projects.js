import React, { useEffect } from 'react';
import Project from '../Components/Project';
import Page from '../Components/Page';
import { projects } from '../Components/constants'

export default function Projects({ windowWidth, play }) {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const viewType = windowWidth > 1000 ? 'card-direction-row' : 'card-direction-column';

    return (
        <Page background="linear-gradient(90deg, #FFFFFF  0%, #BCBCBC 100%)">
            <br /><br /><br /><br />
            <div className='card-container'>
                {projects.map(project => {
                    return (
                        <Project
                            project={project}
                            viewType={viewType} />
                    )
                })}
            </div>
            {windowWidth < 500 && <><br /><br /><br /></>}
        </Page>
    )
}
