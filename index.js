require('dotenv').config();

const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const controllers = require('./controllers');

const app = express();
app.set('view engine', 'ejs');

app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => {
  res.send("You made it here");
});

let server = app.listen(process.env.PORT || 3000, function () {
  console.log(`Listening on ... ${process.env.PORT || 3000}`);
});

// module.exports = server;
