const API_URL = 'http://localhost:3030'

export const getAllNotes = async () => {
    return fetch(`${API_URL}/api/notes/all`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' 
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        return res.json()
    })
}

export const getNotesByCategory = async (id) => {

    if (id === 'all') {
        return fetch(`${API_URL}/api/notes/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (!res.ok) throw new Error('Response get notes by category is not ok')
            return res.json()
        })
    }

    return fetch(`${API_URL}/api/categories/${id}/notes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response get notes by category is not ok')
        return res.json()
    })
}