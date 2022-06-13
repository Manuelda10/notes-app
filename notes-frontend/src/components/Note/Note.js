import React, {useState} from 'react'
import Modal from '../Modal/Modal'
import {NoteEdit} from '../NoteEditCreate/NoteEditCreate'

const Note = ({ id, title, content, date, active, handleDeleteNote }) => {
    const [showModal, setShowModal] = useState(false)
    
    const handleOpenModal = () => {
        setShowModal(true)
    } 
    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <div className='note'>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>{date}</p>
            <p>{active}</p>
            <button>Archivar nota</button>
            <button onClick={handleOpenModal}>Editar nota</button>
            {showModal && <Modal><NoteEdit onClose={handleCloseModal}></NoteEdit> </Modal>}
            <button onClick={handleDeleteNote} >Eliminar nota</button>
        </div>
    )
}

export default Note;