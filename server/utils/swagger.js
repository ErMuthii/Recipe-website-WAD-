
import swaggerJSDoc from 'swagger-jsdoc';
import swag




const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Recipe Website API',
      version: '1.0.0',
      description: 'API documentation for Recipe Website'
    },
    servers: [{ url: 'http://localhost:3000' }]
  },
  apis: ['./src/routes/*.js']
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);

