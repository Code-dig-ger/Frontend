import React, { useState } from 'react';

const NewPassForm =()=>{
     const [pass,setPass]=useState();
     const [msg,setMsg]=useState("");
    async function handleSubmit(e){
       e.preventDefault();
       const currentUrl=window.location.href;
       const temp=currentUrl;
       const token=currentUrl.split("token=")[1];
       const uidb=temp.split("uidb64=")[1];
       let myuidb="";
       let i=0;
       while(uidb[i]!=='&'){
           i++;
       }
       myuidb=uidb.substring(0,i);
       console.log(myuidb);
        console.log(token);
        const response=await fetch('https://api.codedigger.tech/auth/password-reset-complete',{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "password":pass,
                "token":token,
                "uidb64":myuidb
             })
        })
        const data=await response.json();
        console.log(data);
        if(data.status==="OK"){
            setMsg(data.result);
            window.location='http://localhost:3000/logreg';
        }
        else{
            setMsg(data.error);
        }
       
    }    
    return (
        <>
        <h4>Set Your New Password</h4>
        <input onChange={(e)=>setPass(e.target.value)} placeholder="new password"></input>
        <button onClick={handleSubmit}>Submit</button>
        {msg}
        </>
        
    )
}
export default NewPassForm