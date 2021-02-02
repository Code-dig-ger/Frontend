import React, {useState,useEffect}from 'react'
import Loading from '../logreg/loading'
import Header from '../../components/headerComponent/Navbar';
import "./LaddersLevel.css";
import QuestionCard from '../../components/QuestionCard';
import LaddersContent from '../../components/LaddersContent';
import FooterSmall from '../../components/footerComponent/FooterSmall';


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
    },[])

    return (
        <div className="ladder">
            {show? (<Loading />):
            (<div>
                {console.log(dat)}
            <Header />
            
            <div className="container ladders_ques">
            <br/>

            {console.log(dat[0])}

            {dat.map((level)=> {
                return(
                    <>
                    <LaddersContent 
                        title={level.name}
                        des={level.description}
                        slug={level.slug}
                        wise1={wise1}
                        wise={props.wise}
                        type={props.type}
                    />

                    <br/>
                    </>
                )
            })}
                
            </div>
            <FooterSmall />
            </div>)
            }
        </div>
    )
}

export default LaddersLevel
