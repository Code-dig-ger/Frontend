

async function Validate(){
    
    const toValidate=await JSON.parse(localStorage.getItem("creds"));
    const acc=toValidate.access;
    const ref=toValidate.refresh;
    const first=toValidate.first;
    const username=toValidate.username;
    const response=await fetch(`https://api.codedigger.tech/auth/check-auth/`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${acc}`
        },
        

        })
        console.log("validation");

        if(response.status!==200){
           const refResponse=await fetch('https://api.codedigger.tech/auth/token/refresh/',{
               method:"POST",
               headers:{
                "Content-Type":"application/json",
               
               },
               body:JSON.stringify({
                   "refresh":ref
               })
           })
           
           //refResponse gives access token if valid ref token is passed else not

           if(refResponse.status==200){
               console.log('getting new');
               const newData=await refResponse.json();
              const newAcc=newData.access;
               localStorage.setItem("creds",JSON.stringify({
         
                access:newAcc,
                refresh:ref,
                first:first,
                username:username
      
              }));

           }
           else{
               localStorage.clear();
               window.location='/logreg'
           }

            
         }
   
}
export default Validate