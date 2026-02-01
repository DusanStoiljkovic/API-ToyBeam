import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { getOrders, addOrder } from '../controllers/order.controller.js';

const router = express.Router();
router.get('/', protect, getOrders);
router.post('/', protect, addOrder)
export default router;