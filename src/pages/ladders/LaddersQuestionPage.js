import React from 'react'
import Navbar from '../../components/headerComponent/Navbar';
import Footer from '../../components/footerComponent/footer';
import MainCard from '../../components/MainCard';

import './LaddersQuestionPage.css';
import problemsData from './problemsData.json';

function LaddersQuestionPage() {
    var count=0;
    var button = false;
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="container-card">
                    {problemsData.result.map((ProblemData)=>{
                        if(ProblemData.status === "unsolved")
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
            

            <Footer />
        </div>
    )
}

export default LaddersQuestionPage
