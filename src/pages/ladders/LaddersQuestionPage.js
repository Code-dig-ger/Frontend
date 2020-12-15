import React from 'react'
import Navbar from '../../components/headerComponent/Navbar';
import Footer from '../../components/footerComponent/footer';
import MainCard from '../../components/MainCard'
import { Container, Row, Col } from 'reactstrap';
import './LaddersQuestionPage.css'



function LaddersQuestionPage() {
    
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <Row>
                    <Col>
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
                    </Col>
               
                    
                </Row>
            </div>
            

            <Footer />
        </div>
    )
}

export default LaddersQuestionPage
