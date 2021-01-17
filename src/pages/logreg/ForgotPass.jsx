import React ,{useState} from 'react'
import Navbar from '../../components/headerComponent/Navbar'
import './forg.style.css'
const NewpassForm=()=>{

    //states

       const [email,setEmail]=useState("");
       const [msg,setMsg]=useState("");
       
    async function change(e){
        e.preventDefault();
        console.log("change")
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

    }
      return(
          <>
          <Navbar></Navbar>
          
          <form onSubmit={change} className="newPassForm">
              <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
              <button onClick={change} type="submit" >submit</button>
      <h3>{msg}</h3>
              </form>
             
          </>
      )
}
export default NewpassForm;