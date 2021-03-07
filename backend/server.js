import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import materialRoutes from './routes/materialRoutes.js'
import profDetailRoutes from './routes/profDetailRoutes.js'
import aluminiRoutes from './routes/aluminiRoutes.js'
import morgan from 'morgan'
import cors from 'cors'
import aws from 'aws-sdk'
import path from 'path'
import bodyParser from 'body-parser'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

const app = express()

//database
connectDb()

//aws config
aws.config.update({
  secretAccessKey: process.env.AWS_Secret_Access_Key,
  accessKeyId: process.env.AWS_Access_Key_ID,
  region: 'ap-south-1',
})

//middleware
app.use(express.json())
app.use(cors())
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//routes
app.use('/api/user', userRoutes)
app.use('/api/material', materialRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/profDetail', profDetailRoutes)
app.use('/api/alumini', aluminiRoutes)

// Deploying on server ******************
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

// *********************

app.use(notFound)
app.use(errorHandler)

//server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server is running at ${PORT}`))
