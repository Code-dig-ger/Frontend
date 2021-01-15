import { map } from 'jquery';
import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FriendList from './FriendList';
import Loading from '../logreg/loading';

const ListModal = ({creds, acc, handle, user}) => {
  const {
    buttonLabel,
    className
  } = {creds, acc, handle, user};

  const [modal, setModal] = useState(false);
  const [nestedModal1, setNestedModal1] = useState(false);
  const [nestedModal2, setNestedModal2] = useState(false);
  const [nestedModal3, setNestedModal3] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [friends, setFriends] = useState({});
  const [friendReq,setFriendReq] = useState({});
  const [sentReq,setSentReq] =useState({});
  

  const toggle = (e) => {
    e.preventDefault();
    setModal(!modal);
  }
  const toggleNested1 = (e) => {
    e.preventDefault();
    setNestedModal1(!nestedModal1);
    setCloseAll(false);
  }
  const toggleNested2 = (e) => {
    e.preventDefault();
    setNestedModal2(!nestedModal2);
    setCloseAll(false);
  }
  const toggleNested3 = (e) => {
    e.preventDefault();
    setNestedModal3(!nestedModal3);
    setCloseAll(false);
  }
  const toggleAll = (e) => {
    e.preventDefault();
    setNestedModal1(!nestedModal1);
    setNestedModal2(!nestedModal2);
    setNestedModal3(!nestedModal3);
    setCloseAll(true);
  }

useEffect(() => {
  async function showList() {
    const res= await fetch(`https://api.codedigger.tech/auth/user/friends`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${acc}`
        }
    });
    res
        .json()
        .then(res => setFriends(res));
    
    const res1=await fetch (`https://api.codedigger.tech/auth/user/show-request`,{
      method:"GET",
      headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${acc}`
      }
    });
    res1
      .json()
      .then(res1 => setFriendReq(res1));

      const res2=await fetch (`https://api.codedigger.tech/auth/user/show-send-request`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${acc}`
        }
      });
      res2
        .json()
        .then(res2 => setSentReq(res2));
}
showList();
})

  return (
    <div>
      <Button color="danger" onClick={toggle}>Show Lists</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Choose a list</ModalHeader>
        <ModalBody>
          <br />
          <br />
          
          <Button color="success"
          onClick={toggleNested2}
            style={{
              right: '50px',
              bottom: '10px',
            }}
          >Friend Requests List</Button>
          <Button color="success"
          onClick={toggleNested1}
            style={{
              right: '310px',
              bottom: '10px'
            }}
          >Friends List</Button>

          <Button color="success"
          onClick={toggleNested3}
            style={{
              right: '130px',
              bottom: '-60px'
            }}
          >Show Sent Requests List</Button>
          {friends ? <Modal isOpen={nestedModal1} toggle={toggleNested1} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>List of Friends</ModalHeader>
            <ModalBody>
              <FriendList friends={friends} i="1" acc={acc}/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested1}>Close </Button>{' '}
            </ModalFooter>
          </Modal>: <Loading/>}
          {friendReq ? <Modal isOpen={nestedModal2} toggle={toggleNested2} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>List of Friend Requests</ModalHeader>
            <ModalBody>
              <FriendList friends={friendReq} i="2" acc={acc}/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested2}>Close </Button>{' '}
            </ModalFooter>
          </Modal>: <Loading/>}
          {sentReq ? <Modal isOpen={nestedModal3} toggle={toggleNested3} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>List of Sent Friend Requests</ModalHeader>
            <ModalBody>
              <FriendList friends={sentReq} i="3" acc={acc}/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested3}>Close </Button>{' '}
            </ModalFooter>
          </Modal>: <Loading/>}
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