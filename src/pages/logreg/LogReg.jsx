import React, { useState} from 'react'
import './logreg.style.css'
import Loading from './loading'
import Navbar from '../../components/Header/Navbar'
import FooterSmall from '../../components/Footer/FooterSmall';
import '../../../node_modules/reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import Eye from '../../assets/Eye.png'
import Spinner from 'react-bootstrap/Spinner'
import {GoogleLogin} from 'react-google-login'
import GoogleIcon from '../../assets/logreg/google-icon2.png'
//actions import
import {register} from '../../actions/auth.actions'
import {sendVerEmail} from '../../actions/auth.actions'
import {login} from '../../actions/auth.actions'
import leftlowerIcon from '../../assets/logreg/ne2.png'


const LogReg =()=>{
 
  

  
  //states and handler for register
  const [emailR,setEmailR]=useState("");
  const [usernameR,setUsernameR] =useState("");
  const [passwordR,setPassWordR]=useState("");
  const [msgR,setmsgR]=useState("");
  const [togR,setTogR]=useState(true);
  const [loaderR,setLoaderR]=useState(false);
  let err=localStorage.getItem("err");
  localStorage.removeItem("err");
  async function Register(e){
    e.preventDefault();
    if(passwordR.length<1||usernameR.length<1||emailR.length<1)
    {
      alert("Fields should not remain blank");
      return;
    }
    setLoaderR(true);
     
        const data=await register(emailR,usernameR,passwordR);
        //console.log(data)
        if(data.status==="OK"){
          setmsgR("Successful, verify your email");
        }
        else if(data.status=="FAILED"){
          setmsgR(data.error)
        }
       else{ 
             
            let msg="";
            if(data.email){
            msg=msg+" email:"+data.email[0]+'\n';
            
            }
            if(data.username){
              msg=msg+" username :"+data.username[0]+'\n';
             
            }
            if(data.password){
              msg=msg+" password :"+data.password[0];
            }
            setmsgR(msg);
          }
           setLoaderR(false);
    
  }
  async function handleGoogleSuccess(response){
    // console.log("onSuccess");
    const c=await response.tokenId;
  // console.log(c);
    const resp=await fetch('https://api.codedigger.tech/social_auth/google/',{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          "auth_token":c,
         
      })
      })
      const data=await resp.json();
     //console.log(data);
      if(resp.status!==200){
        alert(data.detail);
      }
      else{
        
        localStorage.setItem("creds",JSON.stringify({
     
          access:data.tokens.access,
          refresh:data.tokens.refresh,
          first:data.first_time,
          username:data.username
          
        }))
    if(data.first_time===true){

          window.location='/profile/:id'
         }
         else{
         window.location='/home'
         }
         //console.log(c);
                
     
      }
    
  }
  function handleGoogleFail(response){
    // console.log(response)
    alert("failed")
  }

  async function Sendagain(e){
    e.preventDefault();
    setLoaderR(true);
      const data=await sendVerEmail(emailR);
       // console.log(data);
       
setLoaderR(false);
setmsgR(data.result);

  }

  //states and handler for login
     const [usernameL,setUserNameL]=useState("");
     const [passwordL,setpasswordL]=useState("");
     const [msgL,setmsgL]=useState("");
     const [first,setFirst] =useState(false);
     const [togL,setTogL] =useState(true);
     const [loaderL,setLoaderL]=useState(false);
 
   async  function Login(e){

      e.preventDefault();
      if(usernameL.length<1||passwordL.length<1){
        alert("Fields should not remain blank")
        return;
      }
      setLoaderL(true);
      const data=await login(usernameL,passwordL);
     // console.log(data);
      if(data.status=="FAILED"){
        setmsgL(data.error);
      } 
      else if(data.tokens){
       
          setmsgL(`Hello, ${usernameL}`)
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
      else if(data.password) 
      {
        setmsgL("Password :"+data.password[0]);
      }
      else if(data.username){
        setmsgL("Username :"+data.username[0]);
      }
      
      setLoaderL(false);
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
      <Navbar/><br></br><br></br><br></br>
      {
     err?
      
      
     <Popup open={true} >
      <div style={{color:'white',backgroundColor:'black',padding:'4px'}}>{err}</div>
   </Popup>
     
    :<></>
     
   }
      <div>
        {
          show?(<Loading/>):(<>{/**start */}
          <div style={{alignItems:'center',float:'left',width:'40%',paddingLeft:'60px'}}>
         <img src={leftlowerIcon} style={{marginLeft:'50px',width:'480px',height:'480px',marginTop:'65px'}}></img>     
         </div>

       <div className="ContBody">

      <section className="forms-section">
  <div className="forms">
    <div className="form-wrapper is-active">
      <button type="button" className="switcher switcher-login">
        Login
        <span className="underline"></span>
      </button>
        
      <form className="form form-login">
        <fieldset>
          <legend>Please, enter your email and password for login.</legend>
          <div className="input-block">
            <label for="login-email">Username</label>
            <input required onChange={(e)=>setUserNameL(e.target.value)}  id="login-email" type="text" required/>
          </div>
          <div className="input-block">
            <label for="login-password">Password</label>
           
            <input required onChange={(e)=>setpasswordL(e.target.value)} id="login-password" type={(togL)?"password":"text"} required></input>
           
            <span  class="field-icon toggle-password"><img style={{marginRight:'4px'}} src={Eye} onClick={e=>{
              e.preventDefault();
            setTogL(!togL)}} className="eye"></img></span>
          </div>
        </fieldset>
      {msgL.length>0?
       <Popup open={true} >
      <div style={{color:'white',backgroundColor:'black',padding:'4px'}}>{msgL}</div>
   </Popup>:<></>}
     
        <button onClick={Login} type="submit" className="btn-login">{loaderL?'Processing..':'Login'}</button>
        {loaderL?<Spinner className="loading-animation" animation="border"/>:<></>}
        <div className="loginops">
    <img style={{width:'35px',height:'35px','margin-top':'4px'}} src={GoogleIcon}></img>
      <GoogleLogin 
        clientId={process.env.REACT_APP_CLIENTID}
        buttonText="Login with Google"
        onSuccess={handleGoogleSuccess}
       //onFailure={handleGoogleFail}
        cookiePolicy={"single_host_origin"}
        icon={false}
        /></div><br></br>
        <div style={{'display':'block','text-align':'center','font-size':'16px'}}><a href='/ForgPass'>Forgot Password ?</a></div>
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
            <span  class="field-icon toggle-password"><img style={{marginRight:'4px'}} src={Eye} onClick={e=>{
              e.preventDefault();
              setTogR(!togR)}} className="eye"></img></span>
          </div>
        </fieldset>
        {msgR.length>0?
        <Popup open={true}>
      <div style={{color:'white',backgroundColor:'black',padding:'4px'}}>{msgR}</div>
   </Popup>:<></>}
        <button onClick={Register} type="submit" disable={loaderR} className="btn-signup"> {loaderR?'Processing..':
       'Register'}
          </button>
          {loaderR?<Spinner className="loading-animation" animation="border"/>:<></>}
          </>
        :
        <>
        <h7 className="goodmsgs">{`We have sent you a verification link on ${emailR} (Please check your spam folder too!).`}</h7><br></br><h7 className="goodmsgs">{`Please verify your email and move to login. \n If you haven't recieved any mail regarding this, click here to send again.`}</h7>
        <button className="goodmsgs" onClick={Sendagain}>Send again</button></>}
      </form>


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