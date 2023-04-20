const express = require("express");
const router = express.Router();

const professoresController = require("../controllers/professoresController.js");

router.get("/", professoresController.showAll);
router.get("/:matricula", professoresController.selectById);

module.exports = router;