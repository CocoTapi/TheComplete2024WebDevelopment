import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(note);
    console.log("SUBMIT");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input 
          name="title" 
          placeholder="Title" 
          onChange={handleChange}
          value={note.title}
        />
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          onChange={handleChange}
          value={note.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
