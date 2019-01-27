const mongo = global.connection.meatdb,
    collection = 'users',
    query = require('./users.query');
    
module.exports.getUsers = () => {
    return new Promise((resolve, reject) => {

        mongo.findOne(collection, {}, query.getUsersWithoutPassword, (err, users) => {
            if (err)
                return reject(err);

            return resolve(users);
        });
    });
};

module.exports.createUser = (user) => {
    return new Promise((resolve, reject) => {

        mongo.insertOne(collection, user, (err, user) => {
            if (err)
                return reject(err);
            
            return resolve(user);
        });
    });
};