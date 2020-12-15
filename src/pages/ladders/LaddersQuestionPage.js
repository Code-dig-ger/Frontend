import React from 'react'
import Navbar from '../../components/headerComponent/Navbar';
import Footer from '../../components/footerComponent/footer';
import MainCard from '../../components/MainCard'
import { Container, Row, Col } from 'reactstrap';


function LaddersQuestionPage() {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <Row>
                    <Col>
                        <MainCard />
                    </Col>
                    <Col>
                     <MainCard />
                    </Col>
                    <Col>
                     <MainCard />
                    </Col>
                    <Col>
                      <MainCard />
                    </Col>
                </Row>
            </div>


            <Footer />
        </div>
    )
}

export default LaddersQuestionPage
