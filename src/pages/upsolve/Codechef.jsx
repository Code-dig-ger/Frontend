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
import Right from '../../assets/rightarrow.png'
import Left from '../../assets/leftarrow.png'
import Tags from '../../assets/tags-icon2.png'
import logo from '../../assets/codechef.png'
//actions import
import {codechef} from '../../actions/upsolve.actions'
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
        const response=await codechef(acc,page)
        if(response.status===200){
            const data=await response.json();
            if(data.status==="OK"){
            
                const newLinks=data.links;
                await setFirst(newLinks.first.split("=")[1]);
                await setLast(newLinks.last.split("=")[1]);
                if(newLinks.prev!==null){
                setPrev(newLinks.prev.split("=")[1]);
                }
                if(newLinks.next!==null){
                    setNext(newLinks.next.split("=")[1])
                }
               await setLast(data.meta.last_page);
               await setCurPage(data.meta.current_page);
            }
            else{
                console.log("sad");
            }
            
         
            const result=await (data.result);
             await setData(result);
             setLoader(false);
               
          }
          else{
        
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
      items: 3
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

            <Navbar/><br></br><br></br><br></br><br></br>
            {loader?<Spinner className="loading-animation" animation="border"/>:
            <>
           
            
            {conData.length>0?
            <>
<div style={{display:"flex"}}>
 <h3 textAlign="center">CODECHEF</h3><img style={{width:'60px',height:'50px'}}src={logo}/></div>
 <div><button className="vir" onClick={e=>{window.location.reload(false)}}>Solved? Update</button></div>
<div className="upperButtons">
  
          {
            page!=1?
            <button onClick={()=>{
              setTimeout(()=>{setLoader(true)},1000)
               setPage(prev)}} className='page-link'><img style={{height:'30px',width:'30px'}} src={Left}></img></button>:<></>
          }
            

{page!=last?

<button onClick={()=>{
                 setTimeout(()=>{setLoader(true)},1000)
               setPage(next)}} className='page-link'><img style={{height:'30px',width:'30px'}}src={Right}></img></button>:<></>}</div>
                <br></br>
               

             
        {conData.map(res=>{
          return(
            <>
            {res.problems.length>0?
            <>
            <Row className="contestRow">
    <Col sm={2} md={2} lg={3}>< div className="contestName"><h6>{res.name}</h6></div></Col>
    <Col sm={2} md={2} lg={9}><Carousel responsive={responisve}>
               
               { 
              
              res. problems.map((prob)=>{
                   if(prob.status==="solved"){
                   return(
                    <Col><div className="solved" ><a href={prob.url} target="_blank"><h7>{prob.index}-{prob.name}</h7></a><br></br>
                    <Popup trigger={<img style={{width:"25px",height:"15px",float:"right",marginTop:"14px"}} src={Tags}></img>} position="right">
                     <div className="tagsbox">{prob.tags.substring(1,prob.tags.length-1)}</div></Popup>
                     <h7 className="green">SOLVED</h7>
                     </div></Col>
                   )}
                   else if(prob.status==="wrong"){
                   return(
                    <Col> <div className="wrong"><a href={prob.url} target="_blank"><h7 >{prob.index}-{prob.name}</h7></a><br></br>
                    <Popup trigger={<img style={{width:"25px",height:"15px",float:"right",marginTop:"14px"}} src={Tags}></img>} position="right">
                     <div className="tagsbox">{prob.tags.substring(1,prob.tags.length-1)}</div></Popup>
                     <h7 className="red">WRONG</h7>
                     </div></Col>
                   )}
                   else if(prob.status==="upsolved"){
                   return(
                    <Col> <div className="upsolve"><a  href={prob.url} target="_blank"><h7 >{prob.index}-{prob.name}</h7></a><br></br>
                   <Popup trigger={<img style={{width:"25px",height:"15px",float:"right",marginTop:"14px"}} src={Tags}></img>} position="right">
                    <div className="tagsbox">{prob.tags.substring(1,prob.tags.length-1)}</div></Popup>
                    <h7 className="blue">UPSOLVED</h7>
                    </div></Col>
                   

                   )}
                   return (
                    <Col> <div className="not_attempted"><a href={prob.url} target="_blank"><h7 >{prob.index}-{prob.name}</h7></a><br></br>
                    <Popup trigger={<img style={{width:"25px",height:"15px",float:"right",marginTop:"14px"}} src={Tags}></img>} position="right">
                     <div className="tagsbox">{prob.tags.substring(1,prob.tags.length-1)}</div></Popup>
                     <h7 className="viol" >NOT ATTEMPTED</h7>
                     </div></Col>
                   )
               })}
               </Carousel></Col>
               </Row><br></br></>:<></>}</>)})}

               <div >
                    <nav className="paginator">
            <ul className='pagination'>
              {page!=1?
                <a onClick={()=>{
                  setTimeout(()=>{setLoader(true)},1000)

                  setPage(first)}} className='page-link'>First</a>:<></>}
            {      
            page!=1?
           <a onClick={()=>{
              setTimeout(()=>{setLoader(true)},1000)
              
             setPage(prev)}} className='page-link'>{`<`}</a>:<></>}

              {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                  <a onClick={() =>{
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
              <a onClick={()=>{
                 setTimeout(()=>{setLoader(true)},1000)
                setPage(next)
                setCurPage(next)}} className='page-link'>{`>`}</a>:<></>}
                {page!=last?
             <a onClick={()=>{
                setTimeout(()=>{setLoader(true)},1000)
               setPage(last)
               setCurPage(last)}} className='page-link'>Last</a>:<></>}
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