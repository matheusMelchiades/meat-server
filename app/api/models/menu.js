const handler = require('../daos/menu');

module.exports.getMenus = () => {
    
    return new Promise((resolve, reject) => {
    
        return handler.getMenus()
            .then(menus => {return resolve(menus);})
            .catch(error => {return reject(error);});
    });
};

module.exports.getMenubyRestaurantId = (id) => {

    return new Promise((resolve, reject) => {

        return handler.getMenubyRestaurantId(id)
            .then(menu => {return resolve(menu);})
            .catch(error => {return reject(error);});
    });
};