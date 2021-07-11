export function getProblems(queryStr){
    return fetch(`https://api.codedigger.tech/problems/${queryStr}`, {
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then(data => data.json());
} 

export function getProblemsWithCreds(queryStr,acc){
    return fetch(`https://api.codedigger.tech/problems/${queryStr}`, {
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization":`Bearer ${acc}`
                    }
                }).then(data => data.json());
} 
