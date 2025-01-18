function validarEntradas(req, res, next) {
  const peso = parseFloat(req.body.peso);
  const altura = parseFloat(req.body.altura);
  const cintura = parseFloat(req.body.cintura);
  const cadera = parseFloat(req.body.cadera);

  if (isNaN(peso) || isNaN(altura)) {
    return res.status(400).send("Por favor ingresa valores válidos para peso y altura.");
  }

  if (peso <= 0 || altura <= 0) {
    return res.status(400).send("El peso y la altura deben ser valores positivos.");
  }

  // Validación adicional de las medidas (cintura y cadera)
  if ((cintura && isNaN(cintura)) || (cadera && isNaN(cadera))) {
    return res.status(400).send("Por favor ingresa valores válidos para la circunferencia.");
  }

  next();
}

module.exports = validarEntradas;
