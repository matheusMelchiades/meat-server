const mongo = require('mongodb').MongoClient;

function MongoHandler(config) {
    this.config = config;
    this.db = null;
    this.connection = null;
}

function urlConnection(cred) {
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
    return this.db.collection(collection).find({}, {'_id' : 0}).toArray(cb);
};

MongoHandler.prototype.find = function(collection, query, propagation, cb) {
    return this.db.collection(collection).find(query, propagation).toArray(cb);
};

MongoHandler.prototype.findOne = function(collection, query, propagation, cb) {
    return this.db.collection(collection).findOne(query, propagation, cb);
};

MongoHandler.prototype.close = function (cb) {
    return this.connection.close(cb);
};

module.exports = function (config) {
    return new MongoHandler(config);
};
