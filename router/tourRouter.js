const express = require('express');
const router = express.Router();

const tourController = require('../controller/tourController.js');

// GET all packages
router.get('/', tourController.getAllPackages);

// GET package by ID
router.get('/:id', tourController.getPackageById);

// POST create package
router.post('/', tourController.createPackage);
// PUT update package
router.put('/:id', tourController.updatePackage);
// delete packages
router.delete('/:id', tourController.deletePackage);

module.exports = router;