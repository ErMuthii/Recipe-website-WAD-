const express = require('express');
const { getAllUsers, getUserByIdentifier } = require('../controllers/userController');
const { verifyAPIToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', verifyAPIToken, getAllUsers);
router.get('/:identifier', verifyAPIToken, getUserByIdentifier);

module.exports = router;