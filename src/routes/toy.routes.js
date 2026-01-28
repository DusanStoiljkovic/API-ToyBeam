import express from 'express';
import { getAll, search, getToyById } from '../controllers/toy.controller.js';
import { getCategories } from '../controllers/category.controller.js';


const router = express.Router();
router.get('/', getAll);
router.get('/categories', getCategories);
router.get('/search', search);
router.get('/:id', getToyById);
export default router;