import React, {useState, useEffect} from 'react'
import Loading from '../logreg/loading'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './profile.style.css'
import Pie from './pie'
import Bar from './bar'
import Navbar from '../../components/headerComponent/Navbar'
import FooterSmall from '../../components/footerComponent/FooterSmall';
import Info from './FillInfo'
import demoImg from './images/demoImage.png';
import CodeforcesImg from '../../assets/codeforces.png';
import CodechefImg from '../../assets/codechef.png';
import SpojImg from '../../assets/spoj.png';
import UAVImg from '../../assets/uva_online_judge.png';
import AtcoderImg from '../../assets/atcoder.png';
import ProfileCarousel from './ProfileCarousel'
import { ButtonToggle } from "reactstrap";
import FriendsBtn from './FriendsBtn.js';
import MentorBtn from './MentorBtn.js';
// import user from './profileDat.json';
import $ from 'jquery';

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
    const abcd =[];

    useEffect(() => {

        if(creds)
        {
            setFirstTime(creds.first);
            setAcc(creds.access);
        }

        async function fetchData(){

            if(creds)
            {
                const res = await fetch(`https://api.codedigger.tech/auth/profile/${uu}/`, {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${creds.access}`
                }
                });
                res
                    .json()
                    .then(res => setUsers(res))
                    .then(show => setShow(false))
                    .catch(error => setErrors(true));
            }
            else
            {
                const res = await fetch(`https://api.codedigger.tech/auth/profile/${uu}/`);
                res
                    .json()
                    .then(res => setUsers(res))
                    .then(show => setShow(false))
                    .catch(error => setErrors(true));
            }

            

            const res1 = await fetch(`https://api.codedigger.tech/auth/profile/${uu}/?platform=codeforces`);
            res1
                .json()
                .then(res => setCodeforcesDat(res))
                // .then(res => setCodeforcesContest(res.result.contestRank))
                .then(show => setCodeforcesStatus(false))
                .catch(error => setErrors(true));

            const res2 = await fetch(`https://api.codedigger.tech/auth/profile/${uu}/?platform=codechef`);
            res2
                .json()
                .then(res => setCodechefDat(res))
                .then(show => setCodechefDat(false))
                .catch(error => setErrors(true));

            const res3 = await fetch(`https://api.codedigger.tech/auth/profile/${uu}/?platform=atcoder`);
            res3
                .json()
                .then(res => setAtcodercesDat(res))
                .then(show => setAtcodercesStatus(false))
                .catch(error => setErrors(true));
            
            const res4 = await fetch(`https://api.codedigger.tech/auth/profile/${uu}/?platform=spoj`);
            res4
                .json()
                .then(res => setSpojDat(res))
                .then(show => setSpojStatus(false))
                .catch(error => setErrors(true));

            const res5 = await fetch(`https://api.codedigger.tech/auth/profile/${uu}/?platform=uva`);
            res5
                .json()
                .then(res => setUvaDat(res))
                .then(show => setUvaStatus(false))
                .catch(error => setErrors(true));   
        }
        fetchData();

        // jQuery.
        $(function() {
            // Reference the tab links.
            const tabLinks = $('#tab-links li a');
            
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
    },[])



    // useEffect(() => {
    //     async function fetchData(){
    //         const res = await fetch(`https://api.codedigger.tech/auth/profile/${uu}/`);
    //         res
    //             .json()
    //             .then(res => setUsers(res))  
    //             .then(show => setShow(false))
    //             .catch(error => setErrors(true));
    //     }
    //     fetchData();
    // });

        return (
        
            (firstTime===true)?<Info/>: 
                  (show==true) ? <Loading /> : 
                  <>
        <Navbar/>
        {/* {console.log(user)} */}
        {/* {console.log(codeforcesDat)}
        {console.log(codechefDat)}
        {console.log(spojDat)}
        {console.log(uvaDat)}
        {console.log(atcoderDat)} */}
           {/* <div className="profileFull">
               <div className="leftProfile">
                   <div className="profileCard">
                       <img src={demoImg} className="profileImg"></img>
                       <div>{JSON.stringify(user.result.codechef)}</div>
                   </div>
               </div>
               <div className="rightProfile"></div>
           </div> */}
            

                <div className="container">
                    <div className="main-body">
                    
                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                            <div className="card1">
                                <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" style={{height:"8rem", width:"8rem"}} width="150" />
                                        <div className="mt-3">
                                            <h4 style={{color:"black"}}>{user.result.name}</h4>
                                            <p className="text-secondary mb-1">{uu}</p>
                                            <FriendsBtn creds={creds} acc={acc} handle={uu} user={user}/>
                                            <MentorBtn/>
                                        </div>
                                </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <br/><br/><br/>
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
                            <div className="col-md-8">
                            <div className="card1 mb-3">
                                <div className="card-body" style={{color:"black"}}>
                                    <div style={{display:"flex"}}>
                                        <span><img style={{height:"1rem", width:"6rem", float:"left", marginRight:"0"}} src={CodeforcesImg}></img></span>
                                        <span style={{marginLeft:"14rem"}}>saikeshari</span>
                                    </div>

                                    {codeforcesStatus===true?<>

                                        <div class="body2">
                                            <div id="container">
                                            <div class="divider" aria-hidden="true"></div>
                                            <p class="loading-text" aria-label="Loading">
                                                <span class="letter" aria-hidden="true">L</span>
                                                <span class="letter" aria-hidden="true">o</span>
                                                <span class="letter" aria-hidden="true">a</span>
                                                <span class="letter" aria-hidden="true">d</span>
                                                <span class="letter" aria-hidden="true">i</span>
                                                <span class="letter" aria-hidden="true">n</span>
                                                <span class="letter" aria-hidden="true">g</span>
                                            </p>
                                            </div>
                                            </div>
                                        </> :<> <div style={{marginTop:"20px"}}>
                                        <div>Current Rating : {codeforcesDat.result.rating}</div>
                                        <div>Max Rating : {codeforcesDat.result.maxRating}</div>
                                    </div>
                                    
                                    

                                    <div style={{display:"flex", alignItems:"center", marginTop:"10px", justifyContent:"space-around"}}>
                                    <div style={{marginRight: "60px"}}>
                                        
                                        <ProfileCarousel codeforces={codeforcesDat}/>


                                    </div>
                                        <div className="tabs" style={{ minWidth:"428px", minHeight:"198px", maxWidth:"428px", maxHeight:"198px"}}>
                                            {codeforcesDat.result.contestRank.length===0 ? 
                                                <h6 style={{color:"white", fontSize:"2rem"}}>You havent done any contest</h6> 
                                                :
                                                <>
                                                <ul id="tab-links" style={{marginBottom:"0", height:"160px"}}>
                                                    {codeforcesDat.result.contestRank.map((contestDat, index) => {
                                                        return(
                                                            <li><a href={tabs[index]} className={index===0 ? "active":""}>{index+1}</a></li>
                                                        )
                                                    })}
                                                </ul>

                                                {codeforcesDat.result.contestRank.map((contestDat, index) => {
                                                    return(
                                                        <section style={{width:"100%"}} id={tabSection[index]} className={index===0 ? "active":""}>
                                                            <h6 style={{color:"black"}}>{contestDat.contest.name}</h6>
                                                            <p>World Rank : {contestDat.worldRank}</p>
                                                            <p>Country Rank : {contestDat.countryRank}</p>
                                                            <p>Org Rank : {contestDat.organizationRank}</p>
                                                        </section>
                                                    )
                                                })} </>
                                                }
                                            

                                            {/* <section id="tab-1" className="active">
                                                <h3>Code</h3>
                                                
                                                <p>Thousands of free tutorials and online courses to help you learn software development from mobile devices to web applications and everything in between.</p>
                                            </section>
                                            
                                            <section id="tab-2">
                                                <h3>Graphic Design &amp; Illustration</h3>
                                                
                                                <p>Keep up to date or learn a new skill with our graphic design and illustration content.</p>
                                            </section>
                                            
                                            <section id="tab-3">
                                                <h3>Web Design</h3>
                                                
                                                <p>Free tutorials, learning guides, and online courses to help you learn web design.</p>
                                            </section> */}
                                        </div>
                                        </div> </>}

                                </div>
                            </div>
                            <div className="row gutters-sm">
                                <div className="col-sm-6 mb-3">
                                <div className="card1 h-100">
                                    <div className="card-body">
                                    <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                    <small>Web Design</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "80%", ariaValueNow:"80", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                                    </div>
                                    <small>Website Markup</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "72%", ariaValueNow:"72", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                                    </div>
                                    <small>One Page</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "89%", ariaValueNow:"89", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                                    </div>
                                    <small>Mobile Template</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "55%", ariaValueNow:"55", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                                    </div>
                                    <small>Backend API</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "66%", ariaValueNow:"66", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                <div className="card1 h-100">
                                    <div className="card-body">
                                    <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                    <small>Web Design</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "80%", ariaValueNow:"80", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                                    </div>
                                    <small>Website Markup</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "72%", ariaValueNow:"72", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                                    </div>
                                    <small>One Page</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "89%", ariaValueNow:"89", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                                    </div>
                                    <small>Mobile Template</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "55%", ariaValueNow:"55", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                                    </div>
                                    <small>Backend API</small>
                                    <div className="progress mb-3" style={{height: "5px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "66%", ariaValueNow:"66", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                                    </div>
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
