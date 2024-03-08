import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    });
  };

  // const deleteHandler = () => {
  //   console.log("delete item")
  // }

  let noteList;
  noteList = notes.map((note) => {
    return <Note key={note.title} title={note.title} content={note.content} />
  })

  return (
    <div>
      <Header />
      <CreateArea onSubmit={addNote} />
      <ul>
        {noteList}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
