import React from 'react';
import {ButtonToggle} from 'reactstrap';

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
    }
    return (
        <div>
            <ButtonToggle style={{
            position: "absolute",
            right: "197px",
            bottom: "275px"}}
            onClick={sendReq}> Add Friend</ButtonToggle>
        </div>
    )
    

}

export default FriendsBtn
