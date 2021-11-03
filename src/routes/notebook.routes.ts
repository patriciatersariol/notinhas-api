import { response, Router } from "express"
const router = Router()

router.get('/notebook', (req, res) => res.json('First route is working!'))

export default router