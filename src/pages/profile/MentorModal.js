import React, {useState,useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,ButtonToggle,Form, FormGroup,Label,Input,Row } from 'reactstrap';
import Loading from '../logreg/loading';
import MentorList from './MentorList.js';

const MentorModal = ({creds,acc,handle,user,mentors}) => {
    const [modal, setModal] = useState(false);
    const toggle = (e) => {
        e.preventDefault();
        setModal(!modal);
      }

      const [formUsername,setFormUsername] = useState("");
  const [friendStatus,setFriendStatus] = useState({});

  async function submitForm(e){
    e.preventDefault();
    console.log(formUsername);
    const res=await fetch (`https://api.codedigger.tech/codeforces/mentor`,{
            method:"PUT",
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${acc}`
            },
            body:JSON.stringify({
                "guru":formUsername
            })
        })
        res
        .json()
        .then(res => setFriendStatus(res))
        .then(console.log(friendStatus));
        window.location.reload();
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
            <Form onSubmit={submitForm} style={{marginBottom:"70px"}}>
                <Label for="formUsername">Add Friend</Label>
                <div style={{display:"flex"}}>
                  <Input style={{marginLeft:"11px", width:"73%"}} type="text" id="formUsername" onChange={(e)=>setFormUsername(e.target.value)} placeholder="Enter Username" />
                  <Button style={{position:"relative",top:"-4px",left:"0px",borderRadius:"13px"}} onClick={submitForm} type="submit">Submit</Button>
                </div>
            </Form>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Close </Button>{' '}
            </ModalFooter>
          </Modal>: <Loading/>}
        </div>
    )
}

export default MentorModal
