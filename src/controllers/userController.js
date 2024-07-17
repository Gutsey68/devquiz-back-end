const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      const message = `Il n'y a pas encore d'utilisateurs`;
      return res.status(404).json({ message });
    }
    const message = 'La liste des joueurs a bien été trouvé.';
    res.json({ message, data: users });
  } catch (error) {
    const message = `Les utilisateurs n'ont pas pu être récupérés.`;
    res.status(500).json({ message, data: error });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      const message = `L'utilisateur n'éxiste pas. Réessayez avec un autre identifiant.`;
      return res.status(404).json({ message });
    }
    const message = "L'utilisateur a bien été trouvé";
    res.json({ message, data: user });
  } catch (error) {
    const message = `L'utilisateur n'a pas pu être trouvé.`;
    res.status(500).json({ message, data: error });
  }
};

module.exports = {
  getAllUsers,
  getUserById
};
