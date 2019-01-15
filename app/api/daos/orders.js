const mongo = global.connection.meatdb,
    collection = 'orders';

module.exports.getOrders = () => {
    
    return new Promise((resolve, reject) => {

        mongo.findFull(collection, (err, orders) => {    
            if (err) 
                return reject(err);
            
            return resolve(orders);
        });
    });
};

module.exports.createOrder = (order) => {

    return new Promise((resolve, reject) => {

        mongo.insertOne(collection, order, (err, order) => {    
            if (err) 
                return reject(err);
            
            return resolve(order);
        });
    });
};