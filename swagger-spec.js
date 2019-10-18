// const { USER_TYPES, REGULAR } = require('./config/constants');

// This file is not used

module.exports = {
  openapi: '3.0.1',
  info: {
    version: '0.0.0',
    title: 'Universal AML',
    description: 'Universal AML API',
    termsOfService: 'http://api_url/terms/',
    contact: {
      name: 'Sherpaa.h',
      email: '..@..',
      url: '...'
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 8080}/`,
      description: 'Local server'
    },
    {
      url: 'https://api_url_testing',
      description: 'Testing server'
    },
    {
      url: 'https://api_url_production',
      description: 'Production server'
    }
  ],
  security: [
    {
      ApiKeyAuth: []
    }
  ],
  tags: [
    {
      name: 'CRUD operations'
    }
  ],
  paths: {
    '/api/scoring': {
      get: {
        tags: ['CRUD operations'],
        description: 'Get scoring',
        operationId: 'getScoring',
        parameters: [
          {
            name: 'x-company-id',
            in: 'header',
            schema: {
              // $ref: '#/components/schemas/companyId'
            },
            required: true,
            description: 'Company id where the users work'
          },
          {
            name: 'page',
            in: 'query',
            schema: {
              type: 'integer',
              default: 1
            },
            required: false
          },
          {
            name: 'orderBy',
            in: 'query',
            schema: {
              type: 'string',
              enum: ['asc', 'desc'],
              default: 'asc'
            },
            required: false
          }
        ],
        responses: {
          '200': {
            description: 'Users were obtained',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Users'
                }
              }
            }
          },
          '400': {
            description: 'Missing parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                },
                example: {
                  message: 'companyId is missing',
                  internal_code: 'missing_parameters'
                }
              }
            }
          }
        }
      },
      post: {
        tags: ['CRUD operations'],
        description: 'Post scoring',
        operationId: 'getScoring',
        parameters: [
          {
            name: 'publicKey',
            in: 'query',
            schema: {
              type: 'string',
              enum: ['asc', 'desc'],
              default: 'asc'
            },
            required: true
          },
          {
            name: 'AMLProviders',
            in: 'query',
            schema: {
              type: 'array',
              enum: ['asc', 'desc'],
              default: 'asc'
            },
            required: true
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Users'
              }
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'New users were created'
          },
          '400': {
            description: 'Invalid parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                },
                example: {
                  message: 'User identificationNumbers 10, 20 already exist',
                  internal_code: 'invalid_parameters'
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      identificationNumber: {
        type: 'integer',
        description: 'User identification number',
        example: 1234
      },
      username: {
        type: 'string',
        example: 'raparicio'
      },
      // userType: {
      //   type: 'string',
      //   enum: USER_TYPES,
      //   default: REGULAR
      // },
      companyId: {
        type: 'integer',
        description: 'Company id where the user works',
        example: 15
      },
      User: {
        type: 'object',
        properties: {
          identificationNumber: {
            $ref: '#/components/schemas/identificationNumber'
          },
          username: {
            $ref: '#/components/schemas/username'
          },
          userType: {
            $ref: '#/components/schemas/userType'
          },
          companyId: {
            $ref: '#/components/schemas/companyId'
          }
        }
      },
      Users: {
        type: 'object',
        properties: {
          users: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/User'
            }
          }
        }
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string'
          },
          internal_code: {
            type: 'string'
          }
        }
      }
    },
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-key'
      }
    }
  }
};