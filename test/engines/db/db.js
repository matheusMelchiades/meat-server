const assert = require('assert')
    config = require('../../../config/config')
    mongo = require('../../../engines/db/db')(config.mongo)



describe("#/Test database", function () {

    before('Open Connection: ', function (done) {
        mongo.open(done);
    });

    describe("#find()", function () {

        it("#should return one documents", function () {
            mongo.findOne('orders', {}, {}, (err, data) => {
                
                assert.notEqual(data, null);
            });
        });

        it("#should return ordersAll", function () {
            mongo.findFull('orders', (err, data) => {
                assert.notEqual(data.length, 0);
            });
        });
    });


    after('Close Connection', function (done) {
        mongo.close(done)
    });
});