import React, {useState, useEffect} from 'react'
import Validate from '../../Validate'
import Upsolve from './upsolve.page';

function Codeforces(){

    Validate();
    const pageNumbers=[];
    
    const [page,setPage]=useState(1);
    const [prev,setPrev]=useState(null);
    const [next,setNext]=useState(2);
    const [first,setFirst]=useState(1);
    const [last,setLast]=useState(6);
 
    useEffect(()=>{
      async function fetchData(){
           const creds=JSON.parse(localStorage.getItem("creds"));
           const acc=creds.access; 
           const response=await fetch(`https://api.codedigger.tech/problems/upsolve/codeforces?page=${page}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${acc}`
            },
            
           })
           if(response.status===200){
            const data=await response.json();
                  if(data.status==="OK"){
                   // setData(data);
                      console.log("yipee");
                      console.log(data.links)
                      const newLinks=data.links;
                      setFirst(newLinks.first.split("=")[1]);
                      setLast(newLinks.last.split("=")[1]);
                      if(newLinks.prev!==null){
                      setPrev(newLinks.prev.split("=")[1]);
                      }
                      if(newLinks.next!==null){
                          setNext(newLinks.next.split("=")[1])
                      }
                     
                  }
                  else{
                      console.log("sad");
                  }
                  console.log(data);
                  
           }
           else{
               console.log("err");
           }

           
           
      
    } 
    fetchData();
    
},[page])
for(let i=1;i<=last;i++){
    pageNumbers.push(i);
}

     return(
         <>
         <div>
         
         <h1>Codeforces</h1>
         </div>
         <div>
              <nav>
      <ul className='pagination'>
          <a onClick={()=>setPage(first)} className='page-link'>First</a>
     <a onClick={()=>setPage(prev)} className='page-link'>{`<`}</a>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => setPage(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
        <a onClick={()=>setPage(next)} className='page-link'>{`>`}</a>
       <a onClick={()=>setPage(last)} className='page-link'>Last</a>
      </ul>
    </nav>
         </div>
         </>
     ) 
      
    
}
export default Codeforces;