'use strict'

let routes = {};

routes.userDataModule = require('./todoModule.server.controller');

module.exports = function(app) {

    app.get('/api/todos', routes.userDataModule.getTodo);

    app.post('/api/todos', routes.userDataModule.addTodo);

    app.put('/api/todos/:id', routes.userDataModule.editTodo);

    app.delete('/api/todos/:id', routes.userDataModule.deleteTodo);
}
