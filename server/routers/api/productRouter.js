const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/ProductContronller')
const upload = require('../../middleware/upload');
const ImageProductController = require('../../controllers/ImageProductController');

router.get('/', ProductController.show);
router.post('/create' , ProductController.store);

// router.post('/upload',upload.array('image'),ImageProductController.upload)

router.post('/upload', upload.array('images',5), (req, res) => {
    console.log(req.files); // in ra mảng các file ảnh được upload
    // handle file upload and return response
  });
  


module.exports = router;