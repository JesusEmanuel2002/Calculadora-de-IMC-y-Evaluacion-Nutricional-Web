// models/imcModel.js

// Función para calcular el IMC
function calcularIMC(peso, altura) {
    const alturaMetros = altura / 100; // Convertir a metros
    return peso / (alturaMetros * alturaMetros);
  }
  
  // Función para determinar la categoría y las recomendaciones
  function evaluarIMC(imc) {
    let categoria = "";
    let recomendaciones = "";
  
    if (imc < 18.5) {
      categoria = "Bajo peso";
      recomendaciones = "Aumentar la ingesta calórica, consumir alimentos ricos en nutrientes.";
    } else if (imc >= 18.5 && imc < 25) {
      categoria = "Peso normal";
      recomendaciones = "Mantener un peso saludable con una dieta equilibrada y ejercicio regular.";
    } else if (imc >= 25 && imc < 30) {
      categoria = "Sobrepeso";
      recomendaciones = "Reducir la ingesta calórica, aumentar la actividad física.";
    } else {
      categoria = "Obesidad";
      recomendaciones = "Buscar ayuda profesional para desarrollar un plan de pérdida de peso.";
    }
  
    return { categoria, recomendaciones };
  }
  
  module.exports = {
    calcularIMC,
    evaluarIMC,
  };
  