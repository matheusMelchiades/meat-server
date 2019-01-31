const handler = require('../daos/users/users.dao'),
    crypt = require('../../../helper/crypt');

module.exports.getUsers = () => {

    return new Promise((resolve, reject) => {

        return handler.getUsers()
            .then(users => resolve(users))
            .then(error => reject(error));
    });
};

module.exports.createUser = (user) => {
    return new Promise((resolve, reject) => {

        if (user.password != user.passwordConfirm)
            return reject('Password not equals');

        delete user.passwordConfirm;

        crypt.encrypt(user.password).then(hash => {
            
            user.password = hash;
            
            return handler.createUser(user)
                .then(user => resolve(user))
                .then(error => reject(error));
        });
    });
};

