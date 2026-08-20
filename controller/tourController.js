const tourModel = require('../model/tourModel');

const getAllPackages = (req, res) => {
    const packages = tourModel.getAll();
    res.json(packages);
};

const getPackageById = (req, res) => {
    const id = Number(req.params.id);
    const package = tourModel.getById(id);
    if (package) {
        res.json(package);
    } else {
        res.status(404).json({ message: 'Package not found' });
    }
};

module.exports = {
    getAllPackages,
    getPackageById
};