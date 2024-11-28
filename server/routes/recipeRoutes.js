import express from 'express';
import { getAllRecipes, getRecipeById, getRecipesByCategory } from '../controllers/recipeController.js';
import { verifyAPIToken } from '../middleware/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/recipes:
 *   get:
 *     summary: Get all recipes
 *     description: Retrieve a list of all recipes.
 *     responses:
 *       200:
 *         description: A list of recipes
 */
router.get('/', getAllRecipes);

/**
 * @swagger
 * /api/recipes/{id}:
 *   get:
 *     summary: Get a recipe by ID
 *     description: Retrieve a specific recipe by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the recipe to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A recipe object
 *       404:
 *         description: Recipe not found
 */
router.get('/:id', getRecipeById);

/**
 * @swagger
 * /api/recipes/category/{category}:
 *   get:
 *     summary: Get recipes by category
 *     description: Retrieve a list of recipes filtered by category.
 *     parameters:
 *       - name: category
 *         in: path
 *         required: true
 *         description: The category to filter recipes
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of recipes in the specified category
 */
router.get('/category/:category', getRecipesByCategory);

export default router;