import React from 'react'
import { Transition } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";



class Intro extends React.Component {

    constructor() {
        super()
        this.state = {
            visible: false
        }
    }

    componentWillMount() {
        setInterval(this.toggleVisibility,5000)
    }

    toggleVisibility = () => {
        let visible = !this.state.visible
        this.setState({ visible }) 
    }
    
    render() {
        const { visible } = this.state
        return (
            <div>
                <Transition animation={'pulse'} duration={4000} visible={visible}>
                    <div className='intro-words'>
                        Hi I'm Jon and I'm a full-stack web developer.
                    </div>
                </Transition>
                <button className="ui black button intro-button large" onClick={() => this.props.history.push('/home')}>
                  Home
                </button>
            </div>
        )
    }
}

export default withRouter(Intro)
