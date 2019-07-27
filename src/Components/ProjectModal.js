import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

export default class ProjectModal extends React.Component {

    constructor() {
        super()
        this.state = {
            open : false
        }
    }

    show = () => {
        this.setState({ open: true })
    }
    
    close = () => {
        this.setState({ open : false })
    }

    render() {
        return (
            <div>
                <Button className='ui black button' onClick={() => this.show()}>More Info</Button>
                <Modal open={this.state.open} onClose={() => this.close}>
                <Modal.Header>{this.props.projectInfo.name}</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                    <Header size='medium'>{this.props.projectInfo.description}</Header>
                    <div>Frontend: {this.props.projectInfo.frontend}</div><br></br>
                    <div>Backend: {this.props.projectInfo.backend}</div><br></br>
                    <div>Technologies: {this.props.projectInfo.technologies}</div><br></br>
                    <div><a href={this.props.projectInfo.url}>Go to demo</a></div><br></br>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => this.close()}>
                        Close
                    </Button><br></br>
                </Modal.Actions>
                </Modal>
            </div>
        )
    }
}