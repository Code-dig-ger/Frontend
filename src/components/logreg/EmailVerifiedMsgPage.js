import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/FooterSmall'
const EmailVerifiedMsg=()=>{
      return(
          <>
          <Navbar></Navbar><br></br><br></br><br></br>
        <div style={{display:'block',margin:'auto',padding:'40px',border:'2px solid white'}}>
            <h4>Your email has been successfully activated.Please move to login.</h4>
            <a style={{backgroundColor:'green',textAlign:'center',display:'block',margin:'auto'
        }} href='/login'>Go to Login</a>
        </div>
        <Footer></Footer>
        </>
      )
}
export default EmailVerifiedMsg