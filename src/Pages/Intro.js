import React from 'react'
import { Transition, Button } from 'semantic-ui-react'


export default class Intro extends React.Component {

    constructor() {
        super()
        this.state = {
            visible: false
        }
    }

    componentWillMount() {
        setInterval(this.toggleVisibility,2000)
    }

    toggleVisibility = () => {
        let visible = !this.state.visible
        this.setState({ visible }) 
    }
    
    render() {
        { visible } = this.state
        return (
            <div>
                <Transition animation={'pulse'} duration={1500} visible={visible}>
                    <div className='intro-words'>
                        Hi I'm Jon and I'm a full-stack web developer.
                    </div>
                </Transition>>
                <Button>
                    <i></i>
                </Button>
            </div>
        )
    }
}