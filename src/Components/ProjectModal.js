import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

export default function ProjectModal(props) {

    return (
        <div>
            {/* <Button className='ui black button' onClick={() => this.props.toggleOpen()}>More Info</Button> */}
            <Modal open={props.open} onClose={() => props.toggleOpen()}>
            <Modal.Header>{props.projectInfo.name}</Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                <Header size='large'>{props.projectInfo.description}</Header>
                <div>Frontend:{props.projectInfo.frontend}</div><br></br>
                <div>Backend:{props.projectInfo.backend}</div><br></br>
                <div>Technologies:{props.projectInfo.technologies}</div><br></br>
                <div><a href={props.projectInfo.url}>URL</a></div><br></br>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => props.toggleOpen()}>
                Close
                </Button><br></br><br></br>
            </Modal.Actions>
            </Modal>
        </div>
    )
}