import React,{useState,useEffect} from 'react'
import Validate from '../../helpers/Validate'
import './upsolve.style.css'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-multi-carousel';
import Loading from '../logreg/loading'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/FooterSmall'
import '../../../node_modules/reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

const Codechef=()=>{
    //Validate();
    const pageNumbers=[];
    
    const [page,setPage]=useState(1);
    const [loader,setLoader]=useState(false);
    const [prev,setPrev]=useState(null);
    const [next,setNext]=useState(2);
    const [first,setFirst]=useState(1);
    const [last,setLast]=useState(null);
    const [conData,setData]=useState([]);
    const [curPage,setCurPage]=useState(1);
    useEffect(()=>{

        setFirst(null);
        setLast(null);
        setPage(page);
        setPrev(null);
        setNext(null);
        Validate();
      async function fetchData(){
        //Validate();
   
        const creds=JSON.parse(localStorage.getItem("creds"));
        const acc=creds.access; 
        const response=await fetch('https://api.codedigger.tech/problems/upsolve/codechef',{
         method:"GET",
         headers:{
             "Content-Type":"application/json",
             "Authorization":`Bearer ${acc}`
         },
         
        })
       // console.log(response);
        if(response.status===200){
            const data=await response.json();
            if(data.status==="OK"){
             // setData(data);
               // console.log("yipee");
                
                const newLinks=data.links;
                setFirst(newLinks.first.split("=")[1]);
                setLast(newLinks.last.split("=")[1]);
                if(newLinks.prev!==null){
                setPrev(newLinks.prev.split("=")[1]);
                }
                if(newLinks.next!==null){
                    setNext(newLinks.next.split("=")[1])
                }
               setLast(data.meta.last_page);
               await setCurPage(data.meta.current_page);
            }
            else{
                console.log("sad");
            }
            
         // console.log(data);
            const result=await (data.result);
             await setData(result);
             setLoader(false);
               
          }
          else{
            //console.log("err");
            const data=await response.json();
              localStorage.setItem("err",data.error);
              window.location='/home'  
            
          }
              
        
    }
        
        
   
 
 fetchData()

 
  
},[page]);
if(last!=null){
    for(let i=1;i<=last;i++){
      pageNumbers.push(i);
    }
    }
    const responisve={superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
    };
    



        return(
            <>

            <Navbar/><br></br><br></br><br></br>
            {loader?<Spinner className="loading-animation" animation="border"/>:
            <>
           
            
            {conData.length>0?
            <>

<div className="upperButtons">
  <h5>CODECHEF</h5>
          {
            page!==1?
            <button onClick={()=>{
              setTimeout(()=>{setLoader(true)},1000)
             setPage(prev)}} className='page-link'>{`< Prev`}</button>:<></>}

<h6 className="green">Solved</h6><h6 className="red">Wrong</h6><h6 className="blue">Upsolved</h6><h6 className="viol">Not attempted</h6>

{page!==last?
<button onClick={()=>{
                 setTimeout(()=>{setLoader(true)},1000)
setPage(next)}} className='page-link'>{`Next >`}</button>:<></>}</div>


             <div><button className="vir" onClick={e=>{window.location.reload(false)}}>Solved? Update</button></div><br></br><br></br>
        {conData.map(res=>{
          return(
            <>
            {res.problems.length>0?
            <>
            <Row className="contestRow">
    <Col sm={2} md={2} lg={3}>< div className="contestName text-white"><h6>{res.name}</h6></div></Col>
    <Col sm={2} md={2} lg={9}><Carousel responsive={responisve}>
               
               { 
              
              res. problems.map((prob)=>{
                   if(prob.status==="solved"){
                   return(
                   <Col><div className="solved" ><h7>{prob.difficulty}-{prob.name}</h7><br></br><a className="link" href={prob.url} target="_blank">Solve</a> <Popup trigger={<button className="tags"> Tags</button>} position="right center">
                   <div className="tagsbox">{prob.tags.substring(1,prob.tags.length-1)}</div>
  </Popup></div></Col>
                   )}
                   else if(prob.status==="wrong"){
                   return(
                   <Col> <div className="wrong"><h7>{prob.difficulty}-{prob.name}</h7><br></br><a className="link" href={prob.url} target="_blank">Solve</a> <Popup trigger={<button className="tags"> Tags</button>} position="right center">
                  <div className="tagsbox">{prob.tags.substring(1,prob.tags.length-1)}</div>
  </Popup></div></Col>
                   )}
                   else if(prob.status==="upsolved"){
                   return(
                   <Col> <div className="upsolve"><h7>{prob.difficulty}-{prob.name}</h7><br></br><a className="link" href={prob.url} target="_blank">Solve</a> <Popup trigger={<button className="tags"> Tags</button>} position="right center">
                   <div className="tagsbox">{prob.tags.substring(1,prob.tags.length-1)}</div>
  </Popup><br></br>
                   </div></Col>
                   

                   )}
                   return (
                    <Col> <div className="not_attempted"><h7>{prob.difficulty}-{prob.name}</h7><br></br><a className="link" href={prob.url} target="_blank">Solve</a> <Popup trigger={<button className="tags"> Tags</button>} position="right center">
                    <div className="tagsbox">{prob.tags.substring(1,prob.tags.length-1)}</div>
   </Popup><br></br>
                    </div></Col>
                   )
               })}
               </Carousel></Col>
               </Row><br></br></>:<></>}</>)})}

               <div >
                    <nav className="paginator">
            <ul className='pagination'>
                <a onClick={()=>{
                  setTimeout(()=>{setLoader(true)},1000)

                  setPage(first)}} className='page-link'>First</a>
            {      
            page!==1?
           <a onClick={()=>{
              setTimeout(()=>{setLoader(true)},1000)
              
             setPage(prev)}} className='page-link'>{`<`}</a>:<></>}

              {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                  <a onClick={() =>{
                      setTimeout(()=>{setLoader(true)},1000)
                      setPage(number)
                      setCurPage(number)}} className={`page-link ${page===number?`active-page`:''}`}>
                    {number}
                  </a>
                </li>
              ))}
              {
                page!==last?
              <a onClick={()=>{
                 setTimeout(()=>{setLoader(true)},1000)
                setPage(next)
                setCurPage(next)}} className='page-link'>{`>`}</a>:<></>}
             <a onClick={()=>{
                setTimeout(()=>{setLoader(true)},1000)
               setPage(last)
               setCurPage(last)}} className='page-link'>Last</a>
            </ul>
            </nav>
              </div>
               <Footer/>
              
              </>:<Loading/>}
              </>}
              </>
          
          
        )
}
export default Codechef;