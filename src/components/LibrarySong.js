import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  setSongs,
  songs,
  checkIconHandler,
  setIsPlaying,
  playSongHandler
}) => {
  //Function that sets the song being clicked
  const setSongHandler = () => {
    //setting some stuffs in the data file
    const newSongs = songs.map((s) => {
      if (song.id === s.id) {
        return {
          ...song,
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

    //setting the current song
    setCurrentSong(song);

    //run the promise
    playSongHandler('library');
    setIsPlaying(true);
    checkIconHandler();
  };

  return (
    <div
      onClick={setSongHandler}
      className={`library__song ${song.active ? "active" : ""}`}
    >
      <img src={song.cover} alt="Song Cover" />
      <div className="song__details">
        <h4>{song.name}</h4>
        <h5>{song.artist}</h5>
      </div>
    </div>
  );
};

export default LibrarySong;
