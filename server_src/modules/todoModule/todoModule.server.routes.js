'use strict'

let routes = {};

routes.userDataModule = require('./todoModule.server.controller');

module.exports = function(app) {

    app.get('/api/todos', routes.userDataModule.getTodo);

    app.post('/api/todo', routes.userDataModule.addTodo);

    app.put('/api/todo', routes.userDataModule.editTodo);

    app.delete('/api/todo', routes.userDataModule.deleteTodo);
}
