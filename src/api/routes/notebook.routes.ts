import { Request, Response, Router } from "express"
const router = Router()

router.get('/notebook', (req, res) => res.json('First route is working!'))
router.post('/notebook', (req, res) => res.json(req.body))
router.get('notebook/:id', (req, res) => res.json('id'))
router.delete('notebook/:id', (req, res) => res.json('id'))
router.patch('notebook/:id', (req, res) => res.json('id'))

export default router