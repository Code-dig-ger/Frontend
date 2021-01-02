import React, {useState}from 'react'
import Loading from '../logreg/loading'
import Header from '../../components/headerComponent/Navbar';
import "./LaddersLevel.css";
import QuestionCard from '../../components/QuestionCard';
import LaddersContent from '../../components/LaddersContent';
import FooterSmall from '../../components/footerComponent/FooterSmall';


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
                    type='Level'
                />
                <br/>
                <LaddersContent 
                    title='B'
                    des='All Questions should be attempted in this topic.'
                    type='Level'
                />
                <br/>
                <LaddersContent 
                    title='C'
                    des='All Questions should be attempted in this topic.'
                    type='Level'
                />
                <br/>
                <LaddersContent 
                    title='D'
                    des='All Questions should be attempted in this topic.'
                    type='Level'
                />
                <br/>
                <LaddersContent 
                    title='E'
                    des='All Questions should be attempted in this topic.'
                    type='Level'
                />
                <br/>
                <LaddersContent 
                    title='F'
                    des='All Questions should be attempted in this topic.'
                    type='Level'
                />
                <br/>
                <LaddersContent 
                    title='G'
                    des='All Questions should be attempted in this topic.'
                    type='Level'
                />
                <br/>
                <LaddersContent 
                    title='H'
                    des='All Questions should be attempted in this topic.'
                    type='Level'
                />
                <br/>
                
            </div>
            <FooterSmall/>
            </div>)
            }
        </div>
    )
}

export default LaddersLevel
