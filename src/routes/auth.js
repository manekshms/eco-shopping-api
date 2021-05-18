const express = require('express');
const authController = require('../controllers/authController');
const asyncHandler = require('../middlewares/app/asyncHandler');

const router = express.Router();

router.post('/login', asyncHandler(authController.login));

module.exports = router;
