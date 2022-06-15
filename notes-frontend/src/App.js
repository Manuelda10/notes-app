import React, {useState, useEffect} from 'react'
import Menu from './components/Menu/Menu'
import NotesContainer from './components/NotesContainer/NotesContainer';
import { getAllNotes } from './services/getNotes';
import deleteNote from './services/deleteNote';
import './App.css';
import createNote from './services/createNote';
import updateNote from './services/updateNote'

function App() {

  const [notes, setNotes] = useState([])
    
  const handleNotes = () => {
      getAllNotes().then(data => {
          setNotes(data)
          console.log(data)
      })
  }

  const handleDeleteNote = (id) => {
      deleteNote(id).then(res => handleNotes())
  }

  const handleCreateNote = (note) => {
      createNote({note}).then(res => handleNotes())
  }

  const handleUpdateNote = (id, note) => {
      updateNote(id, {note}).then(res => handleNotes())
  }

  useEffect(() => {
      handleNotes()
  }, [])

  return (
    <div className='App'>
      <h1 className='title-page'>Notes</h1>
      <Menu handleCreateNote={handleCreateNote}></Menu>
      <NotesContainer
        notes={notes}
        handleNotes={handleNotes}
        handleDeleteNote={handleDeleteNote}
        handleUpdateNote={handleUpdateNote}></NotesContainer>
    </div>
  )
}

export default App;
