import React from 'react';
import {ButtonToggle} from 'reactstrap';
import Popup from 'react-popup';


const FriendsBtn = ({creds, acc, handle, user}) => {
    async function sendReq(e) {
        console.log("reached");
        e.preventDefault();
        const res= await fetch(`https://api.codedigger.tech/auth/user/send-request`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${acc}`,
            },
            body:JSON.stringify({
                "to_user":handle
            })
        });
        res
            .json()
            .then(res => console.log(res));
            window.location.reload();
    }

    async function acceptReq(e) {
        e.preventDefault();
        const res= await fetch(`https://api.codedigger.tech/auth/user/accept-request`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${acc}`,
            },
            body:JSON.stringify({
                "from_user":handle
            })
        });
        res
            .json()
            .then(res => console.log(res));
        window.location.reload();
    }

    async function removeFrnd(e) {
        e.preventDefault();
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
            .json()
            .then(res => console.log(res));
        window.location.reload();
    }

    function showList(e) {
        e.preventDefault();
        
    }

    if(user.result.about_user === "Not Authenticated"){
      
        return(
            <div>
               {alert("Please login to Proceed!!")}
               {window.location.assign('/')}
               
            </div>
        )
                
    }else if(user.result.about_user === "Stalking"){
      
        return(
            <div>
                <ButtonToggle style={{
                position: "absolute",
                right: "185px",
                bottom: "275px"}}
                onClick={sendReq}> Add Friend</ButtonToggle>
            </div>
        )
                
    }else if(user.result.about_user === "Request Sent"){
        return(
            <div>
                <ButtonToggle style={{
                position: "absolute",
                right: "175px",
                bottom: "275px"}}> Request Sent</ButtonToggle>
            </div>
        )
    }else if(user.result.about_user === "Logged In User Itself"){
        return(
            <div>
                <ButtonToggle style={{
                position: "absolute",
                right: "190px",
                bottom: "275px"}}
                onClick={showList}> Show List</ButtonToggle>
            </div>
        )
    }else if(user.result.about_user === "Request Received"){
        return(
            <div>
                <ButtonToggle style={{
                position: "absolute",
                right: "168px",
                bottom: "275px"}}
                onClick={acceptReq}> Accept Request</ButtonToggle>
            </div>
        )
    }else if(user.result.about_user === "Friends"){
        return(
            <div>
                <ButtonToggle style={{
                position: "absolute",
                right: "170px",
                bottom: "275px"}}
                onClick={removeFrnd}> Remove Friend</ButtonToggle>
            </div>
        )
    }
    
    
    
    else{
        return null;
    }
   
    
    

}

export default FriendsBtn
