import express from 'express'
import dotenv from 'dotenv'
import Connection from './config/db.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000

const url = process.env.MONGODB_URL
Connection(url)

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
