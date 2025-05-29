const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Livros',
    version: '1.0.0',
    description: 'Documentação da API para gerenciamento de livros',
  },
  components: {
    schemas: {
      Book: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          author: { type: 'string' },
          ISBN: { type: 'string' }
        },
        required: ['title', 'author', 'ISBN']
      }
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ]
};

module.exports = {
  definition: swaggerDefinition,
  apis: ['./src/**/*.ts']
};