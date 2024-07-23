const express = require('express');
const userRoutes = require('./src/routes/user');
const quizRoutes = require('./src/routes/quiz');
const questionRoutes = require('./src/routes/question');
const optionRoutes = require('./src/routes/option');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', quizRoutes);
app.use('/api', questionRoutes);
app.use('/api', optionRoutes);

app.get('/', (req, res) => {
  res.send('API Quiz App');
});

app.listen(PORT, () => {
  console.log(
    `Notre application Node est démarrée sur : http://localhost:${PORT}`
  );
});
