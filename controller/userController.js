const userModel = require('../model/userModel');

// GET all users
const getAll = (req, res) => {

    const users = userModel.getAll();

    res.json(users);
};


// GET user by ID
const getById = (req, res) => {

    const id = Number(req.params.id);

    const user = userModel.getById(id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
};


// POST create user
const save = (req, res) => {

    const newUser = req.body;

    userModel.save(newUser);

    res.status(201).json({
        message: 'User created successfully',
        user: newUser
    });
};


// PUT update user
const update = (req, res) => {

    const id = Number(req.params.id);

    const updatedUser = req.body;

    const user = userModel.update(id, updatedUser);

    if (user) {
        res.json({
            message: 'User updated successfully',
            user: user
        });
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
};


// DELETE user
const deleteUser = (req, res) => {

    const id = Number(req.params.id);

    const deleted = userModel.delete(id);

    if (deleted) {
        res.json({
            message: 'User deleted successfully'
        });
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
};


module.exports = {
    getAll,
    getById,
    save,
    update,
    deleteUser
};
