const model = require('../models/reviews'),
    boom = require('boom');

module.exports.getReviews = (request) => {
    try {

        return model.getReviews()
            .then(reviews => {return reviews;})
            .catch(error => {return boom.badRequest(error);});

    } catch (error) {
        return boom.badRequest(error);
    }
};

module.exports.getReviewsByRestaurantsId = (request) => {
    try {

        let id  = request.params.id || '';

        return model.getReviewsByRestaurantsId(id)
            .then(reviews => {return reviews;})
            .catch(error => {return boom.badRequest(error);});

    } catch (error) {
        return boom.badRequest(error);
    }
};