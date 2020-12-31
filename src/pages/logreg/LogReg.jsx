import React, { useState} from 'react'
import './logreg.style.css'
import Loading from './loading'
import Navbar from '../../components/headerComponent/Navbar'
import Footer from '../../components/footerComponent/footer'
import {Link} from 'react-router-dom'



const LogReg =()=>{

  //states and handler for register
  const [emailR,setEmailR]=useState("");
  const [usernameR,setUsernameR] =useState("");
  const [passwordR,setPassWordR]=useState("");
  const [msgR,setmsgR]=useState("");
 
  async function register(e){
    e.preventDefault();
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
          if(response.status===400){
            setmsgR("User already exist");
          }
          else{
            setmsgR("Successful, we have sent you an email!!");
          }
    
    
  }

  //states and handler for login
     const [usernameL,setUserNameL]=useState("");
     const [passwordL,setpasswordL]=useState("");
     const [msgL,setmsgL]=useState("");
     const [first,setFirst] =useState(false);
  

 
   async  function login(e){
      e.preventDefault();
     const response= await fetch('https://api.codedigger.tech/auth/login/',{
          method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
         "username":usernameL,
         "password":passwordL
      })
      })
      if(response.status===401){
    //  setmsgL("Invalid");
      const errorData=await response.json();
      console.log(errorData);
      const msg=errorData.detail;
       setmsgL(msg);
      }
      else{
        setmsgL(`Hello, ${usernameL}`);
        const data=await response.json();
        console.log(data);

        localStorage.setItem("creds",JSON.stringify({
         
          access:data.tokens.access,
          refresh:data.tokens.refresh,
          first:data.first_time_login,
          username:usernameL

        }));
        if(data.first_time_login===true){
         window.location='/Profile'
        }
        else
        window.location='/home'            

      }
      
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
      function handle(e){
        e.preventDefault();
        localStorage.clear();
      }

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

      <form onSubmit={login} className="form form-login">
        <fieldset>
          <legend>Please, enter your email and password for login.</legend>
          <div className="input-block">
            <label for="login-email">Username</label>
            <input onChange={(e)=>setUserNameL(e.target.value)} className="text-primary" id="login-email" type="text" required/>
          </div>
          <div className="input-block">
            <label for="login-password">Password</label>
            <input onChange={(e)=>setpasswordL(e.target.value)} id="login-password" className="text-primary" type="password" required/>
          </div>
        </fieldset>
        <h7 className="text-tertiary">{msgL}</h7>
        <button type="submit" className="btn-login">Login</button>
        
      </form>

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

      <form onSubmit={register} className="form form-signup">
        <fieldset>
          <legend>Please, enter your email, username and password for sign up.</legend>
          <div className="input-block">
            <label for="signup-email">E-mail</label>
            <input onChange={(e)=>setEmailR(e.target.value)} id="signup-email" type="email" required/>
          </div>
          <div className="input-block">
            <label for="username">Username</label>
            <input onChange ={(e)=>setUsernameR(e.target.value)} id="username" type="text" required/>
          </div>
          <div className="input-block">
            <label for="signup-password">Password</label>
            <input onChange={(e)=>{setPassWordR(e.target.value)}} id="signup-password" type="password" required/>
          </div>
        </fieldset>
    <h7 className="text-tertiary">{msgR}</h7>
        <button type="submit" className="btn-signup">Register</button>
      </form>
    </div>
  </div>
</section>
        
      </div>
       <Footer/></>)
      }
    </div>
   
    </>
    )     
    
}

export default LogReg