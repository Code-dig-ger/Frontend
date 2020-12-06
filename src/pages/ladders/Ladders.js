import React, {useState}from 'react'
import Loading from '../logreg/loading'
import Header from '../../components/header';
import "./ladders.css"
import QuestionCard from '../../components/QuestionCard'




function Ladders() {
    const [show,setShow]=useState(true);
    setTimeout(()=>{setShow(false)},1000);
    return (
        <div className="ladder">
            {show? (<Loading />):
            (<div>
            <Header />
            <QuestionCard />
            </div>)
            }
        </div>
    )
}

export default Ladders
