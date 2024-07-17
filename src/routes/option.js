const express = require('express');
const {
  getAllOptions,
  getOptionsByQuestion
} = require('../controllers/optionsController');
const router = express.Router();

router.get('/options', getAllOptions);
router.get('/options/:id', getOptionsByQuestion);

module.exports = router;
