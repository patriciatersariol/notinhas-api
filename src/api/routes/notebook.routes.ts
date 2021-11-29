import { Request, Response, Router } from "express"
import { getRepository } from "typeorm"
import { createNotebook } from "../../controllers/notebook.controller"
import { Note } from "../../entities/Note"
import { Notebook } from "../../entities/Notebook"
const router = Router()

router.get('/health', (req, res) => {
    return res.status(203).json('OK')
})

router.get('/notebook', async (req, res) => {
    const notebooks = await getRepository(Notebook).find()
    return res.json(notebooks)
})

router.post('/notebook', createNotebook)

router.get('/notebook/:id/notes', async (req, res) => {
    const notebookId = req.params.id
    const notesRepo = getRepository(Note)
    
    try {
        const result = await notesRepo.find({ where: {notebook: notebookId}})
        console.log('aqui')

        return res.json(result)
    }catch(error) {
        return res.json(error)
    }
    
})
router.delete('notebook/:id', (req, res) => res.json('id'))
router.patch('notebook/:id', (req, res) => res.json('id'))

export default router