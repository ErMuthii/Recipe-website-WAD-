import express from 'express';
import { getAllUsers, getUserByIdentifier,getUsersByGender } from '../controllers/userController.js';
import { verifyAPIToken } from '../middleware/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users.
 *     security:
 *       - apiKey: []
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/', getAllUsers);

/**
 * @swagger
 * /api/users/{identifier}:
 *   get:
 *     summary: Get a user by identifier
 *     description: Retrieve a specific user by their identifier.
 *     parameters:
 *       - name: identifier
 *         in: path
 *         required: true
 *         description: The identifier of the user to retrieve
 *         schema:
 *           type: string
 *     security:
 *       - apiKey: []
 *     responses:
 *       200:
 *         description: A user object
 *       404:
 *         description: User not found
 */
router.get('/:identifier', getUserByIdentifier);


/**
 * @swagger
 * /api/users/gender/{gender}:
 *   get:
 *     summary: Get users by gender
 *     description: Retrieve a list of users filtered by gender.
 *     parameters:
 *       - name: gender
 *         in: path
 *         required: true
 *         description: The gender to filter users
 *         schema:
 *           type: string
 *     security:
 *       - apiKey: []
 *     responses:
 *       200:
 *         description: A list of users in the specified gender
 *       404:
 *         description: No users found
 */
router.get('/gender/:gender',getUsersByGender)

export default router;