const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  EmployeeID: {
    type: Number,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  HireDate: {
    type: Date,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  ReportsTo: {
    type: String,
    required: true,
  },
  EmployeeImage: {
    type: String, // URL or path to the image
    required: true,
  },
});

const Employee = mongoose.model('Employee', customerSchema);

module.exports = Employee;
