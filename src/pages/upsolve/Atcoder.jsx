import React ,{useEffect,useState}from 'react'
import Validate from '../../helpers/Validate'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-multi-carousel';
import Navbar from '../../components/Header/Navbar'
import Loading from '../logreg/loading'
import Footer from '../../components/Footer/FooterSmall'
import 'reactjs-popup/dist/index.css';
import './upsolve.style.css'
import {atcoder} from '../../actions/upsolve.actions' 
import logo from '../../assets/upsolve/atcoder_logo.png'
import refresh from '../../assets/upsolve/reload.png'
import ToggleButton from 'react-toggle-button'

const Atcoder=()=>{
   
    const pageNumbers=[];
    
    const [page,setPage]=useState(1);
    const [loader,setLoader]=useState(false);
    const [prev,setPrev]=useState(null);
    const [next,setNext]=useState(2);
    const [first,setFirst]=useState(1);
    const [last,setLast]=useState(null);
    const [conData,setData]=useState([]);
    const [Prac,setPrac]=useState(false);
   
    const [curPage,setCurPage]=useState(1);
    useEffect(()=>{
      Validate();
      setFirst(1);
        setLast(null);
        setPage(page);
        setPrev(null);
        setNext(null);
    async function fetchData(){
        
        const creds=JSON.parse(localStorage.getItem("creds"));
        const acc=creds.access; 
        const response=await atcoder(acc,page,Prac)
        if(response.status===200){
         const data=await response.json();
         console.log(data);
               if(data.status==="OK"&&data.result.length>0){
                   
                   console.log("yipee");
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
                  setCurPage(data.meta.current_page);
                  const result=await (data.result);
                   await setData(result);
               }
               else if(Prac==true){
                 localStorage.setItem("err","Please practice or compete to view this page");
                 window.location='/home'
               }
               
               else{
                   setPrac(true)
               }
              
                  
                   setLoader(false);
               
        }
        else{
            const data=await response.json();
           
            if(data.error==="You haven't Entered your Atcoder Handle in your Profile.. Update Now!"){
            localStorage.setItem("err",data.error);
            window.location='/home'  
          }
          
            

        }

        
        
   
 } 
 fetchData();
},[page,Prac])
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
            <Navbar></Navbar><br></br><br></br><br></br><br></br>
            {loader?<Spinner className="loading-animation" animation="border"/>:
            <div className="body">
                     
              
              {conData.length>0?
              <>
            
                <div style={{display:"flex"}}>
 <h3 textAlign="center">ATCODER</h3><img style={{width:'60px',height:'50px'}}src={logo}/></div>
 
 <div style={{display:"flex",float:"right"}}>
 <div style={{float:"right",backgroundColor:"lightslategrey",borderRadius:'5px',border:"2px solid black"}}> 
               <h6 style={{padding:"3px",color:"black",marginTop:"2px"}}>Include Practice</h6>
               <div style={{display:"block",marginLeft:"25px"}}>
       <ToggleButton
       inactiveLabel={''}
       activeLabel={''}
      
  value={ Prac || false }
  onToggle={(val) => {
   setPrac(!Prac)
   setTimeout(()=>{setLoader(true)},1000)
   setPage(1);
  }} /></div>
              </div>
              <div><button title="solved? update" style={{float:'right',borderRadius:'35px'}} onClick={e=>{window.location.reload(false)}}><img style={{width:'50px',height:'52px'}}src={refresh}></img></button></div>
              </div><br></br>
           
<br></br><br></br><br></br>
              
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
                          <Col><div className={`solved`} ><a href={prob.url} target="_blank"><h7>{prob.name}</h7></a><br></br><br></br>
                     <h7 className="green">SOLVED</h7>
                   </div></Col>
                         )}
                         else if(prob.status==="wrong"){
                         return(
                          <Col> <div className={`wrong`}><a href={prob.url} target="_blank"><h7 >{prob.name}</h7></a><br></br><br></br>
                          <h7 className="red">WRONG</h7>
                           </div></Col>
                         )}
                         else if(prob.status=="upsolved"){
                         return(
                          <Col> <div className={`upsolved`}><a  href={prob.url} target="_blank"><h7 >{prob.name}</h7></a><br></br><br></br>
                           <h7 className="blue">UPSOLVED</h7>
                           </div></Col>
                         )}
                         return(
                          <Col> <div className={`not_attempted`}><a href={prob.url} target="_blank"><h7 >{prob.name}</h7></a><br></br><br></br>
                        
                           <h7 className="viol">NOT ATTEMPTED</h7>
                           </div></Col>
                         )
                     })}
                     </Carousel></Col>
                    
                     </Row><br></br></>:<></>}</>)})}
                     <div className="paginate" >
                    <nav className="paginator">
            <ul className='pagination'>
              {page!=1?
                <a style={{padding:'15px'}}onClick={()=>{
                  setTimeout(()=>{setLoader(true)},1000)

                  setPage(first)}} className='page-link'>First</a>:<></>}
                  {page!=1?
           <a style={{padding:'15px'}}onClick={()=>{
              setTimeout(()=>{setLoader(true)},1000)
             setPage(prev)}} className='page-link'>{`<`}</a>:<></>}
              {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                  <a style={{padding:'15px'}}onClick={() =>{
                      setTimeout(()=>{setLoader(true)},1000)
                     setPage(number)}} className={`${page==number?`active-page`:'page-link'}`}>
                    {number}
                  </a>
                </li>
              ))}
              {page!=last?
              <a style={{padding:'15px'}}onClick={()=>{
                 setTimeout(()=>{setLoader(true)},1000)
                setPage(next)}} className='page-link'>{`>`}</a>:<></>}
                {page!=last?
             <a onClick={()=>{
                setTimeout(()=>{setLoader(true)},1000)
               setPage(last)}} className='page-link'>Last</a>:<></>}
              
            </ul>
            </nav>
              </div>
              
              <Footer/>
              
              </>:<Loading/>}
              </div>}
              </>
                 
               
               

        
        )
}
export default Atcoder;