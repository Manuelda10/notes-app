const API_URL = 'http://localhost:3030'

export const getCategoriesById = async (id) => {
    return fetch(`${API_URL}/api/notes/${id}/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' 
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        return res.json()
    })
}