import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };

    this.onSearchTermChangeEventHandler =
      this.onSearchTermChangeEventHandler.bind(this);
  }

  onSearchTermChangeEventHandler(event) {
    const { value } = event.target;
    this.setState({ searchTerm: value }, () => {
      this.props.onSearch(value);
    });
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={this.state.searchTerm}
          onChange={this.onSearchTermChangeEventHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
