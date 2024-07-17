const Option = require('../models/optionModel');

const getAllOptions = async (req, res) => {
  try {
    const options = await Option.findAll();
    if (options.length === 0) {
      const message = `Il n'y a pas encore d'option`;
      return res.status(404).json({ message });
    }
    const message = 'La liste des options a bien été trouvée.';
    res.json({ message, data: options });
  } catch (error) {
    const message = `Les options n'ont pas pu être récupérées.`;
    res.status(500).json({ message, data: error });
  }
};

const getOptionsByQuestion = async (req, res) => {
  try {
    const options = await Option.findOptionsByQuestion(req.params.id);
    if (options.length === 0) {
      const message = `Les options n'éxistent pas. Réessayez avec un autre identifiant de question.`;
      return res.status(404).json({ message });
    }
    const message = 'Les options ont bien été trouvé';
    res.json({ message, data: options });
  } catch (error) {
    const message = `Les options n'ont pas pu être trouvées.`;
    res.status(500).json({ message, data: error });
  }
};

module.exports = {
  getAllOptions,
  getOptionsByQuestion
};
