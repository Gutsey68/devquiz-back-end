const express = require('express');
const {
  getAllUsers,
  getUserById,
  signup,
  login
} = require('../controllers/userController');
const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
