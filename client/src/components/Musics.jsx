import { useState } from "react";
import "../styles/Musics.css"
import "bootstrap/dist/css/bootstrap.css"

const Musics = () => {
    const [musics,setMusics] = useState([
        {
            "id": 1,
            "title": "Ultrakill De Funk",
            "image": "/images/demo.jpg",
            "desc": "Crazy Mano"
        },
        {
            "id": 2,
            "title": "Ultrakill De Funk",
            "image": "/images/demo.jpg",
            "desc": "Crazy Mano"
        }
    ]);
    return (
      <>
        <h1 className="mx-1 my-4">Music List</h1>
        {musics.length > 0 ? 
        <div className="container">
            {musics.map(music => {
                return <Music key={music.id} music={music} />
            })}
        </div>
        : <p>No Music Found</p>}
      </>
    );
}

const Music = ({ music }) => {
    return (
      <>
        <div className="card my-1 rounded-2" style={{background: "rgba(255,255,255,0.2)"}}>
            <div className="row d-flex justify-content-center align-items-center px-2 py-2">
                <div className="col-3">
                    <img src={music.image} alt={music.title} className="music-img" />
                </div>
                <div className="col-9 d-flex justify-content-center flex-column">
                    <h5>{music.title}</h5>
                    <p>{music.desc}</p>
                </div>
            </div>
        </div>
      </>
    );
}

export default Musics;