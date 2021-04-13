import React, {useState,useEffect}from 'react'
import Loading from '../logreg/loading'
import Header from '../../components/Header/Navbar';
import "./LaddersLevel.css";
import LaddersContent from '../../components/LaddersContent';
import FooterSmall from '../../components/Footer/FooterSmall';
import ErrorPage from '../ErrorPage/ErrorPage.js';


function LaddersLevel(props) {

    const creds= JSON.parse(localStorage.getItem("creds"));

    const [dat, setDat] = useState();

    const [show,setShow]=useState(true);
    const [wise1,setwise1]=useState();

    console.log(props);
    useEffect(() => {
        
            async function setData()
        {
            if(props.wise=="topicwise")
            {
                setwise1('Topic')
            }
            else
            {
                setwise1('Level')
            }
        }
        async function fetchData()
        {
            // console.log("reached");
            if(creds)
            {
                const res=await fetch (`https://api.codedigger.tech/lists/${props.wise}/${props.type}/`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${creds.access}`
                  }
                });
                res
                    .json()
                    .then(res => setDat(res))
                    .then(show => setShow(false));
            }
            else
            {
                const res=await fetch (`https://api.codedigger.tech/lists/${props.wise}/${props.type}/`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    // "Authorization":`Bearer ${creds.access}`
                  }
                });
                res
                    .json()
                    .then(res => setDat(res))
                    .then(show => setShow(false));
            }
        }
        setData();
        fetchData();
        
        
        if (props.type=="ladder" && !creds){
            alert("Please Login to Proceed");
            window.location='/login' 
        }
        
    },[])

    
        if(show)
        {
            return(
                <Loading/>
            )
        }
        else
        {
            if(dat)
            {
                return (
                    <div className="ladder">
                            {console.log(dat)}
                        <Header />
                        
                        <div className="container ladders_ques" style={{marginTop: '80px', marginBottom: '100px'}}>
                        <br/>
            
                        {console.log(dat[0])}
            
                        {props.type == "ladder" ? <>
                        {dat.map((level,index)=> {
                            // console.log(dat);
                            return(
                                <>
                                <LaddersContent 
                                    title={level.name}
                                    des={level.description}
                                    slug={level.slug}
                                    wise1={wise1}
                                    wise={props.wise}
                                    type={props.type}
                                    index={index}
                                    user_solved={level.user_solved}
                                    total={level.total}
                                    first_time={level.first_time}
                                />
            
                                <br/>
                                </>
                            )
                        })}
                        </>:<>
                        {dat.map((level,index)=> {
                            // console.log(dat);
                            return(
                                <>
                                <LaddersContent 
                                    title={level.name}
                                    des={level.description}
                                    slug={level.slug}
                                    wise1={wise1}
                                    wise={props.wise}
                                    type={props.type}
                                    index={index}
                                    user_solved={level.user_solved}
                                    total={level.total}
                                />
            
                                <br/>
                                </>
                            )
                        })}
                        </>}
                            
                        </div>
                        <FooterSmall />
                        </div>
                )
            }
            else
            {
                return(
                    <ErrorPage/>
                )
            }
        }
    }
    

export default LaddersLevel
