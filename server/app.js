import express from 'express';
import cors from 'cors';
import { swaggerSpec } from './utils/swagger.js';
import SwaggerUI from 'swagger-ui-express';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);

// Swagger Documentation
app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerSpec));

export default app;