import express from 'express'
import signupController from '../controllers/signupController.js'

const router = express.Router()

router.post('/signup', signupController)

export default router
