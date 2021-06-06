import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  setSongs,
  checkIconHandler,
  setIsPlaying,
  isPlaying,
  libStatus,
  playSongHandler
}) => {
  return (
    <div className={`library ${libStatus ? "library-active" : ""}`}>
      <h1 className="library__title">Library</h1>
      <div className="library__list">
        {songs.map((song) => (
          <LibrarySong
            id={song.id}
            key={song.id}
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            setSongs={setSongs}
            checkIconHandler={checkIconHandler}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
            playSongHandler={playSongHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
