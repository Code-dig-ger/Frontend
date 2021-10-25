
export async function codeforces(accessToken, vir,page){
   return await fetch(`https://api.codedigger.tech/problems/upsolve/codeforces?${vir?`virtual=true;page=${page}`:`page=${page}`}`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${accessToken}`
    },
    
   })
}
export async function codechef(accessToken,page){
    return await fetch(`https://api.codedigger.tech/problems/upsolve/codechef?page=${page}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${accessToken}`
        },
        
       })
}
export async function atcoder(accessToken,page,Prac){
    return await fetch(`https://api.codedigger.tech/problems/upsolve/atcoder?${Prac?`practice=true;page=${page}`:`page=${page}`}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${accessToken}`
        },
        
       })
}