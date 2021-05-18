const express = require('express');

const productController = require('../controllers/productController');
const asyncHandler = require('../middlewares/app/asyncHandler');

const router = express.Router();

router.get('/image/:name', asyncHandler(productController.getProductImage));

module.exports = router;
