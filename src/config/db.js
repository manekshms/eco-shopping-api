const Sequelize = require('sequelize');
const category = require('../models/category');

const customer = require('../models/customer');
const product = require('../models/product');
const store = require('../models/store');
const storeProduct = require('../models/storeProduct');

const dbUri = process.env.DB_URI;
const db = new Sequelize(dbUri, {
  logging: false,
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

db.authenticate()
  .then(() => {
    const { log } = console;
    log('DB connected successfully');
    // return db.sync({ focus: true });
  })
  .then(() => {
    const { log } = console;
    log('DB table created');
  })
  .catch((e) => {
    const { log } = console;
    log(`DB connection failed ${e.message}`);
  });

const Customer = customer(db);
const Store = store(db);
const Category = category(db);
const StoreProduct = storeProduct(db);
const Product = product(db);

StoreProduct.belongsTo(Store, {
  foreignKey: {
    name: 'storeId',
  },
  targetKey: 'storeId',
  as: 'store',
});
StoreProduct.belongsTo(Product, {
  foreignKey: {
    name: 'productId',
  },
  targetKey: 'productId',
  as: 'product',
});
Product.belongsTo(Category, {
  foreignKey: {
    name: 'categoryId',
  },
  targetKey: 'categoryId',
  as: 'category',
});

Category.hasMany(Product, {
  foreignKey: {
    name: 'categoryId',
  },
  targetKey: 'categoryId',
  as: 'products',
});

module.exports = {
  connection: db,
  Customer,
  Store,
  Category,
  StoreProduct,
  Product,
};
