const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');

const app = express();

// Middlewares
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Routes
const characters = require('./routes/characters');
const sagas = require('./routes/sagas');
const books = require('./routes/books');
const magic_systems = require('./routes/magicSystems');
const planets = require('./routes/planets');
const reviews = require('./routes/reviews');

// Connection of SQL database
db.connect((err) => {
  if(err) throw err;
  console.log("Database connected")
})

// Endpoints
app.get("/", (req,res) => {
  res.send("The Cosmere API!")
})
app.use('/characters', characters);
app.use('/sagas', sagas);
app.use('/books', books);
app.use('/planets', planets);
app.use('/magic-systems', magic_systems);
app.use('/reviews', reviews);

app.listen('4000', () => {
  console.log("Server started in port 4000")
})