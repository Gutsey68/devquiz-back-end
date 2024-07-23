const Quiz = require('../models/quizModel');

const getAllQuiz = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    if (quizzes.length === 0) {
      const message = `Il n'y a pas encore de quiz`;
      return res.status(404).json({ message });
    }
    const message = 'La liste des quiz a bien été trouvée.';
    res.json({ message, data: quizzes });
  } catch (error) {
    const message = `Les quiz n'ont pas pu être récupérés.`;
    res.status(500).json({ message, data: error });
  }
};

const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      const message = `Le quiz n'existe pas. Réessayez avec un autre identifiant.`;
      return res.status(404).json({ message });
    }
    const message = 'Le quiz a bien été trouvé';
    res.json({ message, data: quiz });
  } catch (error) {
    const message = `Le quiz n'a pas pu être trouvé.`;
    res.status(500).json({ message, data: error });
  }
};

module.exports = {
  getAllQuiz,
  getQuizById
};
