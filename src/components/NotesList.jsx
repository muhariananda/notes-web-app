import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ notes, onDelete, onArchive }) => {
  const isNoteEmpty = notes.length === 0;

  return !isNoteEmpty ? (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  ) : (
    <p className="notes-list__empty-message">Tidak ada catatan</p>
  );
};

export default NotesList;
