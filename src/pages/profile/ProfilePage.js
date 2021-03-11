import React, {useState, useEffect} from 'react'
import Loading from '../logreg/loading'
import './profile.style.css'
import Navbar from '../../components/Header/Navbar'
import FooterSmall from '../../components/Footer/FooterSmall';
import CodeforcesImg from '../../assets/codeforces.png';
import CodechefImg from '../../assets/codechef.png';
import SpojImg from '../../assets/spoj.png';
import UAVImg from '../../assets/uva_online_judge.png';
import AtcoderImg from '../../assets/atcoder.png';
import ProfileCarousel from '../../components/profile/ProfileCarousel'
import FriendsBtn from '../../components/profile/FriendsBtn.js';
import MentorBtn from '../../components/profile/MentorBtn.js';
import $ from 'jquery';
import {faUserClock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FriendList from '../../components/profile/FriendList.js';
import {Modal,ModalBody,ModalFooter,ModalHeader,Button} from 'reactstrap';
import { Carousel } from 'react-bootstrap'
import { getProfile, getInfoBySite, getFriendReq } from "../../actions/profile.actions.js"



function ProfilePage({handle}) {

    // console.log(handle);

    const [user, setUsers] = useState({});
    const [error, setErrors] = useState(false);
    const creds= JSON.parse(localStorage.getItem("creds"));
    const uu=handle;
    const [firstTime,setFirstTime]= useState();
    const [acc,setAcc]=useState();

    const [codeforcesDat, setCodeforcesDat] = useState();
    const [codechefDat, setCodechefDat] = useState();
    const [atcoderDat, setAtcodercesDat] = useState();
    const [spojDat, setSpojDat] = useState();
    const [uvaDat, setUvaDat] = useState();

    const [codeforcesStatus, setCodeforcesStatus] = useState(true);
    const [codechefStatus, setCodechefStatus] = useState(true);
    const [atcoderStatus, setAtcodercesStatus] = useState(true);
    const [spojStatus, setSpojStatus] = useState(true);
    const [uvaStatus, setUvaStatus] = useState(true);

    const [show,setShow]=useState(true);

    const tabs = ["#tab-1","#tab-2","#tab-3"];
    const tabSection = ["tab-1","tab-2","tab-3"];
    const [nestedModal3, setNestedModal3] = useState(false);
    const [friendReq,setFriendReq] = useState({});
    const [friendReqStatus,setFriendReqStatus] = useState(false);

    const toggleNested3 = (e) => {
        e.preventDefault();
        setNestedModal3(!nestedModal3);
      }

    useEffect(() => {
        $(function() {
            // Reference the tab links.
            const tabLinks = $('#tab-links li a');
            console.log("PP");
            // Handle link clicks.
            tabLinks.click(function(event) {
                
                var $this = $(this);
                
                // Prevent default click behaviour.
                event.preventDefault();
                
                // Remove the active class from the active link and section.
                $('#tab-links a.active, section.active').removeClass('active');
                
                // Add the active class to the current link and corresponding section.
                $this.addClass('active');
                $($this.attr('href')).addClass('active');
            });
        });

        $(window).scroll(function(){
            $("#profileCard").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "middle" );
          });
    })

    useEffect(() => {

        if(creds)
        {
            setFirstTime(creds.first);
            setAcc(creds.access);
        }

        // jQuery.
        

        async function fetchData(){

            

            if(creds)
            {
                const res = await getProfile(creds.access, uu)
                    .then(res => setUsers(res))
                    .then(res => console.log(res))
                    .then(show => setShow(false))
                    .catch(error => setErrors(true));
            }
            else{
                alert("Please Login to Proceed");
                window.location='/login'
            }
            const res1 = await getInfoBySite(uu, "codeforces")
                .then(res => setCodeforcesDat(res))
                .then(show => setCodeforcesStatus(false))
                .catch(error => setErrors(true));

            const res2 = await getInfoBySite(uu, "codechef")
                .then(res => setCodechefDat(res))
                .then(show => setCodechefStatus(false))
                .catch(error => setErrors(true));

            const res3 = await getInfoBySite(uu, "atcoder")
                .then(res => setAtcodercesDat(res))
                .then(show => setAtcodercesStatus(false))
                .catch(error => setErrors(true));
            
            const res4 = await getInfoBySite(uu, "spoj")
                .then(res => setSpojDat(res))
                .then(show => setSpojStatus(false))
                .catch(error => setErrors(true));

            const res5 = await getInfoBySite(uu, "uva")
                .then(res => setUvaDat(res))
                .then(show => setUvaStatus(false))
                .catch(error => setErrors(true));   

            if(creds)
            {
                const res6=await getFriendReq(creds.access)
                .then(res6 => setFriendReq(res6))
                .then(() => {
                    setFriendReqStatus(true)
                });
            }else{
                alert("Please Login to Proceed");
                window.location='/login'
            }
        }
        fetchData();
        console.log(friendReq);

        
    },[])

        return (
        
            (firstTime===true)?window.location="/createProfile": 
                  (show==true) ? <Loading /> : 
                  <>
                <Navbar/>

                <div className="container" style={{marginTop: '100px'}}>
                    <div className="main-body">
                        <div className="row gutters-sm">
                        <div className="col-md-4 mb-3" id="profileCard">
                            <div className="card1">
                                <div className="card-body">
                                    {user.result.about_user === "Logged In User Itself" ? 
                                    <div>
                                        {/* <FontAwesomeIcon onClick={toggleNested3} alt="Click to view pending requests" style={{fontSize:"1.5rem",cursor:"pointer"}} icon={faUserClock}/> */}
                                        <div style={{width:'2rem'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><linearGradient id="WatsonOnboard_svg__a" x1="4" y1="24" x2="4" y2="9" gradientUnits="userSpaceOnUse"><stop offset=".2"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="WatsonOnboard_svg__b" x1="28.5" y1="-1959" x2="28.5" y2="-1976" gradientTransform="translate(-1 1984)" gradientUnits="userSpaceOnUse"><stop offset=".5"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="WatsonOnboard_svg__d" y1="32" x2="32" gradientUnits="userSpaceOnUse"><stop offset=".1" stop-color="#a56eff"></stop><stop offset=".9" stop-color="#0f62fe"></stop></linearGradient><mask id="WatsonOnboard_svg__c" x="0" y="0" width="32" height="32" maskUnits="userSpaceOnUse"><path d="M3.873 23A14 14 0 0125.9 6.1l-1.415 1.415A12 12 0 005.6 22zM16 29.993A13.952 13.952 0 016.1 25.9l1.414-1.414A12 12 0 0026.4 10l1.731-1A14 14 0 0116 29.993z" fill="#fff"></path><path fill="url(#WatsonOnboard_svg__a)" d="M1 9h6v15H1z"></path><path transform="rotate(180 27.5 16.5)" fill="url(#WatsonOnboard_svg__b)" d="M24 8h7v17h-7z"></path></mask></defs><g data-name="Layer 2"><g data-name="Light theme icons"><g mask="url(#WatsonOnboard_svg__c)"><path fill="url(#WatsonOnboard_svg__d)" d="M0 0h32v32H0z"></path></g><path d="M19 18h-6a3 3 0 00-3 3v2h2v-2a1 1 0 011-1h6a1 1 0 011 1v2h2v-2a3 3 0 00-3-3zM16 17a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2zM30 12h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z" fill="#001d6c"></path></g></g></svg></div>
                                        <Modal isOpen={nestedModal3} toggle={toggleNested3}>
                                            <ModalHeader>List of Received Friend Requests</ModalHeader>
                                            <ModalBody style={{marginBottom:"20px"}}>
                                                {friendReqStatus ? <FriendList friends={friendReq} i="2" acc={acc}/>: <Loading/>}
                                            </ModalBody>
                                            <ModalFooter>
                                            <Button color="primary" onClick={toggleNested3}>Close </Button>{' '}
                                            </ModalFooter>
                                        </Modal>
                                    </div>:<></>}
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" style={{height:"8rem", width:"8rem"}} width="150" />
                                        <div className="mt-3">
                                            <h4 style={{color:"black"}}>{user.result.name}</h4>
                                            <p className="text-secondary mb-1">{uu}</p>
                                            <FriendsBtn creds={creds} acc={acc} handle={uu} user={user}/>
                                            <MentorBtn creds={creds} acc={acc} handle={uu} user={user}/>
                                        </div>
                                </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                <li className="d-flex justify-content-between align-items-center flex-wrap handlesItem">
                                    <img style={{height:"1rem", width:"6rem", marginRight:"0"}} src={CodeforcesImg}></img>
                                    <h6 className="mb-0">Codeforces</h6>
                                    <span className="text-secondary">{user.result.codeforces !="" ? <a className="handleName" href={"https://codeforces.com/profile/" + user.result.codeforces}>{user.result.codeforces}</a> : "NA"}</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center flex-wrap handlesItem">
                                    <img style={{height:"2rem", width:"2rem", marginRight:"3.3rem"}} src={CodechefImg}></img>
                                    <h6 className="mb-0">Codechef</h6>
                                    <span className="text-secondary">{user.result.codechef !="" ? <a className="handleName" href={"https://codechef.com/users/" + user.result.codechef}>{user.result.codechef}</a> : "NA"}</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center flex-wrap handlesItem">
                                    <img style={{height:"1rem", width:"7rem", marginRight:"-5.8rem"}} src={SpojImg}></img>
                                    <h6 className="mb-0">SPOJ</h6>
                                    <span className="text-secondary">{user.result.spoj !="" ? <a className="handleName" href={"https://spoj.com/users/" + user.result.spoj}>{user.result.spoj}</a> : "NA"}</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center flex-wrap handlesItem">
                                    <img style={{height:"2rem", width:"2rem", marginRight:"-0.8rem"}} src={UAVImg}></img>
                                    <h6 className="mb-0">UVA</h6>
                                    <span className="text-secondary">{user.result.uva_handle !="" ? <a className="handleName" href={"https://uva.com/users/" + user.result.uva_handle}>{user.result.uva_handle}</a> : "NA"}</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center flex-wrap handlesItem">
                                    <img style={{height:"2rem", width:"2rem", marginRight:"0"}} src={AtcoderImg}></img>
                                    <h6 className="mb-0">Atcoder</h6>
                                    <span className="text-secondary">{user.result.atcoder !="" ? <a className="handleName" href={"https://atcoder.com/users/" + user.result.atcoder}>{user.result.atcoder}</a> : "NA"}</span>
                                </li>
                                </ul>
                            </div>
                            </div>

                            {/* Platform Cards Starts */}

                            <div className="col-md-8">
                                <div className="card1 mb-3" >
                                    <div className="card-body" style={{color:"black"}}>
                                        <div>
                                            <span><img style={{height:"1rem", width:"6rem", marginRight:"auto", marginLeft: 'auto', display: 'block'}} src={CodeforcesImg}></img></span>
                                        </div>
                                        {console.log(codeforcesDat)}
                                    {codeforcesStatus===true?<> 

                                        <div className="body2">
                                            <div id="container">
                                            <div className="divider" aria-hidden="true"></div>
                                            <p className="loading-text" aria-label="Loading">
                                                <span className="letter" aria-hidden="true">L</span>
                                                <span className="letter" aria-hidden="true">o</span>
                                                <span className="letter" aria-hidden="true">a</span>
                                                <span className="letter" aria-hidden="true">d</span>
                                                <span className="letter" aria-hidden="true">i</span>
                                                <span className="letter" aria-hidden="true">n</span>
                                                <span className="letter" aria-hidden="true">g</span>
                                            </p>
                                            </div>
                                            </div>
                                        </> :<div> 
                                        <div style={{marginTop:"20px"}}>
                                            <div>Current Rating : {codeforcesDat.result.rating}</div>
                                            <div>Max Rating : {codeforcesDat.result.maxRating}</div>
                                        </div>
                                    
                                    <div style={{display:"flex", alignItems:"center", marginTop:"10px", justifyContent:"space-around"}}>
                                    <div style={{marginRight: "40px", marginLeft: '20px'}}>
                                        
                                    <Carousel controls={false}>
                                        <Carousel.Item style={{height: '150px', width: '100px'}}>
                                            <img
                                            className="d-block w-100"
                                            src="https://img.freepik.com/free-photo/dark-grunge-style-scratched-metal-surface_1048-12951.jpg?size=626&ext=jpg"
                                            alt="First slide"
                                            />
                                            <Carousel.Caption style={{position: 'absolute', top: '0px'}}>
                                            <h3 style={{fontSize: '17px', fontWeight: '700'}}>Organization Rank</h3>
                                            <p style={{fontSize: '18px', marginTop: '0px'}}>{codeforcesDat.result.organizationRank? codeforcesDat.result.organizationRank:"NA"}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item style={{height: '150px', width: '100px'}}>
                                            <img
                                            className="d-block w-100"
                                            src="https://img.freepik.com/free-photo/dark-grunge-style-scratched-metal-surface_1048-12951.jpg?size=626&ext=jpg"
                                            alt="First slide"
                                            />
                                            <Carousel.Caption style={{position: 'absolute', top: '5px'}}>
                                            <h3 style={{fontSize: '20px', fontWeight: '700'}}>Country Rank</h3>
                                            <p style={{fontSize: '18px'}}>{codeforcesDat.result.countryRank? codeforcesDat.result.countryRank:"NA"}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item style={{height: '150px', width: '100px'}}>
                                            <img
                                            className="d-block w-100"
                                            src="https://img.freepik.com/free-photo/dark-grunge-style-scratched-metal-surface_1048-12951.jpg?size=626&ext=jpg"
                                            alt="First slide"
                                            />
                                            <Carousel.Caption style={{position: 'absolute', top: '5px'}}>
                                            <h3 style={{fontSize: '20px', fontWeight: '700'}}>World Rank</h3>
                                            <p style={{fontSize: '18px'}}>{codeforcesDat.result.worldRank}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        </Carousel>


                                    </div>
                                        <div className="tabs" style={{ minWidth:"428px", minHeight:"198px", maxWidth:"428px", maxHeight:"198px"}}>
                                            {codeforcesDat.result.contestRank.length===0 ? 
                                                <h6 style={{color:"white", fontSize:"2rem"}}>You havent done any contest</h6> 
                                                :
                                                <>
                                                <ul id="tab-links" style={{marginBottom:"0", height:"160px"}}>
                                                    {codeforcesDat.result.contestRank.map((contestDat, index) => {
                                                        return(
                                                            <li key={index}><a href={tabs[index]} className={index===0 ? "active":""}>{index+1}</a></li>
                                                        )
                                                    })}
                                                </ul>

                                                {codeforcesDat.result.contestRank.map((contestDat, index) => {
                                                    return(
                                                        <section style={{width:"100%"}} id={tabSection[index]} key={index} className={index===0 ? "active":""}>
                                                            <h6 style={{color:"black", fontSize: '20px', fontWeight: '700', textDecoration: 'underline'}}>{contestDat.contest.name}</h6>
                                                            <p style={{ fontSize: '14px', fontWeight: '500'}}>World Rank : {contestDat.worldRank? contestDat.worldRank : "NA"}</p>
                                                            <p style={{ fontSize: '14px', fontWeight: '500'}}>Country Rank : {contestDat.countryRank? contestDat.countryRank : "NA"}</p>
                                                            <p style={{ fontSize: '14px', fontWeight: '500'}}>Org Rank : {contestDat.organizationRank? contestDat.organizationRank : "NA"}</p>
                                                        </section>
                                                    )
                                                })} </>
                                                }
                                            
                                        </div>
                                        </div> </div>}
                                        <hr width="100%" className="mt-4" style={{color: 'lightgrey'}}/>

                                            {/* Codechef card starts */}

                                        <div>
                                            <span><img style={{height:"3rem", width:"6rem", marginRight:"auto", marginLeft: 'auto', display: 'block'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1200px-Codechef%28new%29_logo.svg.png"></img></span>
                                        </div>

                                    {codechefStatus===true?<>

                                        <div className="body2">
                                            <div id="container">
                                            <div className="divider" aria-hidden="true"></div>
                                            <p className="loading-text" aria-label="Loading">
                                                <span className="letter" aria-hidden="true">L</span>
                                                <span className="letter" aria-hidden="true">o</span>
                                                <span className="letter" aria-hidden="true">a</span>
                                                <span className="letter" aria-hidden="true">d</span>
                                                <span className="letter" aria-hidden="true">i</span>
                                                <span className="letter" aria-hidden="true">n</span>
                                                <span className="letter" aria-hidden="true">g</span>
                                            </p>
                                            </div>
                                            </div>
                                        </> :<div> 
                                        <div style={{marginTop:"20px"}}>
                                            <div>Current Rating : {codechefDat.result.rating}</div>
                                            <div>Max Rating : {codechefDat.result.maxRating}</div>
                                        </div>
                                    
                                    <div style={{display:"flex", alignItems:"center", marginTop:"10px", justifyContent:"space-around"}}>
                                    <div style={{marginRight: "40px", marginLeft: '20px'}}>
                                        
                                    <Carousel controls={false}>
                                        <Carousel.Item style={{height: '150px', width: '100px'}}>
                                            <img
                                            className="d-block w-100"
                                            src="https://img.freepik.com/free-photo/dark-grunge-style-scratched-metal-surface_1048-12951.jpg?size=626&ext=jpg"
                                            alt="First slide"
                                            />
                                            <Carousel.Caption style={{position: 'absolute', top: '5px'}}>
                                            <h3 style={{fontSize: '20px', fontWeight: '700'}}>Country Rank</h3>
                                            <p style={{fontSize: '18px'}}>{codechefDat.result.countryRank? codechefDat.result.countryRank:"NA"}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item style={{height: '150px', width: '100px'}}>
                                            <img
                                            className="d-block w-100"
                                            src="https://img.freepik.com/free-photo/dark-grunge-style-scratched-metal-surface_1048-12951.jpg?size=626&ext=jpg"
                                            alt="First slide"
                                            />
                                            <Carousel.Caption style={{position: 'absolute', top: '5px'}}>
                                            <h3 style={{fontSize: '20px', fontWeight: '700'}}>World Rank</h3>
                                            <p style={{fontSize: '18px'}}>{codechefDat.result.worldRank}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        </Carousel>


                                    </div>
                                        <div className="tabs" style={{ minWidth:"428px", minHeight:"198px", maxWidth:"428px", maxHeight:"198px"}}>
                                            {codechefDat.result.contestRank.length===0 ? 
                                                <h6 style={{color:"white", fontSize:"2rem"}}>You havent done any contest</h6> 
                                                :
                                                <>
                                                <ul id="tab-links" style={{marginBottom:"0", height:"160px"}}>
                                                    {codechefDat.result.contestRank.map((contestDat, index) => {
                                                        return(
                                                            <li key={index}><a href={tabs[index]} className={index===0 ? "active":""}>{index+1}</a></li>
                                                        )
                                                    })}
                                                </ul>

                                                {codechefDat.result.contestRank.map((contestDat, index) => {
                                                    return(
                                                        <section style={{width:"100%"}} id={tabSection[index]} key={index} className={index===0 ? "active":""}>
                                                            <h6 style={{color:"black", fontSize: '21px', fontWeight: '700', textDecoration: 'underline'}}>{contestDat.name}</h6>
                                                            <p style={{marginTop: '20px', fontSize: '16px', fontWeight: '500'}}>Rank : {contestDat.rank}</p>
                                                        </section>
                                                    )
                                                })} </>
                                                }
                                            
                                        </div>
                                        </div> </div>}
                                        <hr width="100%" className="mt-4" style={{color: 'lightgrey'}}/>

                                        {/* Atcoder Card Starts */}

                                        <div>
                                            <span><img style={{height:"3rem", width:"3rem", marginRight:"auto", marginLeft: 'auto', display: 'block', marginBottom: '0px'}} src={AtcoderImg}></img></span>
                                        </div>
                                        {console.log(uvaDat)}
                                    {atcoderStatus===true?<>   
                                        
                                        <div className="body2">
                                            <div id="container">
                                            <div className="divider" aria-hidden="true"></div>
                                            <p className="loading-text" aria-label="Loading">
                                                <span className="letter" aria-hidden="true">L</span>
                                                <span className="letter" aria-hidden="true">o</span>
                                                <span className="letter" aria-hidden="true">a</span>
                                                <span className="letter" aria-hidden="true">d</span>
                                                <span className="letter" aria-hidden="true">i</span>
                                                <span className="letter" aria-hidden="true">n</span>
                                                <span className="letter" aria-hidden="true">g</span>
                                            </p>
                                            </div>
                                            </div>
                                        </> :<div> 
                                        <div style={{marginTop:"20px"}}>
                                            <div>Rating : {atcoderDat.result.rating}</div>
                                            <div>Max Rating : {atcoderDat.result.maxRating}</div>
                                        </div>
                                    
                                    <div style={{display:"flex", alignItems:"center", marginTop:"10px", justifyContent:"space-around"}}>
                                    <div style={{marginRight: "40px", marginLeft: '20px'}}>
                                        
                                    <Carousel controls={false}>
                                        <Carousel.Item style={{height: '150px', width: '100px'}}>
                                            <img
                                            className="d-block w-100"
                                            src="https://img.freepik.com/free-photo/dark-grunge-style-scratched-metal-surface_1048-12951.jpg?size=626&ext=jpg"
                                            alt="First slide"
                                            />
                                            <Carousel.Caption style={{position: 'absolute', top: '5px'}}>
                                            <h3 style={{fontSize: '20px', fontWeight: '700'}}>World Rank</h3>
                                            <p style={{fontSize: '18px'}}>{atcoderDat.result.worldRank? atcoderDat.result.worldRank:"NA"}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        </Carousel>


                                    </div>
                                        <div className="tabs" style={{ minWidth:"428px", minHeight:"198px", maxWidth:"428px", maxHeight:"198px"}}>
                                            {atcoderDat.result.contestRank.length===0 ? 
                                                <h6 style={{color:"white", fontSize:"2rem"}}>You havent done any contest</h6> 
                                                :
                                                <>
                                                <ul id="tab-links" style={{marginBottom:"0", height:"160px"}}>
                                                    {atcoderDat.result.contestRank.map((contestDat, index) => {
                                                        return(
                                                            <li key={index}><a href={tabs[index]} className={index===0 ? "active":""}>{index+1}</a></li>
                                                        )
                                                    })}
                                                </ul>

                                                {atcoderDat.result.contestRank.map((contestDat, index) => {
                                                    return(
                                                        <section style={{width:"100%"}} id={tabSection[index]} key={index} className={index===0 ? "active":""}>
                                                            <h6 style={{color:"black", fontSize: '21px', fontWeight: '700', textDecoration: 'underline'}}>{contestDat.name}</h6>
                                                            <p style={{marginTop: '20px', fontSize: '16px', fontWeight: '500'}}>World Rank : {contestDat.worldRank}</p>
                                                        </section>
                                                    )
                                                })} </>
                                                }
                                            
                                        </div>
                                        </div> </div>}
                                        <hr width="100%" className="mt-4" style={{color: 'lightgrey'}}/>
                                    <div className="row">

                                                {/* SPOJ Card Starts */}
                                        <div className="col-md-6 border-right">
                                                <div>
                                                    <span><img style={{height:"1rem", width:"6rem", marginRight:"auto", marginLeft: 'auto', display: 'block', marginBottom: '0px'}} src={SpojImg}></img></span>
                                                </div>
                                                {console.log(spojDat)}
                                            {spojStatus===true?<>   
                                                
                                                <div className="body2">
                                                    <div id="container">
                                                    <div className="divider" aria-hidden="true"></div>
                                                    <p className="loading-text" aria-label="Loading">
                                                        <span className="letter" aria-hidden="true">L</span>
                                                        <span className="letter" aria-hidden="true">o</span>
                                                        <span className="letter" aria-hidden="true">a</span>
                                                        <span className="letter" aria-hidden="true">d</span>
                                                        <span className="letter" aria-hidden="true">i</span>
                                                        <span className="letter" aria-hidden="true">n</span>
                                                        <span className="letter" aria-hidden="true">g</span>
                                                    </p>
                                                    </div>
                                                    </div>
                                                </> :<div> 
                                                <div style={{marginTop:"20px"}}>
                                                    <div>Points : {spojDat.result.points}</div>
                                                    <div>Solved : {spojDat.result.solvedCount}</div>
                                                </div>
                                            
                                            <div style={{display:"flex", alignItems:"center", marginTop:"10px", justifyContent:"space-around"}}>
                                            <div style={{marginRight: "40px", marginLeft: '20px'}}>
                                                
                                            <Carousel controls={false}>
                                                <Carousel.Item style={{height: '150px', width: '60px'}}>
                                                    <img
                                                    className="d-block w-100"
                                                    src="https://img.freepik.com/free-photo/dark-grunge-style-scratched-metal-surface_1048-12951.jpg?size=626&ext=jpg"
                                                    alt="First slide"
                                                    />
                                                    <Carousel.Caption style={{position: 'absolute', top: '5px'}}>
                                                    <h3 style={{fontSize: '20px', fontWeight: '700'}}>World Rank</h3>
                                                    <p style={{fontSize: '18px'}}>{spojDat.result.worldRank? spojDat.result.worldRank:"NA"}</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                </Carousel>
                                                </div>
                                                </div> </div>}
                                         </div>

                                         {/* UVA Card Starts */}
                                         <div className="col-md-6">
                                                <div>
                                                    <span><img style={{height:"2rem", width:"2rem", marginRight:"auto", marginLeft: 'auto', display: 'block', marginBottom: '0px'}} src={UAVImg}></img></span>
                                                </div>
                                                {console.log(spojDat)}
                                            {uvaStatus===true?<>   
                                                
                                                <div className="body2">
                                                    <div id="container">
                                                    <div className="divider" aria-hidden="true"></div>
                                                    <p className="loading-text" aria-label="Loading">
                                                        <span className="letter" aria-hidden="true">L</span>
                                                        <span className="letter" aria-hidden="true">o</span>
                                                        <span className="letter" aria-hidden="true">a</span>
                                                        <span className="letter" aria-hidden="true">d</span>
                                                        <span className="letter" aria-hidden="true">i</span>
                                                        <span className="letter" aria-hidden="true">n</span>
                                                        <span className="letter" aria-hidden="true">g</span>
                                                    </p>
                                                    </div>
                                                    </div>
                                                </> :<div> 
                                                <div style={{marginTop:"20px"}}>
                                                    <div>Solved : {uvaDat.result.solvedCount}</div>
                                                </div>
                                            
                                            <div style={{display:"flex", alignItems:"center", marginTop:"10px", justifyContent:"space-around"}}>
                                            <div style={{marginRight: "40px", marginLeft: '20px'}}>
                                                
                                            <Carousel controls={false}>
                                                <Carousel.Item style={{height: '150px', width: '60px'}}>
                                                    <img
                                                    className="d-block w-100"
                                                    src="https://img.freepik.com/free-photo/dark-grunge-style-scratched-metal-surface_1048-12951.jpg?size=626&ext=jpg"
                                                    alt="First slide"
                                                    />
                                                    <Carousel.Caption style={{position: 'absolute', top: '5px'}}>
                                                    <h3 style={{fontSize: '20px', fontWeight: '700'}}>World Rank</h3>
                                                    <p style={{fontSize: '18px'}}>{uvaDat.result.worldRank? uvaDat.result.worldRank:"NA"}</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                </Carousel>
                                                </div>
                                                </div> </div>}
                                         </div>
                                         </div>
                                         

                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
        <FooterSmall/>
        
        </>
            
    ) 
    
}

export default ProfilePage
