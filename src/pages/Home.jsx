import React from "react";
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils/local-data";

class AllNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allNotes: getAllNotes(),
    };
  }

  render() {
    return (
      <section>
        <NoteList notes={this.state.allNotes} />
      </section>
    );
  }
}

export default AllNotes;
