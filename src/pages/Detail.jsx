import React from "react";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/local-data";

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allNotes: getNote(`notes-4`),
    };
  }

  render() {
    if (this.state.allNotes === null) {
      return <p>TIdak ada catatan</p>;
    } else {
      return (
        <section>
          <NoteDetail {...this.state.allNotes} />
        </section>
      );
    }
  }
}

export default Detail;
