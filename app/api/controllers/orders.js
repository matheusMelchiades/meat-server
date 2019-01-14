const model = require('../models/orders'),
    boom = require('boom');

module.exports.getOrders = (request) => {
    try {

        return model.getOrders()
            .then(orders => {return orders;})
            .catch(error => {return boom.badRequest(error);});

    } catch (error) {
        return boom.badRequest(error);
    }
};

module.exports.createOrder = (request) => {
    try {

        let order = request.payload;

        return model.createOrder(order)
            .then(orders => {return orders;})
            .catch(error => {return boom.badRequest(error);});

    } catch (error) {
        return boom.badRequest(error);
    }
};