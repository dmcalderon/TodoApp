'use strict'

module.exports = (app) => {

  app.use((req, res, next) => {

    console.log(res._headerSent);
    if (res._headerSent === false) {
      // This is a 404, as no one has set the status yet
      res.status(404).end();
    }
    res.end();
  });

}
