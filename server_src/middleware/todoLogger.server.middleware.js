'use strict'

let todoModuleController = require('../modules/todoModule/todoModule.server.controller');

module.exports = (app) => {

  app.use((req, res, next) => {

    if (res._headerSent === false) {
      // This is a 404, as no one has set the status yet
      res.status(404).end();
    }
    if (req.url.indexOf("/api") > -1) {

      return todoModuleController.addTodoHistory(req, res);
    }

    res.end();
   });

}
