const bcrypt = require('bcryptjs');

const db = require('../config/db');
const NotFoundError = require('../errors/NotFoundError');

/**
 * findUserByEmail
 * @param {string} email
 * @returns
 */
const findCustomerByEmail = async (email) => {
  const user = await db.Customer.findOne({ where: { email } });
  return user;
};

/**
 * getUserByEmail
 * @param {string} email
 * @returns User
 */
const getCustomerByEmail = async (email) => {
  const user = await findCustomerByEmail(email);
  if (!user) {
    throw new NotFoundError('User not found');
  }
  return user;
};

/**
 * createUser
 * @param {object} userData
 * @returns User
 */
const createCustomer = async (userData) => {
  const data = {
    ...userData,
    isActive: true,
  };
  data.password = bcrypt.hashSync(userData.password);
  const user = await db.Customer.create(data);
  return user;
};

module.exports = {
  getCustomerByEmail,
  findCustomerByEmail,
  createCustomer,
};
