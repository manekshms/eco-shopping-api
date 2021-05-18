const authService = require('../services/authService');

/**
 * login
 * @param {Request} req
 * @param {Response} res
 */
const login = async (req, res) => {
  const { email, password } = req.body;
  const authData = await authService.login(email, password);
  const responseData = {
    customer: authData.customer.toJSON(),
    token: authData.token,
  };
  return res.send(responseData);
};

module.exports = {
  login,
};
