import express from 'express'
import userController from '../controllers/user'

const router = express.Router();

// Retrieve all users
router.get("/", userController.findAll);
// Create a new user
router.post("/", userController.create);

export default router
