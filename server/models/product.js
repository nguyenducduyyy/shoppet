const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  slug: { type: String, slug: 'name', unique: true },
}, { timestamps: true });

const Product = mongoose.model('Products', productSchema);

module.exports = Product;

