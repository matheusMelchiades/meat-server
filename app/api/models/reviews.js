const handler = require('../daos/reviews');

module.exports.getReviews = () => {

    return new Promise((resolve, reject) => {
        
        return handler.getReviews()
            .then(reviews => {return resolve(reviews);})
            .catch(error => {return reject(error);});
    
    }); 
};

module.exports.getReviewsByRestaurantsId = (id) => {

    return new Promise((resolve, reject) => {
        
        return handler.getReviewsByRestaurantsId(id)
            .then(reviews => {return resolve(reviews);})
            .catch(error => {return reject(error);});
    
    }); 
};