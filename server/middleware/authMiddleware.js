
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/environment.js';

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

export { verifyAPIToken };