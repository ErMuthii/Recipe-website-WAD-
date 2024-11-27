const express = require('express');
const { 
  getAllRecipes, 
  getRecipeById, 
  getRecipesByCategory 
} = require('../controllers/recipeController');
const { verifyAPIToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.get('/category/:category', getRecipesByCategory);

module.exports = router;