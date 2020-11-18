import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Note title="Note" content="This is a note"/>
      <Footer />
    </div>
  );
}

export default App;
