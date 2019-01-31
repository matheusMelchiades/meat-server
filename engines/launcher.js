const hapi = require('hapi'),
    config = require('../config/config'),
    mongo = require('./db/db')(config.mongo),
    path = require('path');


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
    await server.register([
        {
            plugin: require('hapi-routes'),
            options: {
                dir: `${__dirname}/../app/api/routes/*`,

            }, 
        },
        {
            plugin: require('mrhorse'),
            options: {
                policyDirectory: path.join(path.dirname(require.main.filename || process.mainModule.filename), 'app/api/policies'),
                defaultApplyPoint: 'onPreHandler'
            }
        }
    ]);

    // eslint-disable-next-line no-console
    await mongo.open((err, data) => data != null ? console.log('Mongo Connect') : console.log('Error connect mongo'));

    await server.start();

    //eslint-disable-next-line
    console.log(`Server running at: ${server.info.uri}`)
};

module.exports.start = init;