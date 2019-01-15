const hapi = require('hapi'),
    config = require('../config/config'),
    mongo = require('./db/db')(config.mongo);

const server = hapi.server({
    'host': config.server.host,
    'port': config.server.port,
    'routes': {
        'cors': {
            'origin': ['*']
        }
    }
});

const init = async () => {
    await server.register({
        plugin: require('hapi-routes'),
        options: {
            dir: `${__dirname}/../app/api/routes/*`
        }
    });

    await mongo.open((err, data) => 0);

    await server.start();

    //eslint-disable-next-line
    console.log(`Server running at: ${server.info.uri}`)
};

module.exports.start = init;