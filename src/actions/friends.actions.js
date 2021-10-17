export async function getFriends(acc){
    // console.log("KKKK");
        return fetch(`https://api.codedigger.tech/auth/user/friends`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${acc}`
            }
        })
        .then(data => data.json());
};

export async function acceptReq(acc,from_user){
    // console.log("KKKK");
        return fetch(`https://api.codedigger.tech/auth/user/accept-request`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${acc}`
            },
            body:JSON.stringify({
                "from_user":from_user
            })
        })
        .then(data => data.json());
};

export async function removeFrnd(acc,handle) {
    return fetch(`https://api.codedigger.tech/auth/user/remove-friend`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${acc}`,
        },
        body:JSON.stringify({
            "user":handle
        })
    })
    .then(data => data.json());
}

export async function sendReq(acc,to_user){
    return fetch(`https://api.codedigger.tech/auth/user/send-request`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${acc}`,
            },
            body:JSON.stringify({
                "to_user":to_user
            })
        })
        .then(data => data.json());
}

export async function showReq(acc){
    return fetch (`https://api.codedigger.tech/auth/user/show-request`,{
      method:"GET",
      headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${acc}`
      }
    })
     .then(data => data.json());
}

export async function showSendReq(acc){
    return fetch (`https://api.codedigger.tech/auth/user/show-send-request`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${acc}`
        }
      })
     .then(data => data.json());
}