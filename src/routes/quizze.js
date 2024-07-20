const express = require('express');
const {
  getAllQuizzes,
  getQuizzeById
} = require('../controllers/quizzesController');
const router = express.Router();

router.get('/quiz', getAllQuizzes);
router.get('/quiz/:id', getQuizzeById);

module.exports = router;
