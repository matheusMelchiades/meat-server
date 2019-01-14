const handler = require('../controllers/restaurants');
// joi = require('joi');

const routes = [
    {
        'method': 'GET',
        'path': '/restaurants',
        'handler': (request) => {
            return handler.getRestaurants(request);
        }
    },
    {
        'method': 'GET',
        'path': '/restaurants/{id}',
        'handler': (request) => {
            return handler.getRestaurantsById(request);
        }
    }
];

exports.routes = server => { return server.route(routes); };