export function getMentors(acc){
    return fetch(`https://api.codedigger.tech/codeforces/mentor`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${acc}`
        }
    }).then(data => data.json());
}

export function removeMentor(acc,mname){
    return fetch (`https://api.codedigger.tech/codeforces/mentor`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${acc}`
        },
        body:JSON.stringify({
            "guru":mName
        })
    }).then(data => data.json());
}

export function addmentor(acc,guru){
    return fetch (`https://api.codedigger.tech/codeforces/mentor`,{
        method:"PUT",
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${acc}`
        },
        body:JSON.stringify({
            "guru":guru
        })
    }).then(data => data.json());
}