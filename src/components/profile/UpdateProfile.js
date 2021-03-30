import React ,{useState, useEffect} from 'react'
import './info.css'

import Navbar from '../Header/Navbar'
import Footer from '../Footer/FooterSmall'
//import actions
import {getProfile} from '../../actions/profile.actions.js'
import Validate from '../../helpers/Validate'
import Spinner from 'react-bootstrap/Spinner'

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

          const[show,setShow]=useState(false);
          //new states
          const [newname,setnewName]=useState("");
          const [newcodeforces,setnewCodeforces]=useState("");
          const [newcodechef,setnewCodechef]=useState("");
          const [newatcoder,setnewAtcoder]= useState("");
          const [newspoj,setnewSpoj]=useState("");
           const [newuv,setnewUv]=useState("");
          //function to update
           
          async function handle(e){
              e.preventDefault();
              setShow(true)
              const uu=username;
              const tt=token;
              let cc,cf,at,uva,sp,na;
              //console.log(newcodeforces)
             if(newname!==""){
             na=newname
             }
             else{
             na=name
             }
             if(newcodeforces!==""){
             cf=newcodeforces
             }
             else{
             cf=codeforces
             }
             if(newcodechef!==""){
             cc=(newcodechef)
             }
             else{
             cc=(codechef)
             }
             if(newatcoder!==""){
             at=(newatcoder)
             }
             else{
             at=(atcoder)
             }
             if(newspoj!=""){
             sp=(newspoj)
             }
             else{
             sp=(spoj)
             }
             if(newuv!=""){
             uva=(newuv)
             }
             else{
             uva=(uv)
             }

            const response=await fetch(`https://api.codedigger.tech/auth/profile/${uu}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${tt}`
                },
                body:JSON.stringify({
                  "name":na,
                  "codeforces":cf,
                  "codechef":cc,
                  "atcoder":at,
                  "spoj":sp,
                  "uva_handle":uva
                 
                 
    
                })
            })
          
            const data=await response.json();
         //  console.log(data);
            if(response.status===200){
            window.location=`/profile/${uu}`;
        }
        else{
            
          alert(JSON.stringify(data));
          
            
        }
        setShow(false)
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
               //console.log(Prevdata)
              if(data.status=="OK"){
                  if(Prevdata.atcoder!=null){
                  setAtcoder(Prevdata.atcoder);
                  }
                  if(Prevdata.codechef!=null){
                  setCodechef(Prevdata.codechef);
                  }
                  if(Prevdata.codeforces!=null){
                  setCodeforces(Prevdata.codeforces);
                  }
                  if(Prevdata.spoj!=null){
                  setSpoj(Prevdata.spoj);
                  }
                  if(Prevdata.name!=null){
                  setName(Prevdata.name);
                  }
                  if(Prevdata.uva_handle!=null){
                  setUv(Prevdata.uva_handle);
                  }
              }  


              }

              fetchData();
          })
        
    return(
        <>
      <Navbar/><br></br><br></br>
      <div className="outeri">
       <div className="flex-containeri">
  <div className="content-containeri">
    <div className="form-containeri">
      <form className="thisformi" >
        <h3 className="headingi">
          Update Profile
        </h3>
        <h6 style={{color:'white'}}>Fields marked with asteric are required.</h6>
        <h6 style={{color:'white'}}>Fill only those fields you want to update.</h6>

       
        
        <input placeholder={`Name : ${name}`} onChange={(e)=>setnewName(e.target.value)} className="inputi" type="text" required/>
        <br></br>
        <input placeholder={`Codeforces handle : ${codeforces}`} onChange={(e)=>setnewCodeforces(e.target.value)} className="inputi" type="text" required/>
        <br></br>
        
       
        <input placeholder={`Codechef handle : ${codechef}`} onChange={(e)=>setnewCodechef(e.target.value)} className="inputi" type="text" />
        <br></br>
        
        
        <input placeholder={`Atcoder handle : ${atcoder}`} onChange={(e)=>setnewAtcoder(e.target.value)} className="inputi" type="text"/>
        <br></br>
        
        
        <input placeholder={`Spoj handle : ${spoj}`} onChange={(e)=>setnewSpoj(e.target.value)} className="inputi" type="text" />
        
        <br></br>
        <input placeholder={`UVA handle : ${uv}`} onChange={(e)=>setnewUv(e.target.value)} className="inputi" type="text"  />
        <br></br>
        <input  onClick={handle} type="submit" value={show?"Processing..":"UPDATE"} className="submit-btni"/>
        {show?<Spinner className="loading-animation" animation="border"/>:<></>}
      </form>
    </div>
  </div>
</div></div>
           
      
       <Footer/>
     
      </>
    )
}
export default UpdateInfo;