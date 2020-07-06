const express = require("express");
let router = express.Router();
const db = require('../database');

// GET all books
router.get("/", (req, res) => {
  let GET_ALL_BOOKS = `
    SELECT books.*, sagas.name AS 'saga' FROM books
    JOIN sagas ON books.saga = sagas.saga_id
  `;

  db.query(GET_ALL_BOOKS, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({
        data: result,
      });
    }
  });
});

// GET one book by name
router.get("/:name", (req, res) => {
  let GET_ONE_BOOK = `
    SELECT books.*, sagas.name AS 'saga' FROM books
    JOIN sagas ON books.saga = sagas.saga_id
    WHERE books.name = '${req.params.name}'
  `;

  db.query(GET_ONE_BOOK, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({
        data: result,
      });
    }
  });
}); 

module.exports = router;