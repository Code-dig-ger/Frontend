import React from 'react'

const Codechef=()=>{
    async function fetchData(){
        const creds=JSON.parse(localStorage.getItem("creds"));
        const acc=creds.access; 
        const response=await fetch('https://api.codedigger.tech/problems/upsolve/codechef',{
         method:"GET",
         headers:{
             "Content-Type":"application/json",
             "Authorization":`Bearer ${acc}`
         },
         
        })
        if(response.status===200){
         const data=await response.json();
               if(data.status==="OK"){
                   
                   console.log("yipee");
               }
               else{
                   console.log("sad");
               }
               console.log(data);
               
        }
        else{
            console.log("err");
        }

        
        
   
 } 
 fetchData();
        return(
            <h1>Codechef</h1>
        )
}
export default Codechef;