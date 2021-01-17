import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Button} from 'reactstrap';

function FriendList({friends,i,acc}) {

  async function removeFrnd(handle) {
    const res= await fetch(`https://api.codedigger.tech/auth/user/remove-friend`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${acc}`,
        },
        body:JSON.stringify({
            "user":handle
        })
    });
    res
        .json();
    window.location.reload();
}

  async function acceptRequest(fName){
    console.log("clicked");
    const res=await fetch (`https://api.codedigger.tech/auth/user/accept-request`,{
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${acc}`
    },
    body:JSON.stringify({
      "from_user":fName
    })
    })
  }
  
    
    return (
        <div style={{fontSize:"1.1rem", marginBottom:"10px"}}>
            {console.log(friends)}
          <ul>
            {
             friends.result.map((friend) => {
              const profileLink="/profile/"+friend.username;
                 return(
                    <li>
                      {friend.name} &nbsp;
                      <b><a href={profileLink}>({friend.username})</a></b>
                      
                      {i=="1" ? <Button 
                      color="success" 
                      onClick={() => {removeFrnd(friend.username)}}
                      style={{padding:"5px 7px", 
                      position:"relative", 
                      left:"20px", 
                      bottom:"0",
                      borderRadius:"10%"}}>
                        Delete
                      </Button>:<></>}

                      {i=="2" ? <Button 
                      color="success" 
                      onClick={() => {acceptRequest(friend.username)}}
                      style={{padding:"5px 7px", 
                      position:"relative", 
                      left:"20px", 
                      bottom:"0",
                      borderRadius:"10%"}}>
                        Accept
                      </Button>:<></>}
                    </li>
                 )
               
             })
           }
          </ul>
        </div>
      )
}

export default FriendList
