const pool = require('../database/database');

const Quizze = {
  findAll: async () => {
    const [rows] = await pool.execute('SELECT * FROM quizzes');
    return rows;
  },
  findById: async id => {
    const [rows] = await pool.execute('SELECT * FROM quizzes WHERE id = ?', [
      id
    ]);
    return rows[0];
  }
};

module.exports = Quizze;
