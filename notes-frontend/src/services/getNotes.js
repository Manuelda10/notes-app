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