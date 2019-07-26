import React, { useState } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

export default function ProjectModal(props) {

    let [ open, setOpen ] = useState(false)

    return (
        <div>
        <Button className='ui black button' onClick={() => setOpen(true)}>More Info</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Modal.Header>How do you feel about this beer?</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header size='large'>name</Header>
              <Header>header</Header>
              <div>info</div><br></br>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setOpen(false)}>
              Close
            </Button><br></br><br></br>
          </Modal.Actions>
        </Modal>
      </div>
    )
}