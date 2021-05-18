const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AuthFailedError = require('../errors/AuthFailedError');
const NotFoundError = require('../errors/NotFoundError');
const customerService = require('./customerService');

/**
 * login
 * @param {string} email
 * @param {string} password
 * @return {object} authData
 */
const login = async (email, password) => {
  // check user exists or not
  let customer;
  try {
    customer = await customerService.getCustomerByEmail(email);
  } catch (e) {
    if (e instanceof NotFoundError) {
      throw new AuthFailedError();
    }
    throw e;
  }

  // checking valid password
  const isValidPassword = bcrypt.compareSync(password, customer.password);
  if (!isValidPassword) {
    throw new AuthFailedError();
  }

  // create token
  const jwtSecret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRE_IN;
  const token = jwt.sign(
    { userId: customer.customerId, email: customer.email },
    jwtSecret,
    { expiresIn }
  );
  return {
    token,
    customer,
  };
};

module.exports = {
  login,
};
