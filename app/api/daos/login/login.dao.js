const mongo = global.connection.meatdb,
    collection = 'users';

module.exports.login = (user) => {
    return new Promise((resolve, reject) => {
        const query = { 'email': user.email, 'password': user.password },
            propagation = {};

        mongo.findOne(collection, query, propagation, (err, user) => {
            if (err)
                return reject(err);

            return resolve(user);
        });

    });
};

module.exports.setToken = (user) => {
    return new Promise((resolve, reject) => {

        const query = { '_id': user._id },
            toUpdate = {
                '$set': {
                    'token': user.token,
                    'expirateToken': new Date(new Date().getTime() + 2 * 60000)
                }
            },
            options = {};

        mongo.updateOne(collection, query, toUpdate, options, (err, data) => {
            if (err)
                return reject(err);

            return resolve(data);
        });
    });
};

module.exports.getToken = (token) => {
    return new Promise((resolve, reject) => {
        const query = { 'token': token };

        mongo.find(collection, query, {}, (err, data) => {
            if (err)
                return reject(err);

            if (data.length == 1)
                return resolve(data[0]);

            return reject(new Error);
        });
    });
};