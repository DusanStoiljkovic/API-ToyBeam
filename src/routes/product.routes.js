import express from 'express';
import { getAll, search, getProductById } from '../controllers/product.controller.js';
import { getCategories } from '../controllers/category.controller.js';


const router = express.Router();

router.get('/', getAll);
router.get('/categories', getCategories);
router.get('/search', search);
router.get('/:id', getProductById);

export default router;