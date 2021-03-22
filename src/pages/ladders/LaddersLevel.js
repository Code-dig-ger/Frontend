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
        if(creds){
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
            console.log("reached");
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
        setData();
        fetchData();
        }else if (props.type=="ladder"){
            alert("Please Login to Proceed");
            window.location='/login' 
        }
        
    },[])

    if(creds)
    {
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
                        
                        <div className="container ladders_ques" style={{marginTop: '80px'}}>
                        <br/>
            
                        {console.log(dat[0])}
            
                        {dat.map((level,index)=> {
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
                                />
            
                                <br/>
                                </>
                            )
                        })}
                            
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
    else
    {
        return(
            <>
                <div>
                    {console.log("please please")}
                    <a href="/home">Please Login to Proceed</a>
                </div>
            </>
        )
    }

    
}

export default LaddersLevel
