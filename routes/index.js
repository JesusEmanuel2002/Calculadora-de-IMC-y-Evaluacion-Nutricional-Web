// routes/index.js
const express = require("express");
const router = express.Router();

// Importamos el controlador y el middleware
const imcController = require("../controllers/imcController");
const validarEntradas = require("../middlewares/validateInput");

// Ruta principal (GET)
router.get("/", imcController.mostrarFormulario);

// Ruta para calcular el IMC (POST)
router.post("/calcular", validarEntradas, imcController.calcularIMC);

module.exports = router;
