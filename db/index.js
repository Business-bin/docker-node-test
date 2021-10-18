const mongoose = require('mongoose');

const {
    MONGO_URI: mongoURI
} = process.env;

module.exports = (function () {
    mongoose.Promise = global.Promise;

    return {
        connect () {
            mongoose.set('debug', true);
            return mongoose.connect(mongoURI).then(
                () => {
                    console.log('Successfully connected to mongodb');
                }
            ).catch(e => {
                console.error(e);
            });
        }
    };
})();