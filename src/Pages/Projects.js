import React, { useEffect, useState } from 'react';
import ProjectDetails from '../Components/ProjectDetails';
import { Image, Reveal } from 'semantic-ui-react';
import Page from '../Components/Page';
import { projects } from '../Components/constants'

export default function Projects(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    })
    
    const { windowWidth } = props;
    const viewType = windowWidth > 1000 ? 'card-direction-row' : 'card-direction-column';

    return (
        <Page background="linear-gradient(90deg, #FFFFFF  0%, #BCBCBC 100%)">
            <br />
            <br />
            <br />
            <br />
            <div className='card-container'>
                {projects.map(project => {
                    return (
                        <div key={project.name} className={`project-card ${viewType}`}>
                            <div key={project.name} className='project-header'>{project.name}</div>
                            <div className='project-card-contents'>
                                <Reveal animated='fade'>
                                    <Reveal.Content visible>
                                        <Image className={`profile-img-${project.imageSize}-size`} alt='oh no' src={project.image} centered></Image>
                                    </Reveal.Content>
                                    <Reveal.Content hidden>
                                        <ProjectDetails projectInfo={project} />
                                    </Reveal.Content>
                                </Reveal>
                            </div>
                        </div>
                    )
                })}
            </div>
            {windowWidth < 500 && <><br/><br/><br/></>}
        </Page>
    )
}
