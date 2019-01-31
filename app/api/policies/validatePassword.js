
const Boom = require('boom');

const validatePassword = async (request, reply) => {
    const password = request.payload.password,
        passwordConfirm = request.payload.passwordConfirm;

    if (password == passwordConfirm)
        return reply.continue;

    throw Boom.forbidden('passwords do not match');
};

validatePassword.applyPoint = 'onPreHandler';

module.exports = validatePassword;