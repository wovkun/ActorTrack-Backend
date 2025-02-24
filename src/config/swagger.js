const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const actorDocs = require('../swaggerDocs/actorDocs');
const contractDocs = require('../swaggerDocs/contractDocs');
const authDocs = require('../swaggerDocs/authDocs');
const performanceDocs = require('../swaggerDocs/performanceDocs');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Theater Management API',
      version: '1.0.0',
      description:
        'API documentation for managing actors, performances, contracts, and authentication.',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'Local server',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ BearerAuth: [] }],
  },
  apis: [],
};

const swaggerDocs = swaggerJsdoc(options);

swaggerDocs.paths = {
  ...actorDocs,
  ...contractDocs,
  ...authDocs,
  ...performanceDocs,
};

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = setupSwagger;

