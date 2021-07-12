import React, { useEffect, useState } from "react";
import "./video.css";

const Video = () => {
    const [play, setPlay] = useState(false)

    return (<>
        <div className="video-Container">
            <img src="image/video/video.jpg" alt="video" />
            <i className="fas fa-play-circle" onClick={() => setPlay(true)} style={{ zIndex: play ? -1 : 10 }}></i>
            <div class="loader">
            </div>
        </div>
        <div className="video-player" style={{ display: play ? "flex" : "none" }}>
            <video width="100%" controls autoplay className="video-play">
                <source src="image/video/waterSport.mp4" type="video/mp4" />
            </video>
            <div className="close-btn">
                <i className="fas fa-times" onClick={() => setPlay(false)}></i>
            </div>
        </div>
    </>)
}

export default Video;