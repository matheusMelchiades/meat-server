const mongo = global.connections.meatdb,
    collection = 'restaurants';

module.exports.getRestaurants = () => {

    return new Promise((resolve, reject) => {

        mongo.findFull(collection, (err, restaurants) => {
            if (err)
                return reject(err);

            return resolve(restaurants);
        });
    });
};

module.exports.getRestaurantsById = (id) => {

    return new Promise((resolve, reject) => {

        mongo.findOne(collection, { 'id': id }, { '_id': 0 }, (err, restaurant) => {
            if (err)
                return reject(err);

            return resolve(restaurant);
        });
    });
};