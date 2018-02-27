'use strict'

let mongoose = require('mongoose');

let mongoDbOptions = {};

let config = require('../config/_dbConfig');

let mongoDbURL = config.mongoURI[process.env.NODE_ENV || 'test']; //'mongodb://localhost/blackjack';

mongoose.connect(mongoDbUrl, mongoDbOptions, (err, res) => {
    
    if (err) {
        console.log(`Connection refused to database: ${mongodbURL}`);
        console.log(err);
    }
    
    else {
        console.log(`Connection to ${mongoDbUrl} successful!`);
    }
});

exports.mongooseConnection = mongoose;
