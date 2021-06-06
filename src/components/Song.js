import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song">
      <img src={currentSong.cover} alt="Song Cover" />
      <h1>{currentSong.name}</h1>
      <h2>{currentSong.artist}</h2>
    </div>
  );
};

export default Song;
