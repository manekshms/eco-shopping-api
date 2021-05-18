const AppError = require('./AppError');

class ValidationError extends AppError {
  constructor(message = 'Invalid data', errors) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
    this.errors = errors;
  }

  toJSON() {
    const errorObj = {
      message: this.message,
      name: this.name,
      errors: this.errors,
    };
    return errorObj;
  }
}

module.exports = ValidationError;
