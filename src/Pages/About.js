import React, { useEffect } from 'react';
import { Image } from 'semantic-ui-react';
import jon from '../Pictures/jonprof2.jpeg';
import Page from '../Components/Page';

export default function About(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const { windowWidth } = props;

    return (
        <Page background="linear-gradient(270deg, #FFFFFF  0%, #BCBCBC 100%)" >
            <br />
            <br />
            <br />
            <div className='intro-paragraph'>
                Hi, my name is Jon. I'm a Front End Developer living in Seattle, WA.
            </div>
            <hr className='hr-page'></hr>
            <div className='profile-container'>
                <Image src={jon} className='profile-pic' centered />
            </div>
            <div className='about-paragraph'>
                I am currently working as a Front End Developer at Stackend Solutions, where I work primarily in React/Redux.
                I have also engaged in full stack tasks and in doing so have gotten an introduction to the Django framework. Outside of work, I have created multiple, deployed
                React/Rails projects which can be viewed on the 'Projects' page.
            </div>
            {/* <div className='about-paragraph about-last-paragraph'>
                Outside of my coding endeavors, I am an avid outdoors person who loves hiking in the Cascades or Olympics, snowboarding 
                at Whistler or Steven's Pass, biking up some of Seattle's treacherous hills, playing tennis or table tennis, or playing frisbee. 
                Besides that, I am a music lover/musician and I thoroughly enjoy playing N64 games with others or playing a nice round of Halo 2, in 
                addition to being a hobbyist photographer.
            </div> */}
            {windowWidth < 500 && <><br/><br/><br/><br/><br/></>}
        </Page >
    )
}
