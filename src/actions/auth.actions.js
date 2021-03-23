export function login(usernameL,passwordL){
    return fetch('https://api.codedigger.tech/auth/login/',{
          method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
         "username":usernameL,
         "password":passwordL
      })
      }).then(data => data.json());
}

export function register (emailR, usernameR, passwordR){
    return fetch(`https://api.codedigger.tech/auth/register/?redirect_url=https://demo.codedigger.tech/email-verified`,{
            method:"POST",
        headers:{
            "Content-Type":"application/json"
           },
        body:JSON.stringify({
            "email":emailR,
            "username":usernameR,
            "password":passwordR
        })
        }).then(data => data.json());
}

export function passreqEmail(email){
    return fetch('https://api.codedigger.tech/auth/request-reset-email/',{
            method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "email":email,
            "redirect_url":"https://demo.codedigger.tech/setNewPass"
            
        })
        })
}
export function setNewPass(password,token,uidb64){
    return fetch('https://api.codedigger.tech/auth/password-reset-complete',{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "password":password,
            "token":token,
            "uidb64":uidb64
         })
    }).then(data=>data.json());
}

export function sendVerEmail(emailR){
    return fetch(`https://api.codedigger.tech/auth/send-email/?redirect_url=https://demo.codedigger.tech/email-verified`,{
            method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "email":emailR,
           
        })
        }).then(data => data.json());
}
export function NewPassRequest(oldPass,NewPass,acc){
    return fetch('https://api.codedigger.tech/auth/password-change/',{
        method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${acc}`    },
    body:JSON.stringify({
        "old_pass":oldPass,
        "new_pass":NewPass
       
    })
    }).then(data => data.json());
}