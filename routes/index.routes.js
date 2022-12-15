import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.send('E-commerce Express app!')
});

export default router;