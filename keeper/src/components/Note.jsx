import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  // Keeping an ID as well, so it can be used for deletion
  const id = props.id;

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.onDelete(id)}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
