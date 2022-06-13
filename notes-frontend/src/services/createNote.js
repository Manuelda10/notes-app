const API_URL = 'http://localhost:3030'

const createNote = async ({note}) => {
    return fetch(`${API_URL}/api/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        res.json()
    })
}

export default createNote