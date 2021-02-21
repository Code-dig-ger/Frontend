import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Navbar from '../../components/Header/Navbar'
import './forg.style.css'
const NewPassForm =()=>{
     const [pass,setPass]=useState();
     const [msg,setMsg]=useState("");
     const [show,setShow]=useState(false);
    async function handleSubmit(e){
       e.preventDefault();
       setShow(true)
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
      
        const data=await setNewPass(pass,token,myuidb);
       // console.log(data);
        if(data.status==="OK"){
            setMsg(data.result);
            window.location='http://localhost:3000/logreg';
        }
        else{
            setMsg(data.error);
        }
        setShow(false)
       
    }    
    return (
        <>
        
        <h4 className="heads">Set Your New Password</h4>
        <form className="newPassForm">
        <input className="inputbox" onChange={(e)=>setPass(e.target.value)} placeholder="new password"></input><br></br>
        <button className="submitbutton" onClick={handleSubmit}>Submit</button></form>
        {
                  show?
              <Spinner className="loading-animation" animation="border"/>:<h4>{msg}</h4>
             }
        </>
        
    )
}
export default NewPassForm