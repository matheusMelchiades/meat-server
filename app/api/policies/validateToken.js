const model = require('../models/login'),
    Boom = require('boom');

function validateToken(request, reply) {
    let token = request.headers.token,
        message = 'Token invalid';

    if (token)
        return model.checkToken(token)
            .then(result => {
                return reply.continue;            
            })
            .catch(err => { 
                return Boom.forbidden(message);
            });
    
    return Boom.forbidden(message);
}

validateToken.applyPoint = 'onPreHandler';

module.exports = validateToken;