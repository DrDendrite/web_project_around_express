const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const userFilePath = path.join(__dirname, "../data/users.json");

router.get("/", (req, res) => {
  fs.readFile(userFilePath, (err, data) => {
    if (err) {
      res.status(500).send({ messege: "Error al leer el archivo de usuarios" });
      return;
    }
    res.json(JSON.parse(data));
  });
});

router.get("/:id", (req, res) => {
  fs.readFile(userFilePath, (err, data) => {
    if (err) {
      res.status(500).send({ message: "Error al leer el archivo de usuarios" });
      return;
    }
    const users = JSON.parse(data);
    const user = users.find((user) => user._id === req.params.id);
    if (!user) {
      res.status(404).send({ menssage: "ID de usuario no encontrado" });
      return;
    }
    res.json(user);
  });
});

module.exports = router;