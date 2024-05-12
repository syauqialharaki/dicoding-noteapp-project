import React from "react";
import NoteDetail from "../components/NoteDetail";
import { getAllNotes } from "../utils/local-data";
import { getNote } from "../utils/local-data";
import { useParams } from "react-router-dom";

function DetailWrapper() {
  const { id } = useParams();
  return <Detail id={id} />;
}

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };
  }

  render() {
    if (this.state.notes === null) {
      return <p>TIdak ada catatan</p>;
    } else {
      return (
        <section>
          <NoteDetail {...this.state.notes} />
        </section>
      );
    }
  }
}

export default DetailWrapper;
