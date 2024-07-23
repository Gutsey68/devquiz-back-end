const express = require('express');
const { getAllQuiz, getQuizById } = require('../controllers/quizController');
const router = express.Router();

router.get('/quiz', getAllQuiz);
router.get('/quiz/:id', getQuizById);

module.exports = router;
