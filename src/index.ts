import 'reflect-metadata'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { createConnection } from 'typeorm'

import notebookRoutes from './routes/notebook.routes'

const app = express()
createConnection()

//middlewares

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use(notebookRoutes)


app.listen(3000)
console.log('Server running on port 3000')