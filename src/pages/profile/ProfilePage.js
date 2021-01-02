import React, {useState, useEffect} from 'react'
import Loading from '../logreg/loading'
import { Container } from 'react-bootstrap';
import Codeforces from './images/codeforces2.png'
import Codechef from './images/codechef2.png'
import Atcoder from './images/atcoder2.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './profile.style.css'
import Pie from './pie'
import Bar from './bar'
import Navbar from '../../components/headerComponent/Navbar'
import FooterSmall from '../../components/footerComponent/FooterSmall';
import Info from './FillInfo'
import demoImg from './images/demoImage.png'
// import user from './profileDat.json'

function ProfilePage() {
    const [user, setUsers] = useState({});
    const [error, setErrors] = useState(false);
    const creds= JSON.parse(localStorage.getItem("creds"));
    const uu=creds.username;
    const firstTime=creds.first;

    const [show,setShow]=useState(true);
    setTimeout(()=>{setShow(false)},10000);


    useEffect(() => {
        async function fetchData(){
            const res = await fetch(`https://api.codedigger.tech/auth/profile/${uu}/`);
            res
                .json()
                .then(res => setUsers(res))
                .catch(error => setErrors(true));
        }
        fetchData();
    });

        return (
        
            (firstTime===true)?<Info/>: 
                  (show==true) ? <Loading /> : 
                  <>
        <Navbar/>
        {console.log(user.result)}
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
                                    <h4 style={{color:"black"}}>{user.result.codechef.name}</h4>
                                    <p className="text-secondary mb-1">{uu}</p>
                                    <p className="text-muted font-size-sm">{user.result.codeforces.rank} Coder</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card1 mt-3">
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">Codeforces</h6>
                                    <span className="text-secondary">{user.result.codeforces.handle}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">Codechef</h6>
                                    <span className="text-secondary">{user.result.codechef.handle}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">SPOJ</h6>
                                    <span className="text-secondary">{user.result.spoj.error}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">UVA</h6>
                                    <span className="text-secondary">{user.result.uva.error}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">Atcoder</h6>
                                    <span className="text-secondary">{user.result.atcoder.error}</span>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-md-8">
                            <div className="card1 mb-3">
                                <div className="card-body" style={{color:"black"}}>
                                    <div>
                                        CODEFORCES
                                    </div>                                
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
                
        <Footer/>
        
<<<<<<< HEAD
             (firstTime===true)?<Info/>:(
                   <>
         <Navbar/>
         {JSON.stringify(user.result.codeforces.handle)}
         <FooterSmall/>
         </>
             )
         
     )
=======
        </>
            
    ) 
>>>>>>> 3079b5ba9924d1bc3ca59c05aeeaa7130a4ddc4e
    
}

export default ProfilePage
