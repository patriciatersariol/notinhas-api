import 'reflect-metadata'
import express from 'express'
import cors from 'cors'

import notebookRoutes from './api/routes/notebook.routes'
import noteRoutes from './api/routes/note.routes'

const app = express()
    
app.use(cors())
app.use(express.json())
    
app.use(notebookRoutes)
app.use(noteRoutes)

module.exports = app