import express from 'express'
import userController from '../controllers/user'
import { checkAuthenticated } from '../middlewares'

const router = express.Router();

// Retrieve all users
router.get("/", userController.findAll);
// Create a new user
router.post("/", checkAuthenticated, userController.create);

export default router
