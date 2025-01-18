const imcModel = require("../models/imcModel");

// Controlador para la ruta principal (mostrar formulario)
function mostrarFormulario(req, res) {
  res.render("index");
}

// Controlador para calcular el IMC y grasa corporal
function calcularIMC(req, res) {
  const peso = parseFloat(req.body.peso);
  const altura = parseFloat(req.body.altura);
  const cintura = parseFloat(req.body.cintura);
  const cadera = parseFloat(req.body.cadera);
  const sexo = req.body.sexo; // Asegúrate de agregar un campo para el sexo en el formulario

  // Calcular IMC usando el modelo
  const imc = imcModel.calcularIMC(peso, altura);
  
  // Evaluar IMC y obtener recomendaciones
  const { categoria, recomendaciones } = imcModel.evaluarIMC(imc);

  // Calcular porcentaje de grasa corporal
  const grasaCorporal = imcModel.calcularGrasaCorporal(peso, altura, cintura, cadera, sexo);

  // Mostrar resultados en la vista
  res.render("result", {
    imc: imc.toFixed(2),
    categoria: categoria,
    recomendaciones: recomendaciones,
    grasaCorporal: grasaCorporal,
  });
}

module.exports = {
  mostrarFormulario,
  calcularIMC,
};

