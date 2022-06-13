import React from 'react'
import Note from '../Note/Note'

const NotesContainer = ({notes, handleDeleteNote}) => {
    return (
        <div>
            {
                !notes
                    ? <h1>Cargando</h1>
                    :
                    notes.map(note => {
                        return (
                            <Note
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                content={note.content}
                                date={note.date}
                                active={note.active}
                                handleDeleteNote={() => handleDeleteNote(note.id)}
                            ></Note>
                        )
                    })
            }
        </div>
    )
}

export default NotesContainer