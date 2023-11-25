import express from 'express'
import { authUser, registerUser } from '../controller/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser).get(protect, admin)
router.post('/login', authUser)

export default router
