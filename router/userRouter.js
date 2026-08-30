const express = require("express");

const router = express.Router();

const userController = require("../controller/userController");

// GET all users
router.get("/", userController.getAll);

// GET user by ID
router.get("/:id", userController.getById);

// POST create user
router.post("/", userController.save);

// PUT update user
router.put("/:id", userController.update);

// DELETE user
router.delete("/:id", userController.deleteUser);

module.exports = router;
