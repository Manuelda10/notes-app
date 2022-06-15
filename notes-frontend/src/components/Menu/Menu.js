import React, {useEffect, useState} from 'react'
import Modal from '../Modal/Modal'
import { NoteCreate } from '../NoteEditCreate/NoteEditCreate'
import { getAllCategories } from '../../services/getCategories'

const Menu = ({handleCreateNote, handleNotes, handleNotesByCategory, active, handleActive}) => {
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
            {active === true ? <h3>Notas activas</h3> : <h3>Notas archivadas</h3>}
            <button onClick={() => handleActive(!active)}>{
                active === true ? 'Archived Notes' : 'Active Notes'
            }</button>
            <button onClick={handleOpenModal} >Create note</button>
            <label>Category filter</label>
            <select name='filter'
                onChange={e => handleNotesByCategory(e.target.value, active)}
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