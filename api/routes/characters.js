const express = require("express");
let router = express.Router();
const db = require("../database");

//GET parameters for filter in db
router.get("/search", (req, res) => {
  db.query(GET_CHARS_FILTER, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({
        data: result
      });
    }
  });
});

// GET all characters
router.get("/", (req, res) => {
  let GET_ALL_CHARS = `
   SELECT characters.*, sagas.name AS 'saga', planets.name AS 'planet' FROM characters
   JOIN sagas ON characters.saga = sagas.saga_id
   JOIN planets ON characters.planet = planets.planet_id
  `;

  db.query(GET_ALL_CHARS, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({
        data: result
      });
    }
  });
});

// GET one char by name
router.get("/:name", (req, res) => {
  let GET_ONE_CHAR = `
    SELECT characters.*, sagas.name AS 'saga', planets.name AS 'planet' FROM characters
    JOIN sagas ON characters.saga = sagas.saga_id
    JOIN planets ON characters.planet = planets.planet_id
    WHERE characters.name = '${req.params.name}'
  `;

  db.query(GET_ONE_CHAR, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({
        data: result
      });
    }
  });
});

module.exports = router;
