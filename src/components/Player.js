import React, { useEffect } from "react";
import { ChevronBackOutline, ChevronForwardOutline } from "react-ionicons";

const Player = ({
  audioRef,
  setSongInfo,
  songInfo,
  checkIconHandler,
  currentSong,
  songs,
  setSongs,
  setCurrentSong,
  playSongHandler,
}) => {
  const s = { cursor: "pointer", color: "#e1e1e1" };

  //Function that converts the timestamp into normal time
  const changeTimeStamp = (time) => {
    return (
      Math.floor(time / 60) + `:` + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  //Slider that updates the song
  const sliderUpdateHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  //function that skips track
  const skipTrackHandler = (direction) => {
    //Check for the index of the current song
    let index = songs.findIndex((song) => song.id === currentSong.id);

    //checking the direction of the skip
    if (direction === "forward") {
      setCurrentSong(songs[(index + 1) % songs.length]);
    } else {
      if (index - 1 === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }
      setCurrentSong(songs[(index - 1) % songs.length]);
    }

    //checking to see if the song is still playing
    playSongHandler("old");
  };

  useEffect(() => {
    const newSongs = songs.map((s) => {
      if (currentSong.id === s.id) {
        return {
          ...currentSong,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });

    setSongs(newSongs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);

  const sliderAnimate = {
    transform: `translate(${songInfo.sliderPercentage}%`,
  };

  return (
    <div className="player">
      <div className="player__time">
        <p>{changeTimeStamp(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="input__tracker"
        >
          <input
            type="range"
            name="length"
            id="song-length"
            className="player__time--input"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={sliderUpdateHandler}
          />
          <div style={sliderAnimate} className="input__tracker--slide"></div>
        </div>
        <p>{songInfo.duration ? changeTimeStamp(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="player__controls">
        <ChevronBackOutline
          onClick={() => skipTrackHandler("back")}
          height="3rem"
          width="3rem"
          style={s}
        />
        {checkIconHandler()}
        <ChevronForwardOutline
          onClick={() => skipTrackHandler("forward")}
          height="3rem"
          width="3rem"
          style={s}
        />
      </div>
    </div>
  );
};

export default Player;
