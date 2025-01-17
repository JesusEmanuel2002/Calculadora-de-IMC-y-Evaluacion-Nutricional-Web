// controllers/imcController.js
const imcModel = require("../models/imcModel");

// Controlador para la ruta principal (mostrar formulario)
function mostrarFormulario(req, res) {
  res.render("index");
}

// Controlador para calcular el IMC
function calcularIMC(req, res) {
  const peso = parseFloat(req.body.peso);
  const altura = parseFloat(req.body.altura);

  // Calcular IMC usando el modelo
  const imc = imcModel.calcularIMC(peso, altura);
  
  // Evaluar IMC y obtener recomendaciones
  const { categoria, recomendaciones } = imcModel.evaluarIMC(imc);

  // Mostrar resultados en la vista
  res.render("result", {
    imc: imc.toFixed(2),
    categoria: categoria,
    recomendaciones: recomendaciones,
  });
}

module.exports = {
  mostrarFormulario,
  calcularIMC,
};
