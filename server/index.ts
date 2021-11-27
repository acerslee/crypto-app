import express from 'express'
import { getTicker } from './api/apiCall'

require('dotenv').config()

const app = express()
app.use(express.json())

app.get('/tickers', async (req, res) => {
    try {
        res.send('testing')
    } catch(e) {
        res.status(500).send(e)
    }
})

const PORT = 3000

app.listen(PORT, () => console.log(`You're listening on port ${PORT}`))