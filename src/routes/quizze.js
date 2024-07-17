const express = require('express');
const {
  getAllQuizzes,
  getQuizzeById
} = require('../controllers/quizzesController');
const router = express.Router();

router.get('/quizzes', getAllQuizzes);
router.get('/quizzes/:id', getQuizzeById);

module.exports = router;
