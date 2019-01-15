const assert = require('assert'),
    axios = require('axios'),
    server = require('../../../../engines/launcher')

const url = `http://localhost:6789/menus`


describe('/Test Routes Menus', function () {
    before('start server', function (done) {
        server.start();

        done();
    });

    describe('#first test', function () {
        it("getpaskpasa", function () {

            axios.get(url)
                .then(resp => console.log(resp))
                .catch(err => console.log(err))

            // assert.equal(1, 1)
        });
    });

    after('Server stop', function () {
        process.exit();
    });
});
