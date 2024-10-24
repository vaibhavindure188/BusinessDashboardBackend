const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  OrderID: {
    type: Number,
    required: true,
  },
  CustomerName: {
    type: String,
    required: true,
  },
  TotalAmount: {
    type: Number,
    required: true,
  },
  OrderItems: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  StatusBg: {
    type: String,
    required: true,
  },
  ProductImage: {
    type: String,  // URL or path to the product image
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
