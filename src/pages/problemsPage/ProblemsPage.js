import React,{useState,useEffect} from 'react';
import Loading from '../logreg/loading.jsx';
import Navbar from '../../components/Header/Navbar';
import FooterSmall from '../../components/Footer/FooterSmall';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';
import {Form} from 'react-bootstrap';
import queryString from 'query-string';
import { getProblems } from "../../actions/problems.actions"

function ProblemsPage({info,queryStr}) {

    const creds= JSON.parse(localStorage.getItem("creds"));
    const [error, setErrors] = useState(false);
    const [show, setShow] = useState(true);
    const [problems, setProblems] = useState([]);
    const [modal, setModal] = useState(false);

    const platforms=[
        "Codechef",
        "Codeforces",
        "Atcoder",
        "Spoj",
        "UVA"
    ];
    const difficultyLevels=[
        "Beginner",
        "Easy" ,
        "Medium",
        "Hard",
        "SuperHard",
        "Challenging"
    ]

    const tags = ["string","dp","math"];

    const [rangeLeft,setRangeLeft]=useState(0);
    const [rangeRight,setRangeRight]=useState(0);

    const platformFilters = {
        Codechef:'C',
        Codeforces:'F',
        Atcoder:'A',
        Spoj:'S',
        UVA:'U'
    }

    const difficultyFilters = {
        Beginner:'B',
        Easy:'E',
        Medium:'M',
        Hard:'H',
        SuperHard:'S',
        Challenging:'C'
    }

    const [queries,setQueries]=useState({
        difficulty:[],
        platform:[],
        range_l:0,
        range_r:0
    });

    const setLeftRangeQuery = (event) => {
        event.preventDefault();
        setRangeLeft(event.target.value);
    }

    const setRightRangeQuery = (event) => {
        event.preventDefault();
        setRangeRight(event.target.value);
    }

    const toggle = (e) => {
        e.preventDefault();
        setModal(!modal);
      }
    const changePlatformFilter = (event,lev) => {
        console.log(queryString.stringifyUrl({url: 'https://api.codedigger.tech/problems/', query: {platform: 'F,A',difficulty:'B,E'}}));
        console.log(queryString.parseUrl('https://foo.bar?foo=b,l&g=k'))
        
        const res=event.target.checked;
        if(res)
        {
            console.log(queries.platform.push(platformFilters[lev]));
        }
        else
        {
            var y=-1;
            queries.platform.map((plat,i) => {
                if(plat==platformFilters[lev])
                {
                    y=i;
                }
            });
            queries.platform.splice(y,1);
        }
        console.log(JSON.stringify(queries.platform).replace(/"/g,'').replace(/]|[[]/g, ''));
        
    }

    const changeDifficultyFilter = (event,lev) => {
        console.log(difficultyFilters[lev]);
        const res=event.target.checked;
        console.log(lev + res);
        if(res)
        {
            console.log(queries.difficulty.push(difficultyFilters[lev]));
        }
        else
        {
            var y=-1;
            queries.difficulty.map((plat,i) => {
                if(plat==difficultyFilters[lev])
                {
                    y=i;
                }
            });
            queries.difficulty.splice(y,1);
        }
        console.log(JSON.stringify(queries.difficulty).replace(/"/g,'').replace(/]|[[]/g, ''));
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(queries);
        const queryy = {
            difficulty:JSON.stringify(queries.difficulty).replace(/"/g,'').replace(/]|[[]/g, ''),
            platform:JSON.stringify(queries.platform).replace(/"/g,'').replace(/]|[[]/g, ''),
            range_l:JSON.stringify(rangeLeft).replace(/"/g,'').replace(/]|[[]/g, ''),
            range_r:JSON.stringify(rangeRight).replace(/"/g,'').replace(/]|[[]/g, '')
        }
        const finalQ = queryString.stringify(queryy,{skipEmptyString:true});
        const urlTo = `/problems/?${finalQ}`;
        console.log(urlTo);
        window.location.href=urlTo;
    }

    useEffect(() => {
        getProblems(queryStr)
        .then(res => setProblems(res))
        .then(show => setShow(false))
        .catch(error => setErrors(true));
    },[])

    return (
        show==true ? <><Loading/></>:
        <>
            <Navbar />
                <h3
                    style={{
                        textAlign: 'center',
                        marginBottom: '65px'
                    }}
                >Problems</h3>
                <Button style={{position:'absolute', bottom:'77vh', right:'6vw'}} onClick={toggle}>Filter</Button>
                <Modal isOpen={modal} toggle={toggle} style={{minWidth:'55vw'}}>
                    <ModalHeader>Filter the problems</ModalHeader>
                    <ModalBody>
                        {/* <h5>Difficulty</h5>
                        {difficultyLevels.map((lev) => {
                            return(
                                <>
                                    <Label for={lev}>{lev}</Label>
                                    <Input type="checkbox" id={lev}/>
                                </>
                            )
                        })} */}
                        <Form>
                            <h5>
                                Difficulty
                            </h5>
                                <div key="inline-checkbox">
                                    {difficultyLevels.map((lev,i) => {
                                        return(
                                            <Form.Check onChange={(event) => changeDifficultyFilter(event,lev)} inline label={lev} type="checkbox" id={`inline-${lev}-${i}`} />
                                        )
                                    })}
                                </div>
                        </Form>
                        <br/>
                        <Form>
                            <h5>
                                Platforms
                            </h5>
                                <div key="inline-checkbox">
                                    {platforms.map((lev,i) => {
                                        return(
                                            <Form.Check onChange={(event) => changePlatformFilter(event,lev)} inline label={lev} type="checkbox" id={`inline-${lev}-${i}`} />
                                        )
                                    })}
                                </div>
                        </Form>
                        <Form inline>
                            <label style={{marginRight:'20px'}}>
                                Range Left
                                <input style={{width:'100px',height:'32px',marginLeft:'11px'}} onChange={setLeftRangeQuery} type="number"/>
                            </label>
                            <label>
                                Range Right
                                <input style={{width:'100px',height:'32px',marginLeft:'11px'}} onChange={setRightRangeQuery} type="number"/>
                            </label>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={toggle}>Close</Button>
                        <Button onClick={handleSubmit} style={{position:'relative',top:'-8px',right:'129px'}}>Filter</Button>
                    </ModalFooter>
                </Modal>
                
            {!problems.result? (<Loading />) : 
                (
                    <>
                    <div style={{
                        margin: '0px',
                        padding: '0px',
                        marginLeft: '100px',
                        marginRight: '100px'
                    }}>
                        <div className="row">
                            
                            {problems.result.map((playlist, i) => {
                                return(
                                    <>
                                    
                                    <ul className="list list-inline" style={{marginTop: '-14px'}}>
                                        <li className="d-flex justify-content-between">
                                            <div className="d-flex flex-row align-items-center">
                                                <div className="ml-2">
                                                    <h5 className="mb-0 link_ques">{i+1}. <a href={playlist.url} className="link_ques">{playlist.name}</a></h5>
                                                    <div className="d-flex flex-row mt-1 text-black-50 date-time">
                                                        <div><span className="ml-3 black">Platform: {playlist.platform},</span></div>
                                                        <div><span className="ml-2 black">Tags: {playlist.tags},</span></div>
                                                        <div><span className="ml-2 black">Difficulty: {playlist.difficulty},</span></div>
                                                        <div><span className="ml-2 black">Rating: {playlist.rating}</span></div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-around">
                                            {playlist.solved? (
                                                <>
                                                <a href={playlist.url} target="_blank"
                                                    style={{
                                                        color: 'white',
                                                        backgroundColor: 'green',
                                                        borderRadius: '15px',
                                                        width: '37%',
                                                        marginRight: '50px',
                                                        outline: 'none',
                                                        textAlign: 'center',
                                                        paddingTop: '10px',
                                                        textDecoration: 'none',
                                                        fontSize: '15px',
                                                        opacity: '0.7'
                                                    }}
                                                >Solved</a>
                                        </>
                                            ): (
                                                <>
                                                        <a href={playlist.url} target="_blank"
                                                    style={{
                                                        color: 'white',
                                                        backgroundColor: 'blue',
                                                        borderRadius: '15px',
                                                        width: '100px',
                                                        marginRight: '30px',
                                                        outline: 'none',
                                                        textAlign: 'center',
                                                        paddingTop: '10px',
                                                        textDecoration: 'none',
                                                        fontSize: '15px',
                                                        opacity: '0.9'
                                                    }}
                                                >Solve</a>
                                                </>
                                            )}
                                            </div>
                                        </li>
                                    </ul>
                                
                            
                                    </>
                                )
                            })}
                        </div>      
                        </div>
                        
                                <FooterSmall/>
                            
                            </>
                    
                )
            }
        </>
    )
}

export default ProblemsPage
