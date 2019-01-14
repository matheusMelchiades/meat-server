const handler = require('../controllers/orders');
// joi = require('joi');

const routes = [
    {
        'method': 'GET',
        'path': '/orders',
        'handler': (request, reply) => {
            return handler.getOrders(request);
        }
    },
    {
        'method': 'POST',
        'path': '/orders',
        'handler': (request, reply) => {
            return handler.createOrder(request);
        }
    }
];


exports.routes = server => { return server.route(routes); };