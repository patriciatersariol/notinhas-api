import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { createConnection } from 'typeorm'

import notebookRoutes from './api/routes/notebook.routes'
import noteRoutes from './api/routes/note.routes'

const app = express()
createConnection()

//middlewares

app.use(cors())
app.use(express.json())

//routes
app.use(notebookRoutes)
app.use(noteRoutes)


app.listen(3000, () => console.log('Server running on port 3000'))
