const express = require("express");
let router = express.Router();
const db = require('../database');

// GET all magic systems
router.get("/", (req, res) => {
  let GET_ALL_MS = `
    SELECT magic_systems.*, sagas.name AS 'saga' FROM magic_systems
    JOIN sagas ON magic_systems.saga = sagas.saga_id
  `;

  db.query(GET_ALL_MS, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({
        data: result,
      });
    }
  });
});

// GET one magic system by name
router.get("/:name", (req, res) => {
  let GET_ONE_MS = `
    SELECT magic_systems.*, sagas.name AS 'saga' FROM magic_systems
    JOIN sagas ON magic_systems.saga = sagas.saga_id
    WHERE magic_systems.name = '${req.params.name}'
  `;

  db.query(GET_ONE_MS, (err, result) => {
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