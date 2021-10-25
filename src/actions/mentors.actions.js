export async function getMentors(accessToken){
    return await fetch(`https://api.codedigger.tech/codeforces/mentor`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${accessToken}`
        }
    }).then(data => data.json());
}

export async function removeMentor(accessToken,mentorName){
    return await fetch (`https://api.codedigger.tech/codeforces/mentor`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${accessToken}`
        },
        body:JSON.stringify({
            "guru":mentorName
        })
    }).then(data => data.json());
}

export async function addmentor(accessToken,mentorName) {
    return await fetch (`https://api.codedigger.tech/codeforces/mentor`,{
        method:"PUT",
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${accessToken}`
        },
        body:JSON.stringify({
            "guru":mentorName
        })
    }).then(data => data.json());
}