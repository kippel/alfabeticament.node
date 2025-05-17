import { Router } from 'express'

const router = Router()

router.post('/login', (req, res) => {
    console.log('login')

    res.json({})
})

export default router