const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const multer = require('multer');
const upload = multer();

app.use(express.static(path.join(__dirname, 'build')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/contact", upload.none(), function(req, res) {
  console.log(req.body);
  res.send({data: req.body});
});

const port = process.env.PORT || 8080
app.listen(port);

console.log("Server listening on port: ", port)