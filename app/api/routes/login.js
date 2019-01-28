const handler = require('../controllers/login'), 
    joi = require('joi');

const routes = [
    {
        'method': 'POST',
        'path': '/login',
        'handler': (request, reply) => {
            return handler.login(request);
        },
        'config': {
            'validate': {
                'payload': {
                    'email': joi.string().email().required(),
                    'password': joi.string().required()
                }
            }
        }
    }
];

exports.routes = server => server.route(routes);