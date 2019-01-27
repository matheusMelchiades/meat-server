const model = require('../models/users')

module.exports.getUsers = (request) => {
    try {

        return model.getUsers()
            .then(users => users)
            .catch(error => boom.badRequest(error));

    } catch (error) {
        return boom.badRequest(error);
    }
};

module.exports.createUser = (request) => {
    try {

        let user = request.payload

        return model.createUser(user)
            .then(user => 'Usuario Inserido')
            .catch(error => boom.badRequest(error));

    } catch (error) {
        return boom.badRequest(error);
    }
};
