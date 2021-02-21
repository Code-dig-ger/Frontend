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
    return fetch('https://api.codedigger.tech/auth/register/',{
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
            "redirect_url":"http://localhost:3000/setNewPass"
            
        })
        })
}

export function sendVerEmail(emailR){
    return fetch('https://api.codedigger.tech/auth/send-email/',{
            method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "email":emailR,
           
        })
        }).then(data => data.json());
}