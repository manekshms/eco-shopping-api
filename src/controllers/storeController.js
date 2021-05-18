const storeService = require('../services/storeService');

/**
 * fetchAllStores
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
const fetchAllStores = async (req, res) => {
  const stores = await storeService.fetchAllStores();
  return res.send(stores);
};

const fetchStoreById = async (req, res) => {
  const store = await storeService.fetchStoreById(req.params.id);
  return res.send(store);
};

const fetchAllStoreProducts = async (req, res) => {
  const { search = '' } = req.query;
  const storeProducts = await storeService.fetchAllStoreProducts({ search });
  return res.send(storeProducts);
};

const fetchStoreProductDetails = async (req, res) => {
  const { id } = req.params;
  const storeProduct = await storeService.fetchStoreProductDetails(id);
  return res.send(storeProduct);
};

module.exports = {
  fetchAllStores,
  fetchAllStoreProducts,
  fetchStoreProductDetails,
  fetchStoreById,
};
