const pool = require('../database/database');

const Question = {
  findAll: async () => {
    const [rows] = await pool.execute('SELECT * FROM questions');
    return rows;
  }
};

module.exports = Question;
