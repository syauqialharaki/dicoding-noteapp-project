import React from "react";
import NoteDetail from "../components/NoteDetail";
import { getAllNotes } from "../utils/local-data";

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allNotes: getAllNotes(),
    };
  }

  render() {
    if (this.state.allNotes === null) {
      return <p>TIdak ada catatan</p>;
    }
    return (
      <section>
        <NoteDetail {...this.state.allNotes} />
      </section>
    );
  }
}

export default Detail;
