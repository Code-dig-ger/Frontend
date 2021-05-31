import React, { useState } from 'react'
import './chanePassword.style.css'
import Navbar from '../Header/Navbar'
import {NewPassRequest} from '../../actions/auth.actions'
import Spinner from 'react-bootstrap/Spinner'
const PassChangeForm=()=>{


    const [old,setOld]=useState();
    const [newPass,setNewPass]=useState();
    const [loader,setLoader] =useState(false);
    
    async function handle(e){
        e.preventDefault();
        setLoader(true);
        const creds=JSON.parse(localStorage.getItem("creds"));
        const acc=creds.access; 
        const data=await NewPassRequest(old,newPass,acc);
        // console.log(old+" "+newPass)
        // console.log(data);
        if(data.status==="FAILED"){
            alert(data.error);
        }
        else{
            alert(data.result)
            window.location='/login'
            localStorage.clear();
        }
        setLoader(false);
    }
     return(
        <>
        <Navbar></Navbar>
        <div className="outer">
       <div className="flex-container">
  <div className="content-container">
    <div className="form-container">
      <form className="thisform" >
        <h1 className="heading">
          Change password
        </h1>
        <br></br>
        <br></br>
        <span className="subtitle">OLD PASSWORD:</span>
        <br></br> 
        <input onChange={(e)=>setOld(e.target.value)} className="input" type="text" required/>
        <br></br>
        <span className="subtitle">NEW PASSWORD:</span>
        <br></br>
        <input onChange={(e)=>setNewPass(e.target.value)} className="input" type="text"  required/>
        <br></br>
        <input onClick={handle} type="submit" value={`${loader?'loading....':'SUBMIT'}`} className="submit-btn"></input>
        {loader?<Spinner className="loading-animation" animation="border"/>:<></>}
      </form>
    </div>
  </div>
</div></div>
        </>
     )
}
export default PassChangeForm