const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/quizzes'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + 'dist/quizzes/index.html');
});

app.listen(PORT, () => {
  console.log('servidor iniciado na porta' + PORT);
})
