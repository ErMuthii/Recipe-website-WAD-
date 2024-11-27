const express = require('express');

import { getAllUsers,getUserByIdentifier } from '../controllers/userController.js';
import { verifyAPIToken } from '../middleware/authMiddleware.js';


const router = express.Router();

router.get('/', verifyAPIToken, getAllUsers);
router.get('/:identifier', verifyAPIToken, getUserByIdentifier);

export default router;