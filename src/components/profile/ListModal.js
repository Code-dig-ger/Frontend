import { map } from 'jquery';
import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup,Label,Input,Row } from 'reactstrap';
import FriendList from './FriendList';
import Loading from '../logreg/loading';
import {getFriends} from '../../actions/friends.actions.js';
import './friendsBtn.css';
import $ from 'jquery'

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

  const [friendsOptions,setFriendsOptions]=useState(true);

    const toggle = (e) => {
        e.preventDefault();
        setFriendsOptions(!friendsOptions);
        setModal(!modal);
        if(friendsOptions)
        {
            // console.log("true");
            $('.popout-right>.popout-menu-right').removeClass('hideOptions');
            $('.popout-right>.popout-menu-right').addClass('showOptions');
            $('.window-button>.icon-popout-right').removeClass('glyphicon-menu-hamburger');
            $('.window-button>.icon-popout-right').addClass('animated rotateIn glyphicon-remove');
            $('.dropdown-link-right').addClass('animated bounceIn');
        }
        else
        {
            // console.log("false");
            $('.popout-right>.popout-menu-right').removeClass('showOptions');
            $('.popout-right>.popout-menu-right').addClass('hideOptions');
            $('.window-button>.icon-popout-right').removeClass('animated rotateIn glyphicon-remove');
            $('.dropdown-link-right').removeClass('animated bounceIn');
            $('.window-button>.icon-popout-right').addClass('animated bounceIn glyphicon-menu-hamburger');
        }
      }
  

  const toggleNested1 = (e) => {
    e.preventDefault();
    setNestedModal1(!nestedModal1);
    if(nestedModal1)
    {
      // console.log("pppppp");
    }
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

  const [formUsername,setFormUsername] = useState("");
  const [friendStatus,setFriendStatus] = useState({});

  async function submitForm(e){
    e.preventDefault();
    // console.log(formUsername);
    const res= await fetch(`https://api.codedigger.tech/auth/user/send-request`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${acc}`
            },
            body:JSON.stringify({
                "to_user":formUsername
            })
        });
        res
            .json()
            .then(res => setFriendStatus(res));
        window.location.reload();
  }

useEffect(() => {
  getFriends(acc)
    .then(res => setFriends(res));
  // console.log(friends);
  async function showList() {
    // const res= await fetch(`https://api.codedigger.tech/auth/user/friends`,{
    //     method:"GET",
    //     headers:{
    //         "Content-Type":"application/json",
    //         "Authorization":`Bearer ${acc}`
    //     }
    // });
    // res
    //     .json()
    //     .then(res => setFriends(res));

    // setFriends(getFriends(acc));
    
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
},[])

  return (
    <>
      <div style={{marginTop:'-15px'}} class="dropdown popout-right pull-left">
				    <div onClick={toggle}>
                    <button  style={{width:'135px',padding:'5px'}} class="window-button btn-primary dropdown-toggle friendsButton" type="button" role="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                    <svg style={{width:'28px',marginRight:'9px'}} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><defs><linearGradient id="Live-Events_svg__a" x1="-55.5" y1="1295.5" x2="-55.5" y2="1301.5" gradientTransform="translate(64.5 -1283.5)" gradientUnits="userSpaceOnUse"><stop offset=".001" stop-opacity="0"></stop><stop offset=".83"></stop></linearGradient><linearGradient id="Live-Events_svg__b" y1="-41.5" y2="-35.5" gradientTransform="matrix(1 0 0 -1 78.5 -23.5)" xlinkHref="#Live-Events_svg__a"></linearGradient><linearGradient id="Live-Events_svg__d" y1="32" x2="32" gradientUnits="userSpaceOnUse"><stop offset=".1" stop-color="#be95ff"></stop><stop offset=".9" stop-color="#4589ff"></stop></linearGradient><mask id="Live-Events_svg__c" x="0" y="0" width="32" height="32" maskUnits="userSpaceOnUse"><path d="M24 4a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5 5 5 0 00-5-5zM8 4a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5 5 5 0 00-5-5zM12 14H6a5.006 5.006 0 00-5 5v4h2v-4a3 3 0 013-3h6zM26 14h-6v2h6a3 3 0 013 3v4h2v-4a5.006 5.006 0 00-5-5z" fill="#fff"></path><path transform="rotate(-90 9 15)" fill="url(#Live-Events_svg__a)" d="M7 12h4v6H7z"></path><path transform="rotate(-90 23 15)" fill="url(#Live-Events_svg__b)" d="M21 12h4v6h-4z"></path></mask></defs><g data-name="Layer 2"><g data-name="Dark theme icons"><g mask="url(#Live-Events_svg__c)"><path fill="url(#Live-Events_svg__d)" d="M0 0h32v32H0z"></path></g><path d="M23 30h-2v-2a3 3 0 00-3-3h-4a3 3 0 00-3 3v2H9v-2a5.006 5.006 0 015-5h4a5.006 5.006 0 015 5zM16 13a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5 5 5 0 00-5-5z" fill="#f4f4f4"></path></g></g></svg>
                        <span style={{fontSize:'16px'}}>My Friends</span>
				    </button>
                    </div>
                    
				    <ul class="dropdown-menu popout-menu-right hideOptions" role="menu" aria-labelledby="dropdownMenu1">
						<li onClick={toggleNested1} role="presentation" class="dropdown-link-right arrow-box-left"><a onClick={toggleNested1} role="menuitem" tabindex="-1" href="#">Friends</a></li>
            <li onClick={toggleNested3} role="presentation" class="dropdown-link-right arrow-box-left"><a role="menuitem" tabindex="-1" href="#">Sent Friend Requests</a></li>
						<li onClick={toggleNested2} role="presentation" class="dropdown-link-right arrow-box-left"><a role="menuitem" tabindex="-1" href="#">Friend Requests</a></li>
				    </ul>
				</div>
        <Modal isOpen={nestedModal1} toggle={toggleNested1} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>List of Friends</ModalHeader>
            <ModalBody>
              {friends!=undefined? <FriendList friends={friends} i="1" acc={acc}/>:<Loading/>}
            </ModalBody>
            <Form onSubmit={submitForm} style={{marginBottom:"70px"}}>
                <Label for="formUsername">Add Friend</Label>
                <div style={{display:"flex"}}>
                  <Input style={{marginLeft:"11px", width:"73%"}} type="text" id="formUsername" onChange={(e)=>setFormUsername(e.target.value)} placeholder="Enter Username" />
                  <Button style={{position:"relative",top:"-4px",left:"0px",borderRadius:"13px"}} onClick={submitForm} type="submit">Submit</Button>
                </div>
            </Form>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested1}>Close </Button>{' '}
            </ModalFooter>
          </Modal>
          <Modal isOpen={nestedModal2} toggle={toggleNested2} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>List of Friend Requests</ModalHeader>
            <ModalBody>
              {friendReq!=undefined?<FriendList friends={friendReq} i="2" acc={acc}/>:<Loading/>}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested2}>Close </Button>{' '}
            </ModalFooter>
          </Modal>
          <Modal isOpen={nestedModal3} toggle={toggleNested3} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>List of Sent Friend Requests</ModalHeader>
            <ModalBody>
              {sentReq!=undefined?<FriendList friends={sentReq} i="3" acc={acc}/>:<Loading/>}
            </ModalBody>
            <br/>
            <br/>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested3}>Close </Button>{' '}
            </ModalFooter>
          </Modal>
      {/* <Modal isOpen={modal} toggle={toggle}>
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
          
          
          
        </ModalBody>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Modal> */}
    </>
  );
}

export default ListModal;