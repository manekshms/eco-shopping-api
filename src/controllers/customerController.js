const customerService = require('../services/customerService');

/**
 * createUser
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
const createCustomer = async (req, res) => {
  const customerData = req.body;
  const user = await customerService.createCustomer(customerData);
  const data = user.toJSON();
  delete data.password;
  return res.status(201).send(data);
};

module.exports = {
  createCustomer,
};
