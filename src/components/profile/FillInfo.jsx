import React ,{useState} from 'react'
import './info.css'

import Navbar from '../Header/Navbar'
import Footer from '../Footer/FooterSmall'

const Info=()=>{
      //states for handles
         const [name,setName]=useState(null);
         const [codeforces,setCodeforces]=useState(null);
         const [codechef,setCodechef]=useState(null);
         const [atcoder,setAtcoder]= useState(null);
         const [spoj,setSpoj]=useState(null);
         const [uv,setUv]=useState(null);
         
         const [msg,setMsg]=useState("Create Your Profile");
         const [user,setUser]=useState();
         const [show,setShow]=useState(false);
    async function handle(e){
        e.preventDefault();
        setShow(true);
        const creds=await JSON.parse(localStorage.getItem("creds"));
      
        const acc=creds.access;
        const ref=creds.refresh;
        const uu=JSON.stringify(creds.username);
        const usser=JSON.parse(uu);
     await setUser(usser);
      
        const response=await fetch(`https://api.codedigger.tech/auth/profile/${usser}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${acc}`
            },
            body:JSON.stringify({
              "name":name,
              "codeforces":codeforces,
              "codechef":codechef,
              "atcoder":atcoder,
              "spoj":spoj,
              "uva_handle":uv
             
             

            })
        })
      
        const data=await response.json();
       console.log(data);
        if(response.status===200){
        
        localStorage.setItem("creds",JSON.stringify({
              access:acc,
              refresh:ref,
              first:false,
              username:usser,
              
    
        }))
    

        setMsg("Successful.....");
      window.location=`/profile/${usser}`;
    }
    else{
        
      alert(data.error);
      
        
    }
    }
    return(
        <>
      <Navbar/>
      <div className="outeri">
       <div className="flex-containeri">
  <div className="content-containeri">
    <div className="form-containeri">
      <form className="thisformi" >
        <h3 className="headingi">
          {msg}
        </h3>
        
        <br></br>

        
        <input placeholder="Name" onChange={(e)=>setName(e.target.value)} className="inputi" type="text" required/>
        <br></br>
        <input placeholder="Codeforces" onChange={(e)=>setCodeforces(e.target.value)} className="inputi" type="text" required/>
        <br></br>
        
       
        <input placeholder="Codechef" onChange={(e)=>setCodechef(e.target.value)} className="inputi" type="text" />
        <br></br>
        
        
        <input placeholder="Atcoder" onChange={(e)=>setAtcoder(e.target.value)} className="inputi" type="text"/>
        <br></br>
        
        
        <input placeholder="Spoj" onChange={(e)=>setSpoj(e.target.value)} className="inputi" type="text" />
        
        <br></br>
        <input placeholder="UVA" onChange={(e)=>setUv(e.target.value)} className="inputi" type="text"  />
        <br></br>
        <input onClick={handle} type="submit" value="SUBMIT" className="submit-btni"/>
      </form>
    </div>
  </div>
</div></div>
           
      
       <Footer/>
     
      </>
    )
}
export default Info;