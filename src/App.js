import React, { useRef, useState } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
import "./styles/app.scss";
import data from "./util";
import { PlayOutline, PauseOutline } from "react-ionicons";

function App() {
  const s = { cursor: "pointer", color: "#e1e1e1" };

  //Adding states from the data from the util file
  const [songs, setSongs] = useState(data());

  //Adding state that manages the current song
  const [currentSong, setCurrentSong] = useState(songs[0]);

  //Adding state that stores if the song is playing or not
  const [isPlaying, setIsPlaying] = useState(false);

  //State that hold the data for the library
  const [libStatus, setLibStatus] = useState(false);

  //State for the time of the song
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    sliderPercentage: 0,
  });

  //Referencing that helps use to grab dom elements
  const audioRef = useRef(null);

  //Handler that checks if song has ended
  const songEndedHandler = () => {
    //Check for the index of the current song
    let index = songs.findIndex((song) => song.id === currentSong.id);

    setCurrentSong(songs[(index + 1) % songs.length]);

    //checking to see if the song is still playing
    playSongHandler("old");
  };

  //handler for the song tine update
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    const sliderPercentage = Math.round(
      (Math.round(currentTime) / Math.round(duration)) * 100
    );

    setSongInfo({ ...songInfo, currentTime, duration, sliderPercentage });
  };

  //Promise to make sure the audio file loads up
  const playSongHandler = async (state) => {
    const song = await audioRef.current;

    if (state === "new") {
      if (isPlaying) {
        song.pause();
        setIsPlaying(!isPlaying);
      } else {
        song.play();
        setIsPlaying(!isPlaying);
      }
    } else if (state === "library") {
      song.play();
    } else {
      if (isPlaying) {
        song.play();
      } else {
        song.pause();
      }
    }
  };

  //Handler that checks what icon to show
  const checkIconHandler = () => {
    return isPlaying ? (
      <PauseOutline
        onClick={() => playSongHandler("new")}
        height="5rem"
        width="5rem"
        style={s}
      />
    ) : (
      <PlayOutline
        onClick={() => playSongHandler("new")}
        height="5rem"
        width="5rem"
        style={s}
      />
    );
  };

  return (
    <div className="App">
      <Nav setLibStatus={setLibStatus} libStatus={libStatus} />
      <Song currentSong={currentSong} />
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        playSongHandler={playSongHandler}
        checkIconHandler={checkIconHandler}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        checkIconHandler={checkIconHandler}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        libStatus={libStatus}
        playSongHandler={playSongHandler}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndedHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
