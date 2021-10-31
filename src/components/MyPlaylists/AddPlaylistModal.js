import React, { useState } from 'react'
import './AddPlaylistModals.css'
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
      <Button id="Add_Problem_List" color="danger" onClick={toggle}>
        Add Problem List
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a Problem List</ModalHeader>
        <ModalBody>
          Add the name and the description for your Problem List.
        </ModalBody>
        <Form id="form">
          <div>
            <Input
              type="text"
              id="playlistName"
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="Playlist Name"
            />
            <Input
              type="textarea"
              onChange={(e) => setPlaylistDes(e.target.value)}
              id="playlistdec"
              placeholder="Playlist Description"
            />
            <Button
              id="Add_Problem_List_With_Details"
              color="primary"
              onClick={addPlaylist}
            >
              Add Problem List
            </Button>
          </div>
        </Form>
        <ModalFooter>
          <Button id="close" color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default PlaylistModal
