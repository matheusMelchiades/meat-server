const handler = require('../daos/orders');

module.exports.getOrders = () => {

    return new Promise((resolve, reject) => {

        return handler.getOrders()
            .then(orders => {return resolve(orders);})
            .catch(error => {return reject(error);});

    });
};

module.exports.createOrder = (order) => {
    
    return new Promise((resolve, reject) => {

        return handler.createOrder(order)
            .then(order => {return resolve(order);})
            .catch(error => {return reject(error);});

    });
};