import React, {useState} from 'react'

const NoteCreate = ({ onClose, handleCreateNote }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [categories, setCategories] = useState('')

    const handleSubmit = () => {
        console.log(title)
        console.log(content)
        console.log(categories)
        const note = {
            title,
            content,
            categories: categories === '' ? undefined : categories
        }
        handleCreateNote(note)
        onClose()
    }

    return (
        <div className='notes-edit-container'>
            <div className='notes-edit'>
                <h1>Edit/Create Notes</h1>
                <label>Title</label><br></br>
                <input name='title' type='text'
                    placeholder='Note Title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}></input><br></br>
                <label>Content</label><br></br>
                <input name='content' type='text'
                    placeholder='Note content'
                    value={content}
                    onChange={e => setContent(e.target.value)}></input><br></br>
                <label>Categories</label><br></br>
                <textarea name='categories'
                    value={categories}
                    onChange={e => setCategories(e.target.value)}></textarea><br></br>
                <button onClick={handleSubmit}>Save</button>
                <button onClick={onClose} >Cerrar</button>
            </div>
        </div>
    )
}

const NoteEdit = ({onClose}) => {
    return (
        <div>
            <h2>Note Edit</h2>
            <button onClick={onClose} >Close</button>
        </div>
    )
}

export {NoteCreate, NoteEdit} 