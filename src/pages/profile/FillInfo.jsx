import React ,{useState} from 'react'


  


const Info=()=>{
      //states for handles
         const [name,setName]=useState("");
         const [codeforces,setCodeforces]=useState("");
         const [codechef,setCodechef]=useState("");
         const [atcoder,setAtcoder]= useState("");
         const [spoj,setSpoj]=useState("");
         const [uv,setUv]=useState("");
         const [password,setPassword]=useState("");
         const [msg,setMsg]=useState("Create Your Profile");
         const [user,setUser]=useState("");

    async function handle(e){
        e.preventDefault();
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
       
        if(response.status===200){
            const data=await response.json();
            console.log(data);
        localStorage.setItem("creds",JSON.stringify({
              access:acc,
              refresh:ref,
              first:false,
              username:user
    
        }))
        console.log(localStorage.getItem("creds"));
        setMsg("Successful.....");
        window.location='/profile'
    }
    else{
        setMsg("Invalid Information")
    }
    }
    return(
        <>
      
       <form>
    <h3>{msg}</h3>
           <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" required/>
           <input onChange={(e)=>setCodeforces(e.target.value)} type="text" placeholder="Codeforces" required/>
           <input onChange={(e)=>setCodechef(e.target.value)} type="text" placeholder="Codechef"/>
           <input onChange={(e)=>setAtcoder(e.target.value)} type="text" placeholder="Atcoder"/>
           <input onChange={(e)=>setSpoj(e.target.value)} type="text" placeholder="Spoj"/>
           <input onChange={(e)=>setUv(e.target.value)} type="text" placeholder="uva_handle"></input>
           <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password"></input>
           <button type="submit" onClick={handle}>Submit</button>
           
       </form>
     
      </>
    )
}
export default Info;