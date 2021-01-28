import React, { useEffect,useState } from 'react'
import './MyPlaylist.scss'
import Navbar from '../../components/headerComponent/Navbar'
import FooterSmall from '../../components/footerComponent/FooterSmall';
import PlaylistList from './PlaylistList'

function MyPlaylists(props) {
    const creds= JSON.parse(localStorage.getItem("creds"));
    const uu = props.handle;
    const [error, setErrors] = useState(false);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        async function fetchData(){

        const res = await fetch(`https://api.codedigger.tech/lists/userlist/`, {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${creds.access}`
                }
                });
                res
                    .json()
                    .then(res => setPlaylists(res))
                    .catch(error => setErrors(true));
            }
            fetchData();
    }, [])

    return (
        
        <div>
            <Navbar />
            <h2
                style={{
                    textAlign: 'center'
                }}
            >My Playlists</h2>

            <p
                style={{
                    fontSize: '17px',
                    textAlign: 'center',
                    marginTop: '30px',
                    marginBottom: '40px'
                }}
            >All your playlists are given below.</p>

            <div className="container h-100">
                <div className="row align-middle">
                {playlists.map((playlist,i) => {
                    return(
                        <>
                            <div className="col-md-6 col-lg-4 column">
                            <div className={i % 2 === 0 ? "card gr-1" : "card gr-2"}>
                                <div className="txt">
                                <h1>{playlist.name}</h1>
                                        <p>{playlist.description}</p>
                                </div>
                                <a href={`/playlists/${playlist.name}/${playlist.slug}`}>View Playlist</a>
                                <div className="ico-card">
                                <i className={i % 2 === 0 ? "fa fa-empire" : "fa fa-codepen"}></i>
                            </div>
                            </div>
                            </div>    
                        </>
                    )
                })}
             </div>
            </div>

            <FooterSmall />         
        </div>
    )
}

export default MyPlaylists
