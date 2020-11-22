import React from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = React.useState({title: "", content: ""});

  function updateForm(event) {
    const { name, value } = event.target;

    setNewNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });

  }

  function submit(event) {
    props.onSubmission(newNote);
    setNewNote({title: "", content: ""});
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={newNote.title}
          onChange={updateForm}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
          onChange={updateForm}
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
    );
}

export default CreateArea;
