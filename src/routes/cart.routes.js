import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { getCart, addToCart, removeFromCart, editQuantity } from '../controllers/cart.controller.js';


const router = express.Router();
router.use(protect);
router.get('/', getCart);
router.post('/', addToCart);
router.delete('/', removeFromCart);
router.patch('/', editQuantity);
export default router;