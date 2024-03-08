import React, { useState } from "react";
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

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    });
  }

  let noteList;
  noteList = notes.map((note, index) => {
    return ( 
      <Note  
        key={index} 
        id={index} 
        title={note.title} 
        content={note.content} 
        onDelete={deleteNote} />
    )
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
