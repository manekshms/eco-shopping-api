const express = require('express');

const customerController = require('../controllers/customerController');
const asyncHandler = require('../middlewares/app/asyncHandler');
const customerValidators = require('../middlewares/validators/customerValidators');

const router = express.Router();

router.post(
  '/',
  customerValidators.createCustomerValidators,
  asyncHandler(customerController.createCustomer)
);

module.exports = router;
