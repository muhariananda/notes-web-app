import React from "react";
import NoteSearch from "./NoteSearch";

const NoteHeader = ({ onSearch }) => (
  <div className="note-app__header">
    <h1>Notes</h1>
    <NoteSearch onSearch={onSearch} />
  </div>
);

export default NoteHeader;
