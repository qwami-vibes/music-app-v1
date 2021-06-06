import React from "react";
import { MusicalNotesOutline } from "react-ionicons";

const Nav = ({setLibStatus, libStatus}) => {
  return (
    <nav className="nav">
      <h1>Waves</h1>
      <button onClick={() => setLibStatus(!libStatus)}>
        Library
        <MusicalNotesOutline width="3rem" height="3rem" color="#e1e1e1" />
      </button>
    </nav>
  );
};

export default Nav;
