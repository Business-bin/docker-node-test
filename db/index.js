const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

const {
    MONGO_URI: mongoURI
} = process.env;

module.exports = (function () {
    mongoose.Promise = global.Promise;
    console.log(process.env.MONGO_URI)
    return {
        connect () {
            mongoose.set('debug', true);
            return mongoose.connect(process.env.MONGO_URI).then(
                () => {
                    console.log('Successfully connected to mongodb');
                }
            ).catch(e => {
                console.error('디비 연결 에러');
                console.error(e);
            });
        }
    };
})();