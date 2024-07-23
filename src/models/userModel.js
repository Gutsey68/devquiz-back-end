const pool = require('../database/database');

const User = {
  create: async ({ firstName, lastName, username, email, password_hash }) => {
    const [result] = await pool.execute(
      'INSERT INTO users (first_name, last_name, username, email, password_hash) VALUES (?, ?, ?, ?, ?)',
      [firstName, lastName, username, email, password_hash]
    );
    return result;
  },
  findByEmail: async email => {
    const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [
      email
    ]);
    return rows[0];
  },
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
