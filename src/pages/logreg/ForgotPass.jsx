import React ,{useState} from 'react'
import Navbar from '../../components/Header/Navbar'
import './forg.style.css'
import Spinner from 'react-bootstrap/Spinner'
import {passreqEmail} from '../../actions/auth.actions'
const NewpassForm=()=>{

    //states

       const [email,setEmail]=useState("");
       const [msg,setMsg]=useState("");
       const [show,setShow]=useState(false);
       
    async function change(e){
        e.preventDefault();
        // console.log("change")
        setShow(true);
       
        const data=await passreqEmail(email)
        const res=await data.json();
        // console.log(res);
        if(data.statusText==="OK"){
        setMsg("We have sent you a link to change your password")}
        else{
            setMsg("Please fill carefully");
        }
       
        setShow(false);

    }
      return(
          <>
          <Navbar></Navbar><br></br><br></br><br></br><br></br>
          <h4 className="heads">Please enter your registered email.</h4>
          <form onSubmit={change} className="newPassForm">
              <input className="inputbox" placeholder="email" onChange={(e)=>setEmail(e.target.value)} required></input><br></br>
              <button className="submitbutton" onClick={change} type="submit" >submit</button>
              {
                  show?
              <Spinner className="loading-animation" animation="border"/>:<h4>{msg}</h4>
             }
     
              </form>
             
          </>
      )
}
export default NewpassForm;