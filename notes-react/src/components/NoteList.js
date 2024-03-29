import AddNote from "./AddNote";
import Note from "./Note";
import "./NoteList.css";
const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note id={note.key} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
      ))}
      <AddNote
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  );
};

export default NoteList;
