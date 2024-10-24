const express = require('express');
const router = express.Router();
const Order = require('../models/orders.js'); // Assuming Order model is already defined

// Get all orders
router.get('/getAllOrders', async (req, res) => {
  try {
    const orders = await Order.find(); // Retrieve all orders from the database
    res.status(200).json(orders); // Send orders as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
});

// Insert all orders
router.post('/insertAllOrders', async (req, res) => {
  const orders = req.body; // Expecting an array of order objects in the request body

  try {
    const insertedOrders = await Order.insertMany(orders); // Insert multiple orders into the database
    res.status(201).json(insertedOrders); // Respond with the inserted records
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors
  }
});

module.exports = router;
