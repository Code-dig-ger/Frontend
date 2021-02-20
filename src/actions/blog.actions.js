import React from 'react';

export function getBlogs(){
    return fetch('https://api.codedigger.tech/blog/',{
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        }
    }).then(data => data.json());
}

export function getThisBlog(blog){
    return fetch(`https://api.codedigger.tech/blog/${blog}`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        }
    }).then(data => data.json());
}
