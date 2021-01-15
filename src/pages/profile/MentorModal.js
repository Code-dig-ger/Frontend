import React, {useState,useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,ButtonToggle } from 'reactstrap';
import Loading from '../logreg/loading';
import MentorList from './MentorList.js';

const MentorModal = ({creds,acc,handle,user,mentors}) => {
    const [modal, setModal] = useState(false);
    const toggle = (e) => {
        e.preventDefault();
        setModal(!modal);
      }

    return (
        <div>
            <ButtonToggle
            onClick={toggle}
             style={{
                position: "absolute",
                right: "23px",
                bottom: "275px"
                }}>My Mentors</ButtonToggle>
            {mentors != {} ? <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>List of Mentors</ModalHeader>
            <ModalBody>
              <MentorList mentors={mentors} acc={acc}/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Close </Button>{' '}
            </ModalFooter>
          </Modal>: <Loading/>}
        </div>
    )
}

export default MentorModal
