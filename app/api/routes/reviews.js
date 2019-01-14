const handler = require('../controllers/reviews');
// joi = require('joi');

const routes = [
    {
        'method': 'GET',
        'path': '/reviews',
        'handler': (request, reply) => {
            return handler.getReviews(request);
        }
    },
    {
        'method': 'GET',
        'path': '/restaurants/{id}/reviews',
        'handler': (request, reply) => {
            return handler.getReviewsByRestaurantsId(request);
        }
    }
];


exports.routes = server => { return server.route(routes); };