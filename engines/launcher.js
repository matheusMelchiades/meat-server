const hapi = require('hapi'),
    config = require('../config/config'),
    mongo = require('./db/db')(config.mongo);

global.connections.meatdb = mongo;

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

    await mongo.open((err, data) => {
        //eslint-disable-next-line
        console.log('connect mongo')
    });

    await server.start();
    
    //eslint-disable-next-line
    console.log(`Server running at: ${server.info.uri}`)
};

module.exports.start = init;