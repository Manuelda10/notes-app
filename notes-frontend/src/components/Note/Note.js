import React, {useEffect, useState} from 'react'
import { getCategoriesById } from '../../services/getCategories'
import Modal from '../Modal/Modal'
import {NoteEdit} from '../NoteEditCreate/NoteEditCreate'

const Note = ({ id, title, content, date, active, handleDeleteNote }) => {
    const [showModal, setShowModal] = useState(false)
    const [categories, setCategories] = useState([])
    
    const handleOpenModal = () => {
        setShowModal(true)
    } 
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleGetCategoriesById = (id) => {
        getCategoriesById(id).then(data => setCategories(data))
    }

    useEffect(() => {
        handleGetCategoriesById(id)
    }, [id])

    return (
        <div className='note'>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>{date}</p>
            <p>{active}</p>
            {
                categories.map(cat => {
                    return (<p>{cat.name}</p>)
                })
            }
            <button>Archivar nota</button>
            <button onClick={handleOpenModal}>Editar nota</button>
            {showModal && <Modal><NoteEdit categories={categories} onClose={handleCloseModal}></NoteEdit> </Modal>}
            <button onClick={handleDeleteNote} >Eliminar nota</button>
        </div>
    )
}

export default Note;