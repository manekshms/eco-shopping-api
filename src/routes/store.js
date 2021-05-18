const express = require('express');

const storeController = require('../controllers/storeController');
const asyncHandler = require('../middlewares/app/asyncHandler');

const router = express.Router();

router.get('/', asyncHandler(storeController.fetchAllStores));
router.get(
  '/product/:id',
  asyncHandler(storeController.fetchStoreProductDetails)
);
router.get('/product', asyncHandler(storeController.fetchAllStoreProducts));
router.get('/:id', asyncHandler(storeController.fetchStoreById));

module.exports = router;
