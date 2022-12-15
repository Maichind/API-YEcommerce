import { Router } from 'express'
import { getImages, getImage, postImages, putImage, deleteImage } from '../controllers/controllers.js'
import fileUpload from 'express-fileupload'

const router = Router()

router.get('/images', getImages)
router.get('/images/:id', getImage)
router.post('/images', fileUpload({
  useTempFiles : true,
  tempFileDir : './assets'
}), postImages)
router.put('/images', putImage)
router.delete('/images/:id', deleteImage)

export default router;