import React, {useState} from 'react'
import Modal from '../Modal/Modal'
import {NoteCreate} from '../NoteEditCreate/NoteEditCreate'

const Menu = ({handleCreateNote}) => {
    const [showModal, setShowModal] = useState(false)
    
    const handleOpenModal = () => {
        setShowModal(true)
    } 
    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <div>
            <h3>Active notes</h3>
            <button>Archived Notes</button>
            <button onClick={handleOpenModal} >Create note</button>
            <label>Category filter</label>
            <select name='filter' >
                <option value='1'>option 1</option>
                <option value='2'>option 2</option>
                <option value='3'>option 3</option>
            </select>
            {showModal && <Modal><NoteCreate handleCreateNote={handleCreateNote} onClose={handleCloseModal}></NoteCreate> </Modal>}
        </div>
    )
}

export default Menu