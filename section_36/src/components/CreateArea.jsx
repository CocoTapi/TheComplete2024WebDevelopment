import React from "react";
import { useState } from "react";

function CreateArea() {
  // const [title, setTitle] = useState('');
  // const [note, setNote] = useState('');

  // const titleChangeHandler = () => {
  //   setTitle();
  // };

  // const noteChangeHandler = () => {
  //   setNote();
  // };

  // const submitHandler = () => {
  //   console.log(title, note);
  // }

  return (
    <div>
      <form>
        <input 
          name="title" 
          placeholder="Title" 
          
        />
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
