import express from 'express';
import { register, login, getUser, editUser, changePassword } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';


const router = express.Router();
router.get('/getUser', protect, getUser);
router.post('/register', register);
router.post('/login', login);
router.put('/edit', protect, editUser);
router.patch('/changePassword', protect, changePassword);
export default router;