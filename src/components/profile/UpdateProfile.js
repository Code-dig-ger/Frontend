import React ,{useState, useEffect} from 'react'
import './info.css'

import Navbar from '../Header/Navbar'
import Footer from '../Footer/FooterSmall'
//import actions
import {getProfile} from '../../actions/profile.actions.js'
import Validate from '../../helpers/Validate'

const UpdateInfo=()=>{
      //states for handles

         const [name,setName]=useState(null);
         const [codeforces,setCodeforces]=useState(null);
         const [codechef,setCodechef]=useState(null);
         const [atcoder,setAtcoder]= useState(null);
         const [spoj,setSpoj]=useState(null);
          const [uv,setUv]=useState(null);

          const[username,setUsername]=useState();
          const [token,setToken]=useState();


          //new states
          const [newname,setnewName]=useState(null);
          const [newcodeforces,setnewCodeforces]=useState(null);
          const [newcodechef,setnewCodechef]=useState(null);
          const [newatcoder,setnewAtcoder]= useState(null);
          const [newspoj,setnewSpoj]=useState(null);
           const [newuv,setnewUv]=useState(null);
          //function to update
           
          async function handle(e){
              e.preventDefault();
              const uu=username;
              const tt=token;
              console.log(codeforces)
              if(newname===null){
                setnewName(name)
              }
              if(newcodeforces==null){
                      setnewCodeforces(codeforces);
              }
             

              if(newcodechef==null){
                setnewCodechef(codechef);
        }
        else{
          setnewCodechef(newcodechef)
        }

        if(newatcoder==null){
          setnewAtcoder(atcoder);
          }
       else{
           setnewAtcoder(newatcoder)
           }
                 

            const response=await fetch(`https://api.codedigger.tech/auth/profile/${uu}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${tt}`
                },
                body:JSON.stringify({
                  "name":newname,
                  "codeforces":newcodeforces,
                  "codechef":newcodechef,
                  "atcoder":newatcoder,
                  "spoj":newspoj,
                  "uva_handle":newuv
                 
                 
    
                })
            })
          
            const data=await response.json();
           console.log(data);
            if(response.status===200){
            window.location=`/profile/${uu}`;
        }
        else{
            
          alert(JSON.stringify(data));
          
            
        }
          }
        
          useEffect(()=>{
              Validate();
            
              async function fetchData(){
                const creds=await JSON.parse(localStorage.getItem("creds"));
                await setUsername(creds.username);
                await setToken(creds.access);
            const uu=username;
              const acc=token;
              const data=await getProfile(acc,uu);
             
               const Prevdata=data.result;
              if(data.status=="OK"){
                  setAtcoder(Prevdata.atcoder);
                  setCodechef(Prevdata.codechef);
                  setCodeforces(Prevdata.codeforces);
                  setSpoj(Prevdata.spoj);
                  setName(Prevdata.name);
                  setUv(Prevdata.uva_handle);
              }  


              }

              fetchData();
          })
        
    return(
        <>
      <Navbar/><br></br>
      <div className="outeri">
       <div className="flex-containeri">
  <div className="content-containeri">
    <div className="form-containeri">
      <form className="thisformi" >
        <h3 className="headingi">
          Update Profile
        </h3>
        
        <br></br>

        
        <input placeholder={`Name : ${name}`} onChange={(e)=>setnewName(e.target.value)} className="inputi" type="text" required/>
        <br></br>
        <input placeholder={`Codeforces : ${codeforces}`} onChange={(e)=>setnewCodeforces(e.target.value)} className="inputi" type="text" required/>
        <br></br>
        
       
        <input placeholder={`Codechef : ${codechef}`} onChange={(e)=>setnewCodechef(e.target.value)} className="inputi" type="text" />
        <br></br>
        
        
        <input placeholder={`Atcoder : ${atcoder}`} onChange={(e)=>setnewAtcoder(e.target.value)} className="inputi" type="text"/>
        <br></br>
        
        
        <input placeholder={`Spoj : ${spoj}`} onChange={(e)=>setnewSpoj(e.target.value)} className="inputi" type="text" />
        
        <br></br>
        <input placeholder={`UVA : ${uv}`} onChange={(e)=>setnewUv(e.target.value)} className="inputi" type="text"  />
        <br></br>
        <input  onClick={handle} type="submit" value="UPDATE" className="submit-btni"/>
      </form>
    </div>
  </div>
</div></div>
           
      
       <Footer/>
     
      </>
    )
}
export default UpdateInfo;