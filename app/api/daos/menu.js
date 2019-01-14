const mongo = global.connections.meatdb,
    collection = 'menus';

module.exports.getMenus = () => {

    return new Promise((resolve, reject) => {

        mongo.findFull(collection, (err, menus) => {
            if (err)
                return reject(err);

            return resolve(menus);
        });
    });
};

module.exports.getMenubyRestaurantId = (id) => {

    return new Promise((resolve, reject) => {

        mongo.find(collection, { 'restaurantId': id }, {'_id': 0}, (err, menu) => {
            if(err)
                return reject(err);
            
            return resolve(menu);
        });
    });
};