import React, {useState} from 'react';
import Loading from '../logreg/loading'
import "./LaddersTopic.css";
import IndexNavbar from '../../components/headerComponent/Navbar';
import QuestionCard from '../../components/QuestionCard';
import LaddersContent from '../../components/LaddersContent';
import FooterSmall from '../../components/footerComponent/FooterSmall';

function LaddersTopic() {
    const [show,setShow]=useState(true);
    setTimeout(()=>{setShow(false)},1000);
    return (
        <div className="ladder">
            {show? (<Loading />):
            (<div>
            <IndexNavbar />
            
            <div className="container ladders_ques">
            <br/>
            
                <LaddersContent 
                    title='Warm Up'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Implementation'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Arrays'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Number Theory'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Hashmaps & Sets'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Stacks, Queues, Dequeues & Priority Queues'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Strings'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Maths'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Greedy'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Interactive Problems'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Bit Manipulation'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Binary Search/Divide and Conquer'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Dynamic Programming'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Graphs'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Union Find Disjoint Sets (UFDS)'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Segment Tree'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Trees'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='DFS and similar'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Two Pointers'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
                <LaddersContent 
                    title='Combinatorics'
                    des='All Questions should be attempted in this topic.'
                    type='Topic'
                />
                <br/>
            </div>
            <FooterSmall/>
            </div>)
            }
        </div>
    )
}

export default LaddersTopic
