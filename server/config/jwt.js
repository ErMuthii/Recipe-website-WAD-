// src/config/jwt.js
import jwt from 'jsonwebtoken'


export const generateAPIToken = (user, expiresIn = '30d') => {
  return jwt.sign(
    { 
      userId: user.id, 
      email: user.email,
      type: 'api_access'
    }, 
    process.env.JWT_SECRET, 
    { expiresIn }
  )
}

export const verifyAPIToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    return null
  }
}