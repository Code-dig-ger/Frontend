import React, { useState} from 'react'
import './logreg.style.css'
import Loading from './loading'
import Navbar from '../../components/headerComponent/Navbar'
import FooterSmall from '../../components/footerComponent/FooterSmall';

import Eye from '../../assets/Eye.png'

import Validate from '../../Validate'

import Spinner from 'react-bootstrap/Spinner'

const LogReg =()=>{
  if(localStorage.getItem("creds")){
    Validate();
    
  }
  
  //states and handler for register
  const [emailR,setEmailR]=useState("");
  const [usernameR,setUsernameR] =useState("");
  const [passwordR,setPassWordR]=useState("");
  const [msgR,setmsgR]=useState("");
  const [togR,setTogR]=useState(true);
  const [loaderR,setLoaderR]=useState(false);
  async function register(e){
    e.preventDefault();
    setLoaderR(true);
        const response=await fetch('https://api.codedigger.tech/auth/register/',{
            method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "email":emailR,
            "username":usernameR,
            "password":passwordR
        })
        })
        const data=await response.json();
          if(response.status===400){
             
            let msg="";
            if(data.email){
            msg=msg+data.email[0]+'\n';
            
            }
            if(data.username){
              msg=msg+data.username[0]+'\n';
             
            }
            if(data.password){
              msg=msg+data.password[0];
            }
            setmsgR(msg);
            
            
          }
          else if(response.status===201){
            setEmailR("");
            setPassWordR("");
            setUsernameR("");
            setmsgR("Successful, verify your email");
          }
            setLoaderR(false);
    
  }

  //states and handler for login
     const [usernameL,setUserNameL]=useState("");
     const [passwordL,setpasswordL]=useState("");
     const [msgL,setmsgL]=useState("");
     const [first,setFirst] =useState(false);
     const [togL,setTogL] =useState(true);
     const [loaderL,setLoaderL]=useState(false);
 
   async  function login(e){
      e.preventDefault();
      setLoaderL(true);
     const response= await fetch('https://api.codedigger.tech/auth/login/',{
          method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
         "username":usernameL,
         "password":passwordL
      })
      })// 400--> chars
      //
    if(response.status===200){
        setpasswordL("");
        setUserNameL("");
     setmsgL(`Hello, ${usernameL}`);
    const data=await response.json();
    console.log(data);
    
    localStorage.setItem("creds",JSON.stringify({
     
      access:data.tokens.access,
      refresh:data.tokens.refresh,
      first:data.first_time_login,
      username:usernameL
      
    }))
  
    if(data.first_time_login===true){

     window.location='/profile/:id'
    }
    else{
    window.location='/home'
    }            

   
      }
      else if(response.status==400){
      //  setmsgL("Invalid");
      const errorData=await response.json();
      let msg=""; 
      if(errorData.username){
           msg=msg+"Usernamr: "+errorData.username[0]+" ";
       }
       if(errorData.password){
        msg=msg+"Password: "+errorData.password[0];
    }

       setmsgL(msg);
      }
      else {
        const err=await response.json();
        setmsgL(err.error);
      }    
      
      setLoaderL(false);
    }
    //func for forgot password
     function forgotPass(e){
      window.location='/forgPass'
    }

    
   
    const switchers = [...document.querySelectorAll(".switcher")];
    const [show,setShow]=useState(true);
switchers.forEach((item) => {
  item.addEventListener("click", function () {
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    this.parentElement.classList.add("is-active");
  });
});
 
   
      setTimeout(()=>{setShow(false)},1000);
    

    return (
      <>
      <Navbar/>
      <br></br>
      <div>
        {
          show?(<Loading/>):(<>
         
       <div className="ContBody">
      <section className="forms-section">
  <div className="forms">
    <div className="form-wrapper is-active">
      <button type="button" className="switcher switcher-login">
        Login
        <span className="underline"></span>
      </button>
        {loaderL?<Spinner className="loading-animation" animation="border"/>:
      <form className="form form-login">
        <fieldset>
          <legend>Please, enter your email and password for login.</legend>
          <div className="input-block">
            <label for="login-email">Username</label>
            <input onChange={(e)=>setUserNameL(e.target.value)} className="text-primary" id="login-email" type="text" required/>
          </div>
          <div className="input-block">
            <label for="login-password">Password</label>
           
            <input onChange={(e)=>setpasswordL(e.target.value)} id="login-password" className="text-primary" type={(togL)?"password":"text"} required></input>
           
            <span  class="field-icon toggle-password"><img onClick={e=>{
              e.preventDefault();
              setTogL(!togL)}} className="eye" src={Eye}></img></span>
          </div>
        </fieldset>
        <h6 className="errormsgs">{msgL}</h6>
        <button onClick={login} type="submit" className="btn-login">Login</button>
        <button onClick={(e)=>window.location='/ForgPass'} className="btn-setPass">Forgot Password ?</button>
         </form>
     
            }
    </div>
    <div class="form-wrapper">
      <button type="button" className="switcher switcher-signup" onClick={()=>{
         const switchers = [...document.querySelectorAll(".switcher")];

         switchers.forEach((item) => {
           item.addEventListener("click", function () {
             switchers.forEach((item) =>
               item.parentElement.classList.remove("is-active")
             );
             this.parentElement.classList.add("is-active");
           });
         });
      }}>
        Register
        <span className="underline"></span>
      </button>
      {loaderR?<Spinner className="loading-animation" animation="border"/>:
      <form className="form form-signup">
      {((msgR==="")||(msgR!=="Successful, verify your email"))?<>
        <fieldset>
          <legend>Please, enter your email, username and password for sign up.</legend>
          <div className="input-block">
            <label for="signup-email">E-mail</label>
            <input value={emailR} onChange={(e)=>setEmailR(e.target.value)} id="signup-email" type="email" required/>
          </div>
          <div className="input-block">
            <label for="username">Username</label>
            <input value={usernameR} onChange ={(e)=>setUsernameR(e.target.value)} id="username" type="text" required/>
          </div>
          <div className="input-block">
            <label for="signup-password">Password</label>
            <input value={passwordR} onChange={(e)=>{setPassWordR(e.target.value)}} id="signup-password" type={(togR)?"password":"text"} required/>
            <span  class="field-icon toggle-password"><img onClick={e=>{
              e.preventDefault();
              setTogR(!togR)}} className="eye" src={Eye}></img></span>
          </div>
        </fieldset>
    <h6 className="errormsgs">{msgR}</h6>
        <button onClick={register} type="submit" className="btn-signup">Register</button></>
        :<h4 className="goodmsgs">{msgR}</h4>}
      </form>
}
    </div>
  </div>
</section>
        
      </div>
       <FooterSmall/></>)
      }
    </div>
   
    </>
    )     
    
}

export default LogReg