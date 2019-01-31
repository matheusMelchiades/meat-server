const handler = require('../daos/login/login.dao'),
    crypt = require('../../../helper/crypt');
module.exports.login = (user) => {
    return new Promise((resolve, reject) => {

        return handler.login(user)
            .then(user => {
                authenticateUser(user)
                    .then(userAuth => resolve(userAuth))
                    .catch(err => reject(err));
            })
            .catch(err => reject(err));
    });
};

function authenticateUser(user) {
    return new Promise((resolve, reject) => {
        let token = `${user._id}${user.email}${new Date().getTime()}${user.password}${user.name}`;

        return crypt.encrypt(token)
            .then(hash => {
                user.token = hash;

                delete user.password;

                return handler.setToken(user)
                    .then(data => resolve(user))
                    .catch(err => reject(err));
            })
            .catch(err => reject(err));
    });
}

module.exports.checkToken = (token) => {
    return new Promise((resolve, reject) => {

        return handler.getToken(token)
            .then(user => {
                if (user.expirateToken > new Date())
                    return resolve(user);
                return reject(new Error);
            })
            .catch(err => reject(err));
    });
};