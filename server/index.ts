import express from 'express'

require('dotenv').config()

const app = express()
app.use(express.json())

const PORT = 3000

app.listen(PORT, () => console.log(`You're listening on port ${PORT}`))