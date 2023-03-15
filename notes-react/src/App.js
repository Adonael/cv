import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import NotesList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([
    {
      key: nanoid(),
      text: "This is my first note!",
      date: "14.03.2023",
    },
    {
      key: nanoid(),
      text: "This is my second note!",
      date: "14.03.2023",
    },
    {
      key: nanoid(),
      text: "This is my third note!",
      date: "14.03.2023",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      key: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.key !== id);
    setNotes(newNotes);
  };

  const searchNote = (search) => {
    setSearch(search);
  };

  const onColorChange = () => {
    setDarkMode(!darkMode);
  };

  useEffect(()=>{
    const savedNotes=localStorage.getItem("notes-react-app-data");
    if(savedNotes!==null){
      setNotes(JSON.parse(savedNotes));
    }
  },[]);


  useEffect(()=>{
    window.localStorage.setItem("notes-react-app-data",JSON.stringify(notes));
  },[notes]);



  return (
    <div className={`${darkMode ? "dark-mode" : "white"}`}>
      <div className="container">
        <Header handleColorChange={onColorChange}/>
        <Search handleSearchNote={searchNote} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(search)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleSearchNote={searchNote}
        />
      </div>
    </div>
  );
}

export default App;
