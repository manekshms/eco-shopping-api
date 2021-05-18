const authRouter = require('./auth');
const customerRouter = require('./customer');
const storeRouter = require('./store');
const productRouter = require('./product');

module.exports = (app) => {
  // auth routes
  app.use('/auth', authRouter);
  // user routes
  app.use('/customer', customerRouter);
  // store routes
  app.use('/store', storeRouter);
  // product routes
  app.use('/product', productRouter);
};
