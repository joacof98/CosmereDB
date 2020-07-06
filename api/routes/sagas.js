const express = require("express");
let router = express.Router();
const db = require('../database');

// GET all sagas
router.get("/", (req, res) => {
  let GET_ALL_SAGAS = `
    SELECT
      sagas.*,
      planets.name as 'planet',
      magic_systems.name as 'magic_system'
    FROM sagas
    JOIN planets ON sagas.planet = planets.planet_id
    JOIN magic_systems ON sagas.magic_system = magic_systems.magic_system_id
  `;

  db.query(GET_ALL_SAGAS, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({
        data: result,
      });
    }
  });
});

// GET one saga by name
router.get("/:name", (req, res) => {
  let GET_ONE_SAGA = `
  SELECT
    sagas.*,
    planets.name as 'planet',
    magic_systems.name as 'magic_system'
  FROM sagas
  JOIN planets ON sagas.planet = planets.planet_id
  JOIN magic_systems ON sagas.magic_system = magic_systems.magic_system_id
  WHERE sagas.name = '${req.params.name}'
  `;

  db.query(GET_ONE_SAGA, (err, result) => {
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