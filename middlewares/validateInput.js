// middlewares/validateInput.js

// Middleware para validar las entradas del formulario (peso y altura)
function validarEntradas(req, res, next) {
    const peso = parseFloat(req.body.peso);
    const altura = parseFloat(req.body.altura);
  
    if (isNaN(peso) || isNaN(altura)) {
      return res.status(400).send("Por favor ingresa valores válidos para peso y altura.");
    }
  
    if (peso <= 0 || altura <= 0) {
      return res.status(400).send("El peso y la altura deben ser valores positivos.");
    }
  
    next();
  }
  
module.exports = validarEntradas;  