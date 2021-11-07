import { Request, Response, Router } from "express"
import { getRepository } from "typeorm"
import { Note } from "../../entities/Note"
import { Notebook } from "../../entities/Notebook"
const router = Router()

router.get('/notebook', async (req, res) => {
    const notebooks = await getRepository(Notebook).find()
    return res.json(notebooks)
})

router.post('/notebook', async (req, res) => {

    const teste = req.body

    const newNotebookReq = {
        name: req.body.name,
        description: req.body.description ,
        category: req.body.category
    }
    
    const notebookRepo = getRepository(Notebook)
    const notebook = notebookRepo.create(newNotebookReq)

    try {
        const result = await notebookRepo.save(notebook)
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
})


router.get('/notebook/:id/notes', async (req, res) => {
    const notebookId = req.params.id
    const notesRepo = getRepository(Note)
    
    try {
        const result = await notesRepo.find({ where: {notebook: notebookId}})
        return res.json(result)
    }catch(error) {
        return res.json(error)
    }
    
})
router.delete('notebook/:id', (req, res) => res.json('id'))
router.patch('notebook/:id', (req, res) => res.json('id'))

export default router