import React from 'react';

export function getProblems(queryStr){
    return fetch(`https://api.codedigger.tech/problems/${queryStr}`, {
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then(data => data.json());
} 