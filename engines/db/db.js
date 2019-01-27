const mongo = require('mongodb').MongoClient;

global.connection = {};

function MongoHandler(config) {
    this.config = config;
    this.db = null;
    this.connection = null;
}

function urlConnection(cred) {
    if (cred.user && cred.password)
        return `mongodb://${cred.user}:${cred.password}@${cred.host}:${cred.port}/${cred.db}`;

    return `mongodb://${cred.host}:${cred.port}`;
}

MongoHandler.prototype.open = function (cb) {
    const self = this,
        url = urlConnection(this.config);
    
    mongo.connect(url, { useNewUrlParser: true }, (err, connection) => {
        if (err)
            return cb(err);

        self.db = connection.db(this.config.db);
        self.connection = connection;

        return cb(null, connection);
    });
};

MongoHandler.prototype.insertOne = function (collectionName, document, cb) {
    return this.db.collection(collectionName).insertOne(document, cb);
};
 
MongoHandler.prototype.findFull = function (collection, cb) {
    return this.db.collection(collection).find().toArray(cb);
};

MongoHandler.prototype.find = function(collection, query, propagation, cb) {
    return this.db.collection(collection).find(query).project(propagation).toArray(cb);
};

MongoHandler.prototype.findOne = function(collection, query, propagation, cb) {
    return this.db.collection(collection).find(query).project(propagation).toArray((err, data) => {
        if (err)
            return cb(err)
        return cb(null, data[0])
    });
};

MongoHandler.prototype.close = function (cb) {
    return this.connection.close(cb);
};

module.exports = function (config) {
    const db = new MongoHandler(config);
    global.connection[`${config.db}`] = db;

    return db;
};
