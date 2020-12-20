import React, { useState} from 'react'
import './logreg.style.css'
import Loading from './loading'


const LogReg =()=>{
   
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
      <div>
        {
          show?(<Loading/>):(
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
            <label for="login-email">E-mail / Username</label>
            <input  className="text-black" id="login-email" type="email" required/>
          </div>
          <div className="input-block">
            <label for="login-password">Password</label>
            <input id="login-password" type="password" required/>
          </div>
        </fieldset>
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
      <form className="form form-signup">
        <fieldset>
          <legend>Please, enter your email, password and password confirmation for sign up.</legend>
          <div className="input-block">
            <label for="signup-email">E-mail</label>
            <input id="signup-email" type="email" required/>
          </div>
          <div className="input-block">
            <label for="signup-password">Password</label>
            <input id="signup-password" type="password" required/>
          </div>
          <div className="input-block">
            <label for="signup-password-confirm">Confirm password</label>
            <input id="signup-password-confirm" type="password" required/>
          </div>
        </fieldset>
        <button type="submit" className="btn-signup">Continue</button>
      </form>
    </div>
  </div>
</section>
        
      </div>)
      }
    </div>
    )     
    
}

export default LogReg