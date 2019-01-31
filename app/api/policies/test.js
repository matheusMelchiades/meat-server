
const Boom = require('boom');

const test = async (request, reply, next) => {
    // eslint-disable-next-line no-console
    console.log(request.payload);

    throw Boom.forbidden();
};

test.applyPoint = 'onPreHandler';

module.exports = test;