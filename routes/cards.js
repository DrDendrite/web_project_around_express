const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const cardFilePath = path.join(__dirname, "../data/cards.json");

router.get("/", (req, res) => {
  fs.readFile(cardFilePath, (err, data) => {
    if (err) {
      res
        .status(500)
        .send({ menssage: "Error al leer el archivo de tarjetas" });
      return;
    }
    res.json(JSON.parse(data));
  });
});

module.exports = router;