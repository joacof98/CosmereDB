const express = require("express");
let router = express.Router();
const db = require('../database');

// GET all planets
router.get("/", (req, res) => {
  let GET_ALL_PLANETS = `
    SELECT planets.*, magic_systems.name AS 'magic_system' FROM planets
    JOIN magic_systems ON planets.magic_system = magic_systems.magic_system_id
  `;

  db.query(GET_ALL_PLANETS, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({
        data: result,
      });
    }
  });
});

// GET one planet by name
router.get("/:name", (req, res) => {
  let GET_ONE_PLANET = `
    SELECT planets.*, magic_systems.name AS 'magic_system' FROM planets
    JOIN magic_systems ON planets.magic_system = magic_systems.magic_system_id
    WHERE planets.name = '${req.params.name}'
  `;

  db.query(GET_ONE_PLANET, (err, result) => {
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