import React from "react";
import NoteBody from "./NoteBody";
import NoteHeader from "./NoteHeader";
import { getInitialData } from "../utils";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchTerm: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.filterNotesBySearchTerm = this.filterNotesBySearchTerm.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ],
    }));
  }

  onArchiveHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onSearchHandler(searchTerm) {
    this.setState({ searchTerm });
  }

  filterNotesBySearchTerm(note) {
    const { searchTerm } = this.state;
    return note.title.toLowerCase().includes(searchTerm.toLocaleLowerCase());
  }

  render() {
    const { notes } = this.state;
    const filteredNotes = notes.filter(this.filterNotesBySearchTerm);

    return (
      <div className="note-app">
        <NoteHeader onSearch={this.onSearchHandler} />

        <NoteBody
          notes={filteredNotes}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
