const express = require('express')
const router = express.Router();

const Customer = require('../models/customers.js'); // Import the Customer model

// GET request to fetch all customers
router.get('/getAllCustomers', async (req, res) => {
  try {
    const customers = await Customer.find(); // Fetch all customers from the database
    res.status(200).json(customers); // Send the list of customers as JSON
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
});

// POST request to insert multiple customers
router.post('/insertAllCustomer', async (req, res) => {
    const customers = req.body; // Expecting an array of customer objects in the request body
    
    try {
      // Insert multiple customers
      const insertedCustomers = await Customer.insertMany(customers);
      res.status(201).json(insertedCustomers); // Return the inserted customers
    } catch (error) {
      res.status(400).json({ message: error.message }); // Handle errors
    }
  });
  


module.exports  = router;