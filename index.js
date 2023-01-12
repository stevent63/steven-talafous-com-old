import express from 'express'
const app = express();

app.get('/', (req, res) => {
  res.redirect('https://twitter.com/steventlive');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});