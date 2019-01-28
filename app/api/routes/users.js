const handler = require('../controllers/users'),
    joi = require('joi');

const routes = [
    {
        'method': 'GET',
        'path': '/users',
        'handler': (request, reply) => {
            return handler.getUsers(request);
        }
    },
    {
        'method': 'GET',
        'path': '/users/token',
        'handler': (request, reply) => {
            return handler.getUsers().then(users => {
                return JSON.stringify({
                    id: request.query.id,
                    token: request.query.token,
                    users: users
                });
            });
        },
        'config': {
            'validate': {
                'query': {
                    'id': joi.string().required(),
                    'token': joi.string().required()
                }
            }
        }
    },
    {
        'method': 'POST',
        'path': '/users',
        'handler': (request, reply) => {
            // return JSON.stringify(request.payload)
            return handler.createUser(request);
        },
        'config': {
            'validate': {
                'payload': {
                    'email': joi.string().email().lowercase().required(),
                    'name': joi.string().required(),
                    'password': joi.string().required(),
                    'passwordConfirm': joi.string().required()
                }
            }
        }
    }
];


exports.routes = server => server.route(routes);