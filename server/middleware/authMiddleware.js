const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/apiTokenGenerator');

const verifyAPIToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = { verifyAPIToken };