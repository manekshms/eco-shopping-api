class AppError extends Error {
  constructor(message = 'Unknown error') {
    super(message);
    this.statusCode = 500;
    this.name = 'Something went wrong';
  }

  toJSON() {
    const errorObj = {
      message: this.message,
      name: this.name,
    };
    return errorObj;
  }
}

module.exports = AppError;
