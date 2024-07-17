const pool = require('../database/database');

const Option = {
  findAll: async () => {
    const [rows] = await pool.execute(
      'SELECT * FROM `options` INNER JOIN questions ON options.question_id = questions.id;'
    );
    return rows;
  },
  findOptionsByQuestion: async id => {
    const [rows] = await pool.execute(
      'SELECT * FROM `options` INNER JOIN questions ON options.question_id = questions.id WHERE questions.id = ?',
      [id]
    );
    return rows;
  }
};

module.exports = Option;
