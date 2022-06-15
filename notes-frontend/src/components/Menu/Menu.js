import React, {useEffect, useState} from 'react'
import Modal from '../Modal/Modal'
import { NoteCreate } from '../NoteEditCreate/NoteEditCreate'
import { getAllCategories } from '../../services/getCategories'

const Menu = ({handleCreateNote, handleNotes, handleNotesByCategory}) => {
    const [showModal, setShowModal] = useState(false)
    const [categories, setCategories] = useState([])

    const handleFilters = () => {
      getAllCategories().then(data => setCategories(data))
    }
    
    const handleOpenModal = () => {
        setShowModal(true)
    } 
    const handleCloseModal = () => {
        setShowModal(false)
    }

    useEffect(() => {
        handleFilters() //Get all filters updated
    }, [handleNotes, handleNotesByCategory])

    return (
        <div>
            <h3>Active notes</h3>
            <button>Archived Notes</button>
            <button onClick={handleOpenModal} >Create note</button>
            <label>Category filter</label>
            <select name='filter'
                onChange={e => handleNotesByCategory(e.target.value)}
                className='filter'
                defaultValue='all'>
                <option value='all'>All</option>
                {
                    categories.map(cat => {
                        return (<option key={cat.id} value={cat.id} >{cat.name}</option>)
                    })
                }
            </select>
            {showModal && <Modal><NoteCreate handleCreateNote={handleCreateNote} onClose={handleCloseModal}></NoteCreate> </Modal>}
        </div>
    )
}

export default Menu