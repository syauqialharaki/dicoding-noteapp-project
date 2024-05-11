import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  if (!notes.length) {
    return <p>Tidak ada catatan</p>;
  }

  return (
    <div className="flex flex-wrap content-start ">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  );
}
export default NoteList;
