const assert = require('assert'),
    config = require('../../../../config/config'),
    mongo = require('../../../../engines/db/db')(config.mongo),
    model = require('../../../../app/api/models/menus');


describe("#/Test/Menus", function () {

    before('Open Connection: ', function (done) {
        mongo.open(done);
    });

    describe("#getMenus()", function () {

        it("#should return one documents", function () {
            model.getMenus()
                .then(menus => {
                    assert.notEqual(menus.length, 0);
                }).catch(err => {
                    console.log(err)
                });
        });

        it('#should return not one document', function(){
            model.getMenus()
                .then(menus => {
                    assert.equal(menus.length, 18)
                }).catch(err => {
                    console.log(err)
                })
        });
    });

    describe('#getMenubyRestaurantId()', function () {
        it('#should return one document', function () {
            model.getMenubyRestaurantId('burger-houses')
                .then(menus => {
                    assert.equal(menus.length, 0);
                }).catch(err => {
                    console.log(err)
                });
        });
    });

    after('Close Connection', function (done) {
        mongo.close(done)
    });
});