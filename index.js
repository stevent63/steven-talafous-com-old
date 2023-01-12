import https from 'https'
import express from 'express'
const app = express();

const options = {};

app.get('/', (req, res) => {
  res.redirect('https://twitter.com/steventlive');
});

const server = https.createServer(options, app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Serving on port ${port}`);
});