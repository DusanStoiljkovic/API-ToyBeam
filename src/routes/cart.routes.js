import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { getCart, addToCart, removeFromCart } from '../controllers/cart.controller.js';


const router = express.Router();
router.use(protect);
router.get('/', getCart);
router.post('/add', addToCart);
router.delete('/remove/:toyId', removeFromCart);
export default router;