const Sequelize = require('sequelize');
const db = require('../config/db');

const { Op } = Sequelize;

const fetchAllStores = async () => {
  const stores = await db.Store.findAll();
  return stores;
};

const fetchStoreById = async (id) => {
  const store = await db.Store.findOne({ where: { storeId: id } });
  return store;
};

const fetchAllStoreProducts = async (options) => {
  const where = {};
  if (options.search) {
    // where.name = { [Op.like]: `%${options.search.toLowerCase()}%` };
    where.name = {
      [Op.iLike]: `%${options.search}%`,
    };
  }
  const products = await db.StoreProduct.findAll({
    include: [
      { model: db.Store, as: 'store' },
      {
        model: db.Product,
        as: 'product',
        include: [{ model: db.Category, as: 'category' }],
        where,
      },
    ],
  });
  return products;
};

const fetchStoreProductDetails = async (id) => {
  const storeProduct = await db.StoreProduct.findOne({
    where: {
      storeProductId: id,
    },
    include: [
      { model: db.Store, as: 'store' },
      {
        model: db.Product,
        as: 'product',
        include: [{ model: db.Category, as: 'category' }],
      },
    ],
  });
  return storeProduct;
};

module.exports = {
  fetchAllStores,
  fetchAllStoreProducts,
  fetchStoreProductDetails,
  fetchStoreById,
};
