import React, { useState,useEffect } from 'react';
import {ButtonToggle} from 'reactstrap';
import MentorModal from './MentorModal.js';
import Loading from '../logreg/loading';

function MentorBtn({creds, acc, handle, user}) {
    // console.log(user.result.codeforces);
    // console.log(handle);
    // console.log(creds.username);
    const [mentors,setMentors] = useState({});
    const [existingGuru,setExistingGuru] = useState(false);

    function findExisting(mentors){
        if(mentors)
        {
            mentors.map((mentor)=>{
                if(mentor === user.result.codeforces)
                {
                    console.log("found");
                    setExistingGuru(true);
                    return null;
                }
            })
        }
    }


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
        findExisting(mentors.result);
    });

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
        setExistingGuru(true);
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
            <div>
                {mentors ? <MentorModal creds={creds} acc={acc} handle={handle} user={user} mentors={mentors}/>:<Loading/>}
            </div>
        )
    }
    else if(existingGuru)
    {
        return(
            <ButtonToggle
                onClick={() => {removeMentor(user.result.codeforces)}}
                 style={{
                position: "absolute",
                right: "03px",
                bottom: "275px"
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
                right: "23px",
                bottom: "275px"
                }}>Add Mentor</ButtonToggle>
            </div>
        )
    }
}

export default MentorBtn
