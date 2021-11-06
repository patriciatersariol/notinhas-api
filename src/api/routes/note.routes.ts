import { Request, Response, Router } from "express"
const router = Router()

router.get('/note', (req, res) => res.json('Primeira rota das notas!'))
router.post('/note', (req, res) => res.json(req.body))
router.get('note/:id', (req, res) => res.json('id'))
router.delete('note/:id', (req, res) => res.json('id'))
router.patch('note/:id', (req, res) => res.json('id'))

export default router