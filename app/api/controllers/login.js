const model = require('../models/login'),
    boom = require('boom');

module.exports.login = (request) => {
    try {
        let credentials = {
            email: request.payload.email,
            password: request.payload.password
        };

        return model.login(credentials)
            .then(user => user)
            .catch(err => boom.badRequest(err));

    } catch (error) {
        return boom.badRequest(error)
    }
};