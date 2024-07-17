const express = require('express');
const { getAllUsers, getUserById } = require('../controllers/userController');
const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

module.exports = router;
