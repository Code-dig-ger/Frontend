import React, { useState,useEffect } from 'react';
import {ButtonToggle} from 'reactstrap';
import MentorModal from './MentorModal.js';
import Loading from '../logreg/loading';

function MentorBtn({creds, acc, handle, user}) {
    // console.log(user.result.codeforces);
    // console.log(handle);
    // console.log(creds.username);
    // console.log(creds);
    // console.log(acc);
    // console.log(handle);
    // console.log(user);
    const [mentors,setMentors] = useState({});

    useEffect(() => {

        async function getMentors() {
            const res = await fetch(`https://api.codedigger.tech/codeforces/mentor`,{
                method:"GET",
                headers:{
                  "Content-Type":"application/json",
                  "Authorization":`Bearer ${acc}`
                }
            });
            res
              .json()
              .then(res => setMentors(res));
            //   .then(res => console.log(mentors))
        }
        getMentors();
    },[]);

    async function addMentor(mentor){
        const res=await fetch (`https://api.codedigger.tech/codeforces/mentor`,{
            method:"PUT",
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${acc}`
            },
            body:JSON.stringify({
                "guru":mentor
            })
        })
        window.location.reload();
    }

    async function removeMentor(mName){
        const res=await fetch (`https://api.codedigger.tech/codeforces/mentor`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${acc}`
            },
            body:JSON.stringify({
                "guru":mName
            })
        })
        window.location.reload();
    }

    if(handle===creds.username)
    {
        return (
            <>
                {mentors ? <MentorModal creds={creds} acc={acc} handle={handle} user={user} mentors={mentors}/>:<Loading/>}
            </>
        )
    }
    else if(user.result.about_mentor === "Mentor")
    {
        return(
            <ButtonToggle
                onClick={() => {removeMentor(user.result.codeforces)}}
                 style={{
                position: "absolute",
                right: "35px",
                bottom: "265px"
                }}>Remove Mentor</ButtonToggle>
        )
    }
    else
    {
        return(
            <div>
                <ButtonToggle
                onClick={() => {addMentor(user.result.codeforces)}}
                 style={{
                position: "absolute",
                right: "50px",
                bottom: "265px"
                }}>Add Mentor</ButtonToggle>
            </div>
        )
    }
}

export default MentorBtn
