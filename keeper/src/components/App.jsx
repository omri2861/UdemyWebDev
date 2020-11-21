import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// This key will represent each note. It's better than an index, since if an item gets deleted,
// the next created item will not receive it's ID, ensuring each one is unique.
// This is why it also must be a global in the scope of the application.
var notesKey = 1;

function App() {
    const [notes, setNotes] = React.useState([
        {
            key: 0,
            title: "Note Title",
            content: "Note content",
        },
    ]);

    function addNote(title, content) {
        setNotes((prevNotes) => {
            return [
                ...prevNotes,
                {
                    key: notesKey,
                    title: title,
                    content: content,
                },
            ];
        });
        notesKey++;
    }

    return (
        <div>
            <Header />
            <CreateArea onSubmission={addNote} />
            {notes.map((note) => (
                <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
