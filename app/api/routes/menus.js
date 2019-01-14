const handler = require('../controllers/menu');
// joi = require('joi');
    
const routes = [
    {
        'method': 'GET',
        'path': '/menus',
        'handler': (request, reply) => {
            return handler.getMenus(request);
        }
    },
    {
        'method': 'GET',
        'path': '/restaurants/{id}/menu',
        'handler': (request, reply) => {
            return handler.getMenubyRestaurantId(request);
        }
    }
];


exports.routes = server => {return server.route(routes);};