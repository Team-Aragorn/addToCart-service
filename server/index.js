const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const db;

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

//TO-DO: api get router
app.get('/api/game/:id' (req, res) => {
  const id = Number(path.basename(req.url));
  db.getGame(id, (err, result) => {
    if(err) {
      res.sendStatus(500);
      res.end();
    } else {
      res.send(result).json();
      res.end();
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
