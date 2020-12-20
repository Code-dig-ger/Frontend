import React from 'react'
import Navbar from '../../components/headerComponent/Navbar';
import Footer from '../../components/footerComponent/footer';
import MainCard from '../../components/MainCard';
import { Container, Row, Col } from 'reactstrap';
import './LaddersQuestionPage.css';
import problemsData from './problemsData.json';

function LaddersQuestionPage() {

    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="container-card">
                    {problemsData.result.map((ProblemData)=>{
                        console.log("sai");
                        return(
                            <>
                                
                                    <MainCard />
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
