import React from "react";
import NotesList from "./NotesList";
import NoteInput from "./NoteInput";

const NoteBody = ({ notes, addNote, onDelete, onArchive }) => {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />

      <h2>Catatan Aktif</h2>
      <NotesList
        notes={activeNotes}
        onDelete={onDelete}
        onArchive={onArchive}
      />

      <h2>Arsip</h2>
      <NotesList
        notes={archivedNotes}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
};

export default NoteBody;
