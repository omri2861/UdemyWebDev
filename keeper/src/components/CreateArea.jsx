import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Collapse from "@material-ui/core/Collapse";

function CreateArea(props) {
  const [newNote, setNewNote] = React.useState({title: "", content: ""});
  const [isCollapsed, setIsCollapsed] = React.useState(true);

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

  function expand() {
    setIsCollapsed(false);
  }

  return (
    <div onClick={expand}>
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          value={newNote.title}
          onChange={updateForm}
        />
        <Collapse in={!isCollapsed}>
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
          onChange={updateForm}
        />
        <Fab onClick={submit}><AddIcon /></Fab>
        </Collapse>
      </form>
    </div>
    );
}

export default CreateArea;
