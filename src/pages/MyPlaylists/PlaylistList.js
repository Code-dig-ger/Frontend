import React, { useEffect,useState } from 'react'
import FooterSmall from '../../components/footerComponent/FooterSmall';
import Navbar from '../../components/headerComponent/Navbar'
import Loading from '../logreg/loading';
import './PlaylistList.css'

function PlaylistList(props) {
    const creds= JSON.parse(localStorage.getItem("creds"));
    const [error, setErrors] = useState(false);
    const [playlist, setPlaylist] = useState([]);

    function deletePlaylist(){
       const res = fetch(`https://api.codedigger.tech/lists/userlist/edit/${props.slug}`, {
               method:"DELETE",
               headers:{
                   "Content-Type":"application/json",
                   "Authorization":`Bearer ${creds.access}`
               }
               });
               res
               .catch(error => setErrors(true));
               window.location.href = `/${creds.username}/playlists`;
   }

    useEffect(() => {
        async function fetchData(){

            const res = await fetch(`https://api.codedigger.tech/lists/userlist/edit/${props.slug}`, {
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization":`Bearer ${creds.access}`
                    }
                    });
                    res
                        .json()
                        .then(res => setPlaylist(res))
                        .catch(error => setErrors(true));
                }
                fetchData();
    }, [])


    return (
        <>
        <Navbar />
            <h3
                style={{
                    textAlign: 'center'
                }}
            >{props.name}</h3>

            <p
                style={{
                    fontSize: '15px',
                    textAlign: 'center',
                    marginTop: '30px',
                    marginBottom: '40px'
                }}
            >This is a personalized playlist made by you. All the best and keep coding!</p>
            <button onClick={deletePlaylist}
                style={{
                    position: "absolute",
                    left: "86%",
                    top: "70px",
                    backgroundColor: 'darkred',
                    borderRadius: '15px',
                    color: 'white',
                    outline: 'none',
                    border: '0px',
                    padding: '13px'
                }}
            >Delete Playlist</button>
        {!playlist.result? (<Loading />) : 
            (
                <>
                <div style={{
                    margin: '0px',
                    padding: '0px',
                    marginLeft: '100px',
                    marginRight: '100px'
                }}>
                    <div className="row">
                        
                        {playlist.result.map((playlist, i) => {
                            return(
                                <>
                                 
                                <ul className="list list-inline">
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
                                        <a
                                                style={{
                                                    color: 'white',
                                                    backgroundColor: 'blue',
                                                    borderRadius: '15px',
                                                    width: '50%',
                                                    marginRight: '50px',
                                                    outline: 'none',
                                                    textAlign: 'center',
                                                    paddingTop: '10px',
                                                    textDecoration: 'none',
                                                    fontSize: '15px',
                                                    opacity: '0.9'
                                                }}
                                            >Remove</a>
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

export default PlaylistList
