const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName,
      lastName,
      username,
      email,
      password_hash: hashedPassword
    });
    const token = jwt.sign({ id: newUser.insertId }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });
    res.status(201).json({ token });
  } catch (error) {
    console.error('Erreur lors de la création du compte:', error);
    res.status(500).json({ error: 'Erreur lors de la création du compte.' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "L'utilisateur n'existe pas." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Mot de passe incorrect.' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    res.status(500).json({ error: 'Erreur lors de la connexion.' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      const message = `Il n'y a pas encore d'utilisateurs`;
      return res.status(404).json({ message });
    }
    const message = 'La liste des joueurs a bien été trouvée.';
    res.json({ message, data: users });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    const message = `Les utilisateurs n'ont pas pu être récupérés.`;
    res.status(500).json({ message, data: error });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      const message = `L'utilisateur n'existe pas. Réessayez avec un autre identifiant.`;
      return res.status(404).json({ message });
    }
    const message = "L'utilisateur a bien été trouvé";
    res.json({ message, data: user });
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur:", error);
    const message = `L'utilisateur n'a pas pu être trouvé.`;
    res.status(500).json({ message, data: error });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  signup,
  login
};
