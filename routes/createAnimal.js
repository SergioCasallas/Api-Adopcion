const express = require("express");
const router = express.Router();

const { createAnimal } = require("../controllers/createAnimal");

router.post("/", createAnimal);

module.exports = router;
