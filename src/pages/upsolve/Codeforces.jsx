import React, {useState, useEffect} from 'react'
import Validate from '../../helpers/Validate'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-multi-carousel';
import Navbar from '../../components/Header/Navbar'
import Loading from '../logreg/loading'
import './upsolve.style.css'
import Spinner from 'react-bootstrap/Spinner'
import Footer from '../../components/Footer/FooterSmall'
import '../../../node_modules/reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import Tags from '../../assets/upsolve/tags-icon2.png'

import logo from '../../assets/upsolve/codeforces_logo.png'
import refresh from '../../assets/upsolve/reload.png'
import ToggleButton from 'react-toggle-button'

//import actions
import {codeforces} from '../../actions/upsolve.actions'

function Codeforces(){
 
  const pageNumbers=[];
   let count =1; 
    const [page,setPage]=useState(1);
    const [curPage,setCurPage]=useState(1);
    const [loader,setLoader]=useState(false);
    const [prev,setPrev]=useState(null);
    const [next,setNext]=useState(2);
    const [first,setFirst]=useState(1);
    const [last,setLast]=useState();
    const [conData,setData]=useState([]);
    const [vir,setVir]=useState(false);
   
    const width={width:200}
   
    
    
  
   

    useEffect(()=>{
     
    
      setFirst(1);
      setLast(null);
      setPage(page);
      setPrev(null);
      setNext(null);
       Validate();
      async function fetchData(){
       
        
           const creds=JSON.parse(localStorage.getItem("creds"));
           const acc=creds.access; 
          
           const response=await codeforces(acc,vir,page);
           if(response.status===200){
            const data=await response.json();
                  if(data.status==="OK"){
                  
                      const newLinks=data.links;
                      setFirst(newLinks.first.split("=")[1]);
                      setLast(newLinks.last.split("=")[1]);
                      if(newLinks.prev!==null){
                      setPrev(newLinks.prev.split("=")[1]);
                      }
                      if(newLinks.next!==null){
                          setNext(newLinks.next.split("=")[1])
                      }
                     await setLast(data.meta.last_page);
                     setCurPage(data.meta.current_page);
                     
                     //console.log(first+" "+last)
                  
                    }
                
                  const result=await (data.result);
                   await setData(result);
                   setLoader(false);
                  
                
           }
           else{
        
            localStorage.setItem("err",data.error);
            window.location='/home'  

           }

          // console.log(page)
           
      
    
         
    }
    fetchData();
   
    
},[page,vir])
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
      <div className="body">
      <Navbar></Navbar><br></br><br></br><br></br><br></br><br></br>
      {loader?<Spinner className="loading-animation" animation="border"/>:
      <>
               
     
        {conData.length>0?
        <>
      <img style={{width:'220px',height:'50px'}}src={logo}/>
 
 <div style={{display:"flex",float:"right"}}>
 
               <div style={{float:"right",backgroundColor:'white',borderRadius:'5px',alignItems:"center"}}> 
               <h6 style={{padding:"3px",color:"black",marginTop:'6px'}}>Include virtual</h6>
       <ToggleButton
       inactiveLabel={''}
       activeLabel={''}
      
  value={ vir || false }
  onToggle={(val) => {
   setVir(!vir)
   setTimeout(()=>{setLoader(true)},1000)
   setPage(1);
  }} /></div>
  <div><button title="solved? update" style={{float:'right',borderRadius:'35px'}} onClick={e=>{window.location.reload(false)}}><img style={{width:'50px',height:'52px'}}src={refresh}></img></button></div>
              </div><br></br><br></br>
       
        
        


        
     

       { conData.map(res=>{
          return(
            <>
           
            {res.problems.length>0?
            
            <>
            <Row className="contestRow">
    <Col sm={2} md={2} lg={3}>< div className={`contestName`}><h6>{res.name}</h6> 
   </div>
    </Col>
    
    <Col sm={2} md={2} lg={9}><Carousel responsive={responisve}>
    
               { 
             
              res. problems.map((prob)=>{
                   if(prob.status==="solved"){
                   return(
                  
                   <Col><div className={`solved`} ><a href={prob.url} target="_blank"><h7>{prob.index}-{prob.name}</h7></a><br></br><br></br>
                  <Popup trigger={<img style={{width:"25px",height:"15px",float:"right",marginTop:"14px"}} src={Tags}></img>} position="right">
                   <div className="tagsbox">{prob.tags.substring(1,prob.tags.length-1)}</div></Popup>
                   <h7 className="green">SOLVED</h7>
                   </div></Col>
                   
  
                   
                   )}
                   else if(prob.status==="wrong"){
                   return(
                   <Col> <div className={`wrong`}><a href={prob.url} target="_blank"><h7 >{prob.index}-{prob.name}</h7></a><br></br><br></br>
                   <Popup trigger={<img style={{width:"25px",height:"15px",float:"right",marginTop:"14px"}} src={Tags}></img>} position="right">
                    <div className="tagsbox">{prob.tags.substring(1,prob.tags.length-1)}</div></Popup>
                    <h7 className="red">WRONG</h7>
                    </div></Col>
                   )}
                   else if(prob.status==="upsolved"){
                   return(
                   <Col> <div className={`upsolved`}><a  href={prob.url} target="_blank"><h7 >{prob.index}-{prob.name}</h7></a><br></br><br></br>
                   <Popup trigger={<img style={{width:"25px",height:"15px",float:"right",marginTop:"14px"}} src={Tags}></img>} position="right">
                    <div className="tagsbox">{prob.tags.substring(1,prob.tags.length-1)}</div></Popup>
                    <h7 className="blue">UPSOLVED</h7>
                    </div></Col>
                   )}
                   return (
                    <Col> <div className={`not_attempted`}><a href={prob.url} target="_blank"><h7 >{prob.index}-{prob.name}</h7></a><br></br><br></br>
                    <Popup trigger={<img style={{width:"25px",height:"15px",float:"right",marginTop:"14px"}} src={Tags}></img>} position="right">
                     <div className="tagsbox">{prob.tags.substring(1,prob.tags.length-1)}</div></Popup>
                     <h7 className="viol">NOT ATTEMPTED</h7>
                     </div></Col>
                   )
               })}
               </Carousel></Col>
               {
               count>=6?count=1:count+=1}
              </Row><br></br></>:<></>}</>)})}
              <div className="paginate">
                    <nav className="paginator">
            <ul className='pagination'>
              {page!=1?
                <a style={{padding:'15px'}} onClick={()=>{
                  setPage(1)
                  setTimeout(()=>{setLoader(true)},1000)

                  }} className='page-link'>First</a>:<></>}
            {      
            page!=1?
           <a style={{padding:'15px'}} onClick={()=>{
              setTimeout(()=>{setLoader(true)},1000)
              
             setPage(prev)}} className='page-link'>{`<`}</a>:<></>}

              {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                  <a style={{padding:'15px'}} onClick={() =>{
                      setTimeout(()=>{setLoader(true)},1000)
                       setPage(number)
                       setTimeout(100)
                      setCurPage(number)}} className={`${page==number?`active-page`:'page-link'}`}>
                    {number}
                  </a>
                </li>
              ))}
              {
                page!=last?
              <a style={{padding:'15px'}}onClick={()=>{
                 setTimeout(()=>{setLoader(true)},1000)
                setPage(next)
                setCurPage(next)}} className='page-link'>{`>`}</a>:<></>}
                {page!=last?
             <a style={{padding:'15px'}}onClick={()=>{
                setTimeout(()=>{setLoader(true)},1000)
               setPage(last)
               setCurPage(last)}} className='page-link'>Last</a>:<></>}
            </ul>
            </nav>
              </div>
              
              <Footer/>
              
              </>:<Loading/>}
              </>}
              </div>
            
               
  ) 
      
       
}
export default Codeforces
