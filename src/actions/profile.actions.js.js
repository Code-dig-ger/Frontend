export function getProfile(acc,handle){
    return fetch(`https://api.codedigger.tech/auth/profile/${handle}/`, {
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${acc}`
        }
        }).then(data => data.json());
}

export function getInfoBySite(handle,platform){
    return fetch(`https://api.codedigger.tech/auth/profile/${handle}/?platform=${platform}`)
            .then(data => data.json());
}

export function getFriendReq(acc){
    return fetch (`https://api.codedigger.tech/auth/user/show-request`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${acc}`
        }
    }).then(data => data.json());
}
