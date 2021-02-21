import React, { useEffect,useState } from 'react'
import './MyPlaylist.css'
import Navbar from '../../components/Header/Navbar'
import FooterSmall from '../../components/Footer/FooterSmall';
import PlaylistModal from '../../components/MyPlaylists/AddPlaylistModal'


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
        
        <div className="mb-4">
            <Navbar />
           <div className="container">
                <h2
                    style={{
                        textAlign: 'center'
                    }}
                >My Playlists</h2>

                <p
                    style={{
                        fontSize: '17px',
                        textAlign: 'center',
                    }}
                >All your playlists are given below.</p>
            </div>
                    <PlaylistModal acc={creds.access}/>
            <div className="container" >
                <div className="row align-middle">
                {playlists.map((playlist,i) => {
                    return(
                        <>
                            <div className="col-md-6 col-lg-4 column" style={{transition:"0.5s"}}>
                            <div className={i % 2 === 0 ? "card11 gr-1" : "card11 gr-2"}>
                                <div className="txt">
                                <h1>{playlist.name}</h1>
                                        <p>{playlist.description}</p>
                                </div>
                                <a href={`/list/${uu}/${playlist.slug}`}>View Playlist</a>
                                <div className="ico-card11">
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
