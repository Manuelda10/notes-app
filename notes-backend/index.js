const express = require('express')
const cors = require('cors')
const app = express()


app.get('/', (req, res) => {
    res.send('<h1>NOTES API</h1>')
})

const PORT = 3030
const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${3030}`)
})