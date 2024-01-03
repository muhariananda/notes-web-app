import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const { value } = event.target;
    if (value.length <= 50) {
      this.setState({ title: value });
    }
  }

  onBodyChangeEventHandler(event) {
    const { value } = event.target;
    this.setState({ body: value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const { title, body } = this.state;
    const remainingCharacters = 50 - title.length;

    return (
      <div className="note-input">
        <h2>Buat catatan</h2>

        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {remainingCharacters}
          </p>

          <input
            className="note-input__title"
            type="text"
            placeholder="Judul..."
            value={title}
            required={true}
            onChange={this.onTitleChangeEventHandler}
          />

          <textarea
            className="note-input__body"
            cols="30"
            rows="10"
            placeholder="Catatan..."
            value={body}
            required={true}
            onChange={this.onBodyChangeEventHandler}
          />

          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
