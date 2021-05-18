const { body } = require('express-validator');
const customerService = require('../../services/customerService');

const runValidationRules = require('../app/runValidationRules');

const createCustomerValidators = [
  // validating name
  body('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Name is required')
    .isLength({ min: 3 })
    .withMessage('Name must more than have 3 characters')
    .isLength({ max: 20 })
    .withMessage('Name must be less than 20 characters length'),

  // validating email
  body('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email is required')
    .isLength({ min: 4 })
    .withMessage('Email mush be atleast 4 characters length')
    .isLength({ max: 50 })
    .withMessage('Email must be less than 50 characters length')
    .isEmail()
    .withMessage('Invalid Email')
    .bail()
    .custom(async (value) => {
      const user = await customerService.findCustomerByEmail(value);
      if (user) {
        throw new Error('Email already used');
      }
      return true;
    }),

  // validating password
  body('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be greater than or equal to 6 characters')
    .isLength({ max: 15 })
    .withMessage('Password must be less than or equal to 15 characters')
    .withMessage('Password must be less than or equal to 20 characters')
    .matches(/[a-z]/)
    .withMessage('Password must contain atleast one lowercase character')
    .matches(/[A-Z]/)
    .withMessage('Password must contain atleast one uppercase character')
    .matches(/[0-9]/)
    .withMessage('Password must contain atleast one number')
    .matches(/[@!#$^&*\\()[\]]/)
    .withMessage('Password must contain atleast one special character'),

  // run validation rules
  runValidationRules,
];

module.exports = {
  createCustomerValidators,
};
