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
const createPackage = (req, res) => {
    const newPackage = req.body;
    tourModel.save(newPackage);
    res.status(201).json({ message: 'Package created successfully' });
}
const updatePackage = (req, res) => {
    const id = Number(req.params.id);
    const updatedPackage = req.body;
    tourModel.update(id, updatedPackage);
    res.json({ message: 'Package updated successfully' });
};
const deletePackage = (req, res) => {
    const id = Number(req.params.id);
    tourModel.delete(id);
    res.json({ message: 'Package deleted successfully' });
}

module.exports = {
    getAllPackages,
    getPackageById,
    createPackage,
    updatePackage,
    deletePackage
};