import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonToggle,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
} from 'reactstrap'
const PlaylistModal = (props) => {
  const [modal, setModal] = useState(false)
  const [playlistName, setPlaylistName] = useState()
  const [playlistDes, setPlaylistDes] = useState()

  function addPlaylist(e) {
    const res = fetch(`https://api.codedigger.tech/lists/userlist/new`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${props.acc}`,
      },
      body: JSON.stringify({
        name: playlistName,
        description: playlistDes,
        public: true,
      }),
    })

    window.location.reload()

    res.catch((err) => console.log(err))
  }
  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button
        color="danger"
        onClick={toggle}
        style={{
          backgroundColor: '#1379e7',
          position: 'relative',
          left: '85%',
        }}
      >
        Add Problem List
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a Problem List</ModalHeader>
        <ModalBody>
          Add the name and the description for your Problem List.
        </ModalBody>
        <Form style={{ marginBottom: '70px' }}>
          <div>
            <Input
              style={{ marginLeft: '45px', width: '80%', marginTop: '30px' }}
              type="text"
              id="playlistName"
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="Playlist Name"
            />
            <Input
              style={{
                marginLeft: '45px',
                width: '80%',
                marginTop: '23px',
                height: '80px',
              }}
              type="textarea"
              onChange={(e) => setPlaylistDes(e.target.value)}
              id="playlistdec"
              placeholder="Playlist Description"
            />
            <Button
              color="primary"
              onClick={addPlaylist}
              style={{
                position: 'relative',
                right: '-40%',
                top: '70px',
              }}
            >
              Add Problem List
            </Button>
          </div>
        </Form>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default PlaylistModal
