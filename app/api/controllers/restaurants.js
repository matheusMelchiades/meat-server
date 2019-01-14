const model = require('../models/restaurants'),
    boom = require('boom');

module.exports.getRestaurants = (request) => {
    try {

        return model.getRestaurants()
            .then(restaurants => {return restaurants;})
            .catch(error => {return boom.badRequest(error);});

    } catch (error) {
        return boom.badRequest(error);
    }
};

module.exports.getRestaurantsById = (request) => {
    try {

        let id = request.params.id || '';

        return model.getRestaurantsById(id)
            .then(restaurant => {return restaurant;})
            .catch(error => {return boom.badRequest(error);});

    } catch (error) {
        return boom.badRequest(error);
    }
};
