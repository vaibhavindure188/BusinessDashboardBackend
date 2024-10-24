const express = require('express');
const router = express.Router();
const Employee = require('../models/employees.js'); // Assuming Employee model is already defined

// Get all employees
router.get('/getAllEmployee', async (req, res) => {
  try {
    const employees = await Employee.find(); // Retrieve all employees from the database
    res.status(200).json(employees); // Send employees as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
});

// Insert all employees
router.post('/insertAllEmployee', async (req, res) => {
  const employees = req.body; // Expecting an array of employee objects in the request body

  try {
    const insertedEmployees = await Employee.insertMany(employees); // Insert multiple employees into the database
    res.status(201).json(insertedEmployees); // Respond with the inserted records
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors
  }
});

module.exports = router;
