const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  CustomerID: {
    type: Number,
    required: true,
  },
  CustomerName: {
    type: String,
    required: true,
  },
  CustomerEmail: {
    type: String,
    required: true,
  },
  CustomerImage: {
    type: String,  // URL or path to the customer's image
    required: true,
  },
  ProjectName: {
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
  Weeks: {
    type: String,
    required: true,
  },
  Budget: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
