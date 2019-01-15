const mongo = global.connection.meatdb,
    collection = 'reviews';

module.exports.getReviews = () => {

    return new Promise((resolve, reject) => {

        mongo.findFull(collection, (err, reviews) => {
            if (err)
                return reject(err);

            return resolve(reviews);
        });
    });
};

module.exports.getReviewsByRestaurantsId = (id) => {

    return new Promise((resolve, reject) => {

        mongo.find(collection, { 'restaurantId': id }, {}, (err, reviews) => {
            if (err)
                return reject(err);

            return resolve(reviews);
        });
    });
};