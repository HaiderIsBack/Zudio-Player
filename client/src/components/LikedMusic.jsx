import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react";

const LikedMusics = () => {
    const [likedMusic,setLikedMusic] = useState([]);
    return (
        <>
            {likedMusic.length > 0 ?
            <div className="container">
                {likedMusic.map(music => {
                    
                })}
            </div>
            : null}
        </>
    )
}

export default LikedMusics;