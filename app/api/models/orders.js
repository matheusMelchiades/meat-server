const handler = require('../daos/orders');

module.exports.getOrders = () => {

    return new Promise((resolve, reject) => {

        return handler.getOrders()
            .then(orders => resolve(orders))
            .catch(error => reject(error));
    });
};

module.exports.createOrder = (order) => {

    return new Promise((resolve, reject) => {

        return handler.createOrder(order)
            .then(order => resolve(order))
            .catch(error => reject(error));
    });
};