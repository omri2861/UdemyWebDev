import React from "react";

function CreateArea(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  function updateForm(event) {
    const { name, value } = event.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  }

  function submit(event) {
    props.onSubmission(title, content);
    setTitle("");
    setContent("");
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={updateForm}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onChange={updateForm}
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
    );
}

export default CreateArea;
