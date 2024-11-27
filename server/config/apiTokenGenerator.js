const jwt = require('jsonwebtoken');
const { JWT_SECRET, API_TOKEN_EXPIRY } = require('../config/environment');

function generateAPIToken(userId) {
  return jwt.sign(
    { 
      userId, 
      type: 'api_access',
      exp: Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60) // 30 days
    }, 
    JWT_SECRET
  );
}

module.exports = { generateAPIToken };