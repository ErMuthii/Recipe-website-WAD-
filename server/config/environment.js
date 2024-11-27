module.exports = {
    JWT_SECRET: process.env.JWT_SECRET,
    API_TOKEN_EXPIRY: process.env.API_TOKEN_EXPIRY || '30d'
  };