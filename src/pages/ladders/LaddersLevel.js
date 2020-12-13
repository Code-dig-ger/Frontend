import React, {useState}from 'react'
import Loading from '../logreg/loading'
import Header from '../../components/headerComponent/Navbar';
import "./LaddersLevel.css";
import QuestionCard from '../../components/QuestionCard';
import LaddersContent from '../../components/LaddersContent';
import Footer from '../../components/footerComponent/footer';


function LaddersLevel() {
    const [show,setShow]=useState(true);
    setTimeout(()=>{setShow(false)},1000);
    return (
        <div className="ladder">
            {show? (<Loading />):
            (<div>
            <Header />
            
            <div className="container ladders_ques">
            <br/>
            
                <LaddersContent 
                    title='A'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                <LaddersContent 
                    title='B'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                <LaddersContent 
                    title='C'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                <LaddersContent 
                    title='D'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                <LaddersContent 
                    title='E'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                <LaddersContent 
                    title='F'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                <LaddersContent 
                    title='G'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                <LaddersContent 
                    title='H'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                
            </div>
            <Footer/>
            </div>)
            }
        </div>
    )
}

export default LaddersLevel
