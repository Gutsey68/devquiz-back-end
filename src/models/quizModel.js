const pool = require('../database/database');

const Quiz = {
  findAll: async () => {
    const [rows] = await pool.execute('SELECT * FROM quizzes');
    return rows;
  },
  findById: async id => {
    const [quizRows] = await pool.execute(
      'SELECT * FROM quizzes WHERE id = ?',
      [id]
    );
    if (quizRows.length === 0) {
      return null;
    }
    const quiz = quizRows[0];

    const [questionRows] = await pool.execute(
      `SELECT q.id as question_id, q.question_text, q.difficulty, o.id as option_id, o.option_text, o.is_correct, o.explanation 
       FROM questions q
       JOIN quiz_questions qq ON qq.question_id = q.id
       LEFT JOIN options o ON o.question_id = q.id
       WHERE qq.quiz_id = ?`,
      [id]
    );

    const questions = {};
    questionRows.forEach(row => {
      if (!questions[row.question_id]) {
        questions[row.question_id] = {
          id: row.question_id,
          question_text: row.question_text,
          difficulty: row.difficulty,
          options: []
        };
      }
      if (row.option_id) {
        questions[row.question_id].options.push({
          id: row.option_id,
          text: row.option_text,
          is_correct: row.is_correct,
          explanation: row.explanation
        });
      }
    });

    quiz.questions = Object.values(questions);
    return quiz;
  }
};

module.exports = Quiz;
