'use strict'

module.exports = function(app) {

    app.get('/', (request, response) => {
        response.sendFile("index.html", {"root": `${__dirname}/../dist/`})
    });

    require('./modules/todoModule/todoModule.server.routes')(app);

    // Add the todo-item change logging middleware
    require('./middleware/todoLogger.server.middleware')(app);

}
