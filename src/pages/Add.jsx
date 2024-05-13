import React from "react";
import { addNote } from "../utils/local-data";
import NoteAdd from "../components/NoteAdd";

function Add() {
  function onAddNotesHandler(note) {
    addNote(note);
  }

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NoteAdd addNote={onAddNotesHandler} />
      </section>
    </>
  );
}
export default Add;
