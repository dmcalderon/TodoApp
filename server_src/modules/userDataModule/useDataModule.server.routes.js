'use strict'

let routes = {};

routes.userDataModule = require('./userDataModule.sever.controller');

module.exports = function(app) {
    
    app.get('/user/auth', routes.userDataModule.getUser);
}