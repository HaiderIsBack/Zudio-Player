import { useState, useRef, useEffect } from "react";
import "../styles/Player.css"

import { IconPlayerPlayFilled, IconPlayerSkipForwardFilled, IconPlayerSkipBackFilled, IconPlayerPauseFilled } from "@tabler/icons-react";

const Player = () => {
    const [isPlaying,setIsPlaying] = useState(false)
    const handleMusicState = (state) =>{
        setIsPlaying(state);
    }
  return (
    <>
        <MusicImage onPlay={isPlaying} />
        <MusicController onPlay={handleMusicState} />
    </>
  );
}

const MusicImage = ({ onPlay }) => {
    const musicIMG = useRef(null);

    useEffect(()=>{
        if(onPlay){
            musicIMG.current.classList.add("playing");
        }else{
            musicIMG.current.classList.remove("playing");
        }
    },[onPlay])
    return (<>
    <div className="music-player-container">
        <img className="music-player-image" ref={musicIMG} src="/images/demo.jpg" alt="demo" />
    </div>
    </>)
}

const MusicController = ({ onPlay }) => {
    const [currentMusic,setCurrentMusic] = useState("/audio/demo.mp3");
    const [currTime,setCurrTime] = useState(0)
    const [maxDuration,setMaxDuration] = useState(0)
    const [isPlaying,setIsPlaying] = useState(false);

    const audio = useRef(null);
    const audioRange = useRef(null);

    //Time Adjust
    const timeAdjust = (time) => {
        time = Math.floor(time)
        var minutes = 0;
        var seconds = time;

        if(seconds >= 60){
            seconds = time % 60;
        }
        if(seconds < 10){
            seconds = "0" + seconds;
        }
        minutes = Math.floor(time / 60);

        return `${minutes} : ${seconds}`;
    }

    useEffect(()=>{
        if(isPlaying){
            audio.current.play();
            onPlay(true);
        }else{
            audio.current.pause()
            onPlay(false);
        }
    },[isPlaying]);
    
    useEffect(()=>{
        audio.current.onloadedmetadata = () => {
            setMaxDuration(Math.floor(audio.current.duration));
        }
        audio.current.ontimeupdate = () => {
            audioRange.current.value = Math.floor(Math.floor(audio.current.currentTime) / maxDuration * 100);
            console.log(maxDuration)
        }
        audio.current.onended = () => {
            audio.current.currentTime = 0;
            setIsPlaying(false);
        }
    },[audio]);
    

    const handleMusicState = () => {
        setIsPlaying(prev => !prev);
    }
    return (<>
        <div className="music-controller-container">
            <audio src={currentMusic} ref={audio} preload="metadata"></audio>
            <h2>Ultra Kill Phonk</h2>
            <h5 className="musicDuration">{timeAdjust(currTime)} / {timeAdjust(maxDuration)}</h5>
            <input type="range" ref={audioRange}/>
            <div className="music-controller-btns">
                <IconPlayerSkipBackFilled className="previousMusic"/>
                {isPlaying ?
                <IconPlayerPauseFilled onClick={handleMusicState} className="playPauseMusic"/> :
                <IconPlayerPlayFilled onClick={handleMusicState} className="playPauseMusic"/>
                }
                <IconPlayerSkipForwardFilled className="nextMusic"/>
            </div>
        </div>
    </>)
}

export default Player;