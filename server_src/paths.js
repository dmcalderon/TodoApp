'use strict'

module.exports = function(app) {

    app.get('/', (request, response) => {
        response.sendFile("index.html", {"root": `${__dirname}/../client/`})
    });

    require('./modules/todoModule/todoModule.server.routes')(app);

    // Sets every modules REST routes
    // Use the model below to add additional routes
    // require('./imageModule/imageModule.server.routes')(app);
}
