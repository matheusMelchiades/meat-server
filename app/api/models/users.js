const handler = require('../daos/users/users.dao')

module.exports.getUsers = () => {
    
    return new Promise((resolve, reject) => {

        return handler.getUsers()
            .then(users => resolve(users))
            .then(error => reject(error));
    });
};

module.exports.createUser = (user) => {
    return new Promise((resolve, reject) => {

        return handler.createUser(user)
            .then(user => resolve(user))
            .then(error => reject(error));
    });
};