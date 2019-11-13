import React, { useState } from 'react';
import ProjectDetails from '../Components/ProjectDetails';
import { Image, Reveal } from 'semantic-ui-react';

export default function Project({ viewType, project }) {

    const [isVisible, setVisible] = useState('hidden')

    const { name, imageSize, image, url } = project;

    return (
        <div key={name} className={`project-card ${viewType}`}>
            <div className='project-header'>
                <span className='header-text'
                    onClick={() => {
                        setVisible('visible')
                    }}>
                    {name}
                </span>
            </div>
            <div className='project-card-contents'>
                <Reveal animated='fade'>
                    <Reveal.Content visible>
                        <Image className={`profile-img-${imageSize}-size`} alt='oh no' src={image} centered></Image>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <ProjectDetails projectInfo={project} />
                    </Reveal.Content>
                </Reveal>
            </div>
            <div className={`url-modal-${isVisible}`}>
                <span><a className={`url-links-${isVisible}`} href={url}>Take me to the demo!</a></span>
                <hr className='hr-page-long' />
                <span className={`url-links-${isVisible}`} onClick={() => setVisible('hidden')}>Close</span>
            </div>
        </div>
    )
}
