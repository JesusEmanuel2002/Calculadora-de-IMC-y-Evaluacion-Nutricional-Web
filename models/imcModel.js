function calcularIMC(peso, altura) {
  const alturaMetros = altura / 100; // Convertir a metros
  return peso / (alturaMetros * alturaMetros);
}

// Función para calcular el porcentaje de grasa corporal
function calcularGrasaCorporal(peso, altura, cintura, cadera, sexo) {
  let grasaCorporal = 0;
  
  // Fórmulas para estimar grasa corporal basadas en la circunferencia
  if (sexo === 'hombre') {
      grasaCorporal = 495 / (1.0324 - 0.19077 * Math.log10(cintura - 10) + 0.15456 * Math.log10(altura)) - 450;
  } else if (sexo === 'mujer') {
      grasaCorporal = 495 / (1.2958 - 0.35004 * Math.log10(cintura + cadera) + 0.22100 * Math.log10(altura)) - 450;
  }

  return grasaCorporal.toFixed(2);
}

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
  calcularGrasaCorporal,
};
