import React from "react";
import { addNote } from "../utils/local-data";
import NoteAdd from "../components/NoteAdd";

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    addNote({ title, body });
  }
  render() {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NoteAdd addNote={this.onAddNotesHandler} />
      </section>
    );
  }
}
export default Add;
