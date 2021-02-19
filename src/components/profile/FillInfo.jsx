import React ,{useState} from 'react'
import './info.css'
import Button from 'react-bootstrap/Button'
  import Form from 'react-bootstrap/Form'
import Navbar from '../../components/headerComponent/Navbar'

const Info=()=>{
      //states for handles
         const [name,setName]=useState(null);
         const [codeforces,setCodeforces]=useState(null);
         const [codechef,setCodechef]=useState(null);
         const [atcoder,setAtcoder]= useState(null);
         const [spoj,setSpoj]=useState(null);
         const [uv,setUv]=useState(null);
         const [password,setPassword]=useState();
         const [msg,setMsg]=useState("Create Your Profile");
         const [user,setUser]=useState();
         const [show,setShow]=useState(false);
    async function handle(e){
        e.preventDefault();
        setShow(true);
        const creds=await JSON.parse(localStorage.getItem("creds"));
        const acc=creds.access;
        const ref=creds.refresh;
        const uu=creds.username;
        setUser(uu);
        console.log(creds);
        console.log(`The user name is : ${uu}`);
        const response=await fetch(`https://api.codedigger.tech/auth/profile/${uu}`,{
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
              "uva_handle":uv,
              "password":password

            })
        })
        console.log(response);
        const data=await response.json();
        console.log(data);
        if(response.status===200){
            
            console.log(data);
        localStorage.setItem("creds",JSON.stringify({
              access:acc,
              refresh:ref,
              first:false,
              username:user
    
        }))
        console.log(localStorage.getItem("creds"));
        //setTimeout(1000,setShow(false));

        setMsg("Successful.....");
        window.location=`/profile/${user}`;
    }
    else{
        //setTimeout(setShow(false));
        let mm;
        if(data.spoj){
        mm=mm+"spoj"+data.spoj[0];
        }
        if(data.uva_handle){
        mm=mm+"uva_"+data.uva_handle[0];
        }
      
        alert(mm);
    }
    }
    return(
        <>
      <Navbar/>
       <Form className="myform">
<h3>{msg}</h3>
           <input className="inputs" onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" required/><br></br>
           <input className="inputs" onChange={(e)=>setCodeforces(e.target.value)} type="text" placeholder="Codeforces" required/><br></br>
           <input className="inputs" onChange={(e)=>setCodechef(e.target.value)} type="text" placeholder="Codechef" required/><br></br>
           <input className="inputs" onChange={(e)=>setAtcoder(e.target.value)} type="text" placeholder="Atcoder" required/><br></br>
           <input className="inputs" onChange={(e)=>setSpoj(e.target.value)} type="text" placeholder="Spoj" required/><br></br>
           <input className="inputs" onChange={(e)=>setUv(e.target.value)} type="text" placeholder="uva_handle" required></input><br></br>
           <input className="inputs" onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" required></input><br></br>
           <button className="mybtn" type="submit" onClick={handle}>Submit</button>
           
       </Form>
     
      </>
    )
}
export default Info;