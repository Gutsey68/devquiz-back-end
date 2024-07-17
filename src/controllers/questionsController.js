const Question = require('../models/questionModel');

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    if (questions.length === 0) {
      const message = `Il n'y a pas encore de question`;
      return res.status(404).json({ message });
    }
    const message = 'La liste des questions a bien été trouvée.';
    res.json({ message, data: questions });
  } catch (error) {
    const message = `Les questions n'ont pas pu être récupérées.`;
    res.status(500).json({ message, data: error });
  }
};

module.exports = {
  getAllQuestions
};
