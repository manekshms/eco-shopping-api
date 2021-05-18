const AppError = require('./AppError');

class AuthFailedError extends AppError {
  constructor(message = 'Invalid credentials') {
    super(message);
    this.name = 'AuthFailedError';
    this.statusCode = 401;
  }
}

module.exports = AuthFailedError;
