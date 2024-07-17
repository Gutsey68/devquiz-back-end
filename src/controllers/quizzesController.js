const Quizze = require('../models/quizzeModel');

const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quizze.findAll();
    if (quizzes.length === 0) {
      const message = `Il n'y a pas encore de quizz`;
      return res.status(404).json({ message });
    }
    const message = 'La liste des quizss a bien été trouvé.';
    res.json({ message, data: quizzes });
  } catch (error) {
    const message = `Les quizzs n'ont pas pu être récupérés.`;
    res.status(500).json({ message, data: error });
  }
};

const getQuizzeById = async (req, res) => {
  try {
    const quizze = await Quizze.findById(req.params.id);
    if (!quizze) {
      const message = `Le quizz n'éxiste pas. Réessayez avec un autre identifiant.`;
      return res.status(404).json({ message });
    }
    const message = 'Le quizz a bien été trouvé';
    res.json({ message, data: quizze });
  } catch (error) {
    const message = `Le quizz n'a pas pu être trouvé.`;
    res.status(500).json({ message, data: error });
  }
};

module.exports = {
  getAllQuizzes,
  getQuizzeById
};
