const express = require('express');

import { getAllRecipes,getRecipeById,getRecipesByCategory } from '../controllers/recipeController.js';
import { verifyAPIToken } from '../middleware/authMiddleware.js';


const router = express.Router();

router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.get('/category/:category', getRecipesByCategory);

export default router;