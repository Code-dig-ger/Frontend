import React, {useState, useEffect} from 'react'
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

function ProfilePage() {
    const [user, setUsers] = useState({});
    const [error, setErrors] = useState(false);
    const creds= JSON.parse(localStorage.getItem("creds"));
    const uu=creds.username;
    const firstTime=creds.first;


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
        
             (firstTime===true)?<Info/>:(
                   <>
         <Navbar/>
         {JSON.stringify(user.result.codeforces.handle)}
         <FooterSmall/>
         </>
             )
         
     )
    
}

export default ProfilePage
