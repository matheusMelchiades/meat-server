const handler = require('../daos/restaurants');

module.exports.getRestaurants = () => {

    return new Promise((resolve, reject) => {

        return handler.getRestaurants()
            .then(restaurants => {return resolve(restaurants);})
            .catch(error => {return reject(error);});
    });
};

module.exports.getRestaurantsById = (id) => {
    
    return new Promise((resolve, reject) => {

        return handler.getRestaurantsById(id)
            .then(restaurant => {return resolve(restaurant);})
            .catch(error => {return reject(error);});
    });
};