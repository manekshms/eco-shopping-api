const AppError = require('./AppError');

class NotFoundError extends AppError {
  constructor(message = 'Not found') {
    super(message);
    this.statusCode = 404;
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundError;
