import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { addReview, getReviewsByProductId, editReview, deleteReview, getReviewsByUserId } from '../controllers/review.controller.js';


const router = express.Router();
router.post('/', protect, addReview);
router.get('/user', protect, getReviewsByUserId);
router.get('/:productId', getReviewsByProductId);
router.put('/', protect, editReview);
router.delete('/:reviewId', protect, deleteReview);
export default router;