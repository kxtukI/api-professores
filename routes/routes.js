const express = require("express");
const router = express.Router();

const professoresController = require("../controllers/professoresController.js");

router.get("/professores", professoresController.listarTodos);
router.get("/professor/:matricula", professoresController.exibirMatricula);
router.post("/professor", professoresController.criarProfessor);
router.patch("/professor/:matricula", professoresController.atualizarProfessor);
router.delete("/professor/:matricula", professoresController.deletarProfessor);

module.exports = router;