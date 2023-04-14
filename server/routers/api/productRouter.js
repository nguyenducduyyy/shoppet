const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/ProductContronller')

router.get('/', ProductController.show);
router.post('/store' , ProductController.store)


module.exports = router;