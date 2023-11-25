import express from 'express'
import dotenv from 'dotenv'
import Connection from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

const url = process.env.MONGODB_URL
Connection(url)

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
