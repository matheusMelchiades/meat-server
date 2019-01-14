const model = require('../models/menu'),
    boom = require('boom');

module.exports.getMenus = (request) => {
    try {

        return model.getMenus()
            .then(menus => {return menus;})
            .catch(error => {return boom.badRequest(error);});

    } catch (error) {
        return boom.badRequest(error);
    }
};

module.exports.getMenubyRestaurantId = (request) => {
    try {

        let id = request.params.id || '';

        return model.getMenubyRestaurantId(id)
            .then(menu => {return menu;})
            .catch(error => {return boom.badRequest(error);});

    } catch (error) {
        return boom.badRequest(error);
    }
};