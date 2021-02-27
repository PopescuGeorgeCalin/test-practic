import express from 'express'
import { authController } from '../controllers'

const router = express.Router();

// Retrieve all users
router.post("/", authController.login);

export default router
