import React, {useState,useEffect} from 'react'
import Navbar from '../../components/headerComponent/Navbar';
import FooterSmall from '../../components/footerComponent/FooterSmall';
import MainCard from '../../components/MainCard';

import './LaddersQuestionPage.css';
import problemsData from './problemsData.json';

import Loading from '../logreg/loading';

function LaddersQuestionPage(props) {

    console.log(props);

    const [problems, setProblems] = useState([]);
    const [show, setShow] = useState(true);
    const creds= JSON.parse(localStorage.getItem("creds"));

    useEffect(() => {
        async function fetchData()
        {
          const res=await fetch (`https://api.codedigger.tech/lists/${props.wise}/${props.type}/${props.slug}`,{
            method:"GET",
            headers:{
              "Content-Type":"application/json",
              "Authorization":`Bearer ${creds.access}`
            }
          });
          res
            .json()
            .then(res => setProblems(res))
            .then(show => setShow(false));
        }
        fetchData();
      },[])

    var count=0;
    var button = false;
    return (
        show==true ? <Loading/>:<div>
            {console.log(problems)}
        <Navbar />
        <div className="container-fluid">
            <div className="container-card">
                {problems.result.map((ProblemData)=>{
                    console.log(ProblemData.solved);
                    if(ProblemData.solved === false)
                    {
                        count++;
                        if(count === 1){
                            button = true;
                        }
                        else{
                            button=false;
                        }
                        
                    }
                    return(
                        <>
                            
                                <MainCard count={count} ProblemData={ProblemData} buttonDis={button}/>
                        </>
                    )
                    
                }
                
                )}
                </div>
                {/* <Col>
                    <MainCard solved="true"/>
                </Col>
                <Col>
                 <MainCard solved="false" />
                </Col>
                <Col>
                 <MainCard solved="false"/>
                </Col>
                <Col>
                  <MainCard solved="false"/>
                </Col> */}
        </div>
        

        <FooterSmall />
    </div>
    )
}

export default LaddersQuestionPage
