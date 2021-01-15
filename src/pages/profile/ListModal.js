import { map } from 'jquery';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FriendList from './FriendList'

const ListModal = ({creds, acc, handle, user}) => {
  const {
    buttonLabel,
    className
  } = {creds, acc, handle, user};

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [friends, setFriends] = useState({});

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  async function showList(e) {
 
    e.preventDefault();
    const res= await fetch(`https://api.codedigger.tech/auth/user/friends`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${acc}`,
        }
    });
    res
        .json()
        .then(res => setFriends(res));
        toggleNested();
}

  return (
    <div>
      <Button color="danger" onClick={toggle}>Show Lists</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Choose a list</ModalHeader>
        <ModalBody>
          <br />
          <br />
          
          <Button color="success"
            style={{
              right: '50px',
              bottom: '10px',
            }}
          >Friend Requests List</Button>
          <Button color="success" onClick={showList}
            style={{
              right: '310px',
              bottom: '10px'
            }}
          >Friends List</Button>

          <Button color="success"
            style={{
              right: '130px',
              bottom: '-60px'
            }}
          >Show Sent Requests List</Button>
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>List of Friends</ModalHeader>
            <ModalBody>
              <FriendList friends={friends}/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>Close </Button>{' '}
            </ModalFooter>
          </Modal>
        </ModalBody>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Modal>
    </div>
  );
}

export default ListModal;