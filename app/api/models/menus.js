const handler = require('../daos/menu');

module.exports.getMenus = () => {
    
    return new Promise((resolve, reject) => {
    
        return handler.getMenus()
            .then(menus => resolve(menus))
            .catch(error => reject(error));
    });
};

module.exports.getMenubyRestaurantId = (id) => {

    return new Promise((resolve, reject) => {

        return handler.getMenubyRestaurantId(id)
            .then(menu => resolve(menu))
            .catch(error => reject(error));
    });
};