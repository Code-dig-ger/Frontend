import React, {useState}from 'react'
import Loading from '../logreg/loading'
import Header from '../../components/header';
import "./ladders.css"
import QuestionCard from '../../components/QuestionCard'
import LaddersContent from '../../components/LaddersContent'
import Particles from 'react-particles-js';




function Ladders() {
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
                    title='Warm Up'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                <LaddersContent 
                    title='Implementation'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                <LaddersContent 
                    title='Arrays'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                <LaddersContent 
                    title='Number Theory'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                <LaddersContent 
                    title='Hashmaps & Sets'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                <LaddersContent 
                    title='Stacks, Queues, Dequeues & Priority Queues'
                    des='All Questions should be attempted in this topic.'
                />
                <br/>
                
            </div>
            </div>)
            }
        </div>
    )
}

export default Ladders
