
export async function codeforces(acc, vir,page){
   return await fetch(`https://api.codedigger.tech/problems/upsolve/codeforces?${vir?`virtual=true;page=${page}`:`page=${page}`}`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${acc}`
    },
    
   })
}
export async function codechef(acc,page){
    return await fetch(`https://api.codedigger.tech/problems/upsolve/codechef?page=${page}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${acc}`
        },
        
       })
}
export async function atcoder(acc,page,Prac){
    return await fetch(`https://api.codedigger.tech/problems/upsolve/atcoder?${Prac?`practice=true;page=${page}`:`page=${page}`}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${acc}`
        },
        
       })
}