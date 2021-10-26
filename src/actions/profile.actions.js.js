export async function getProfile(accessToken,userHandle){
    return  fetch(`https://api.codedigger.tech/auth/profile/${userHandle}/`, {
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${accessToken}`
        }
        }).then(data => data.json());
}

export async function getInfoBySite(userHandle,platform){
    return  fetch(`https://api.codedigger.tech/auth/profile/${userHandle}/?platform=${platform}`)
            .then(data => data.json());
}

export async function getFriendReq(accessToken){
    return  fetch (`https://api.codedigger.tech/auth/user/show-request`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${accessToken}`
        }
    }).then(data => data.json());
}
