const ImageProduct = require('../models/imageProduct');

class ImageProductController {
  async upload(req, res) {
    try {
      console.log(req.file);
    
    } catch (error) {
      res.status(400).send(error);
    }
  }
 
}

module.exports = new ImageProductController();
