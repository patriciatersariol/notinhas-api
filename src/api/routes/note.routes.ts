import { Request, Response, Router } from "express"
import { getRepository } from "typeorm"
import { Note } from "../../entities/Note"
const router = Router()

router.get('/note', (req, res) => res.json('Primeira rota das notas!'))

router.post('/note', async (req, res) => {
    const newNoteReq = {
        title: req.body.title,
        subtitle: req.body.subtitle,
        text: req.body.text,
        notebookId: req.body.notebook
    }
    const noteRepo = getRepository(Note)
    const newNote = noteRepo.create(newNoteReq)
    try {
        const result = await noteRepo.save(newNote)
        return res.json(result)
    }catch(error) {
        return res.json(error)
    }
    
    
})
router.get('note/:id', (req, res) => res.json('id'))
router.delete('note/:id', (req, res) => res.json('id'))
router.patch('note/:id', (req, res) => res.json('id'))

export default router