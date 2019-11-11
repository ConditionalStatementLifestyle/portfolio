import React from 'react';
import { Image } from 'semantic-ui-react';
import jon from '../Pictures/jonprof2.jpeg';
import { Icon, Transition } from 'semantic-ui-react';
import { Link } from "react-scroll";

export default class About extends React.Component {

    state = {
        visible : true
    }

    componentDidMount() {
        setInterval(this.toggleVisiblity,4500);
        window.scrollTo(0,0)
    }

    toggleVisiblity = () => {
        let visible = !this.state.visible
        this.setState({ visible })
    }

    componentWillUnmount() {
        clearInterval(this.toggleVisiblity)
    }
    
    render() {
        return (
            <div className='about-background'> 
                <div>
                    <div className='about-height'>
                        {/* <div className='home-text'>
                            Jon Langkammer
                            </div><br></br>
                            <div className='home-subtext'>
                            Software Developer
                        </div> */}
                        {/* <Transition animation={'bounce'} duration={4000} visible={this.state.visible}>
                            <div className='centered'>
                            <Link  
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration= {500}>
                            <Icon name='angle down' color='black' size='massive' />
                            </Link>
                            </div>
                        </Transition> */}
                    <div className='intro-paragraph'>
                        Hi, my name is Jon. I'm a Front End Developer living in Seattle, WA. 
                    </div>
                    <hr className='hr-page'></hr>
                    <div className='profile-container'>
                        <Image src={jon} className='profile-pic' centered/>
                    </div>
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
                    </div>
                </div>
        )
    }
}
