import React, {useState} from 'react'

const NoteEdit = ({ onClose, handleCreateNote, info, categories, handleUpdateNote }) => {
    let initialCategories = []

    if (info !== undefined) {
        initialCategories = categories.map(cat => cat.name)
    } 
    
    const [title, setTitle] = useState(info !== undefined ? info.title : '')
    const [content, setContent] = useState(info !== undefined ? info.content : '')
    const [categoriesString, setCategoriesString] = useState(categories !== undefined ? initialCategories.join(', ') : '')

    const formatCategories = () => {
        const catsArray = categoriesString.split(/\s*[,;.]\s*/) //Separete the string depending if it has commas, dots, or  semicoloms
        return catsArray
    }

    const handleSubmit = () => {
        const categories = formatCategories()
        const note = {
            title,
            content,
            categories
        }
        if (info !== undefined) {
            handleUpdateNote(info.id, note)
        } else {
            handleCreateNote(note)
        }
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
                    value={categoriesString}
                    onChange={e => setCategoriesString(e.target.value)}></textarea><br></br>
                <button onClick={handleSubmit}>Save</button>
                <button onClick={onClose} >Cerrar</button>
            </div>
        </div>
    )
}

const NoteCreate = ({onClose, handleCreateNote}) => {
    return (
        <NoteEdit
            onClose={onClose}
            handleCreateNote={handleCreateNote}
            info={undefined}
            categories={undefined}
        ></NoteEdit>
    )
}

export {NoteCreate, NoteEdit} 