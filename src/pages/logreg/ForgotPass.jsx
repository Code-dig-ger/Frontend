import React ,{useState} from 'react'
import Navbar from '../../components/Header/Navbar'
import './forg.style.css'
import Spinner from 'react-bootstrap/Spinner'
const NewpassForm=()=>{

    //states

       const [email,setEmail]=useState("");
       const [msg,setMsg]=useState("");
       const [show,setShow]=useState(false);
       
    async function change(e){
        e.preventDefault();
        console.log("change")
        setShow(true);
        const response=await fetch('https://api.codedigger.tech/auth/request-reset-email/',{
            method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "email":email,
            "redirect_url":"http://localhost:3000/setNewPass"
            
        })
        })
 
        const data=await response.json();
        console.log(data);
        if(data.status==="OK"){
        setMsg(data.result);}
        else{
            setMsg("Please fill carefully");
        }
        setShow(false);

    }
      return(
          <>
          <Navbar></Navbar>
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