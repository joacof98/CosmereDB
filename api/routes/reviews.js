const express = require("express");
let router = express.Router();

var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const db = require("../database");

// GET all reviews
router.get("/", (req, res) => {
  let GET_ALL_REVIEWS = `SELECT * FROM reviews`;

  db.query(GET_ALL_REVIEWS, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({
        data: result,
      });
    }
  });
});

// POST one review
router.post("/add", jsonParser, (req, res) => {
  const { description, book_name, rating } = req.body;

  if (!description || !book_name || !rating) {
    res.status(400).send("Arguments cant be null");
  } else {
    let ADD_REVIEW = `
      INSERT INTO reviews(description, book, rating) VALUES
      (?,?,?)
    `;

    db.query(
        ADD_REVIEW,
        [description, book_name, rating],
        (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json({
            data: result,
          });
        }
      });
    }
});

// DELETE one review
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  let DEL_REVIEW = `
    DELETE FROM reviews WHERE review_id = '${id}'
  `;

  db.query(DEL_REVIEW, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.affectedRows == 0) {
        res.status(400).send("Invalid review ID");
      } else {
        res.json({
          data: result,
        });
      }
    }
  });
});

// UPDATE one review
router.put("/:id", jsonParser, (req, res) => {
  const id = req.params.id;
  const { description, book_name, rating } = req.body;

  if (!description || !book_name || !rating) {
    res.status(400).send("Arguments cant be null");
  } else {
    const newInfo = {
      description,
      book_name,
      rating
    };
    let UPDATE_REVIEW = `
      UPDATE reviews SET
      description = ?,
      book = ?,
      rating = ?
      WHERE review_id = '${id}'
    `;

    db.query(
      UPDATE_REVIEW,
      [newInfo.description, newInfo.book_name, newInfo.rating],
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (result.affectedRows == 0) {
            res.status(400).send("Invalid review ID");
          } else {
            res.json({
              data: result,
            });
          }
        }
      }
    );
  }
});

module.exports = router;
