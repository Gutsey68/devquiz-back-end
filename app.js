const express = require('express');
const userRoutes = require('./src/routes/user');
const quizzeRoutes = require('./src/routes/quizze');
const questionRoutes = require('./src/routes/question');
const optionRoutes = require('./src/routes/option');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', quizzeRoutes);
app.use('/api', questionRoutes);
app.use('/api', optionRoutes);

app.get('/', (req, res) => {
  res.send('API Quiz App');
});

app.listen(port, () =>
  console.log(
    `Notre application Node est démarée sur : http://localhost:${port}`
  )
);
