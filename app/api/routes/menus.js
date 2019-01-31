const handler = require('../controllers/menus'),
    joi = require('joi');

const routes = [
    {
        'method': 'GET',
        'path': '/menus',
        'handler': (request, reply) => {
            return handler.getMenus(request);
        },
        'config': {
            'validate': {
                'headers': {
                    'token' : joi.string().required()
                },
                'options': {
                    allowUnknown: true
                }
            },
            'plugins': {
                'policies': ['validateToken']
            }
        }
    },
    {
        'method': 'GET',
        'path': '/restaurants/{id}/menu',
        'handler': (request, reply) => {
            return handler.getMenubyRestaurantId(request);
        },
        'config': {
            'plugins': {
                'policies': []
            }
        }
    }
];


exports.routes = server => { return server.route(routes); };