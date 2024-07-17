const pool = require('../database/database');

const User = {
  findAll: async () => {
    const [rows] = await pool.execute('SELECT * FROM users');
    return rows;
  },
  findById: async id => {
    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }
};

module.exports = User;
