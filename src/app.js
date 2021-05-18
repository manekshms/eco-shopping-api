const express = require('express');
const AppError = require('./errors/AppError');

require('./config');
require('./config/db');
const globalMiddlewares = require('./middlewares/global');
const routes = require('./routes');

const app = express();

// adding all global middlewares
globalMiddlewares(app);

// registering routes
routes(app);

// global error handler
app.use((err, req, res, next) => {
  const { log } = console;
  log(err);
  if (err instanceof AppError) {
    res.status(err.statusCode).send(err.toJSON());
  } else {
    res.status(500).send({
      staus: 500,
      name: 'SystemError',
      message: 'Somthing went wrong',
    });
  }
  return next();
});

module.exports = app;
