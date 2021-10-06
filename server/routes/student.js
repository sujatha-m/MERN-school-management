import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Rouer is working in port 5000')
})

export default router
