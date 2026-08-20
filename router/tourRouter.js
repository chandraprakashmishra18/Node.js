const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController.js');

// Route to get all packages
router.get('/' , tourController.getAllPackages);

// Route to get a package by ID
router.get('/:id', tourController.getPackageById);
module.exports = router;