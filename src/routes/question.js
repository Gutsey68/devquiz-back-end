const express = require('express');
const { getAllQuestions } = require('../controllers/questionsController');
const router = express.Router();

router.get('/questions', getAllQuestions);

module.exports = router;
