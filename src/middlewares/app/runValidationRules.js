const { validationResult } = require('express-validator');

const ValidationError = require('../../errors/ValidationError');

module.exports = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const error = new ValidationError('Invalid data', result.errors);
    return next(error);
  }
  return next();
};
