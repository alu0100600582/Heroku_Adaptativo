"use stric";

function Pregunta(enunciado){
  this.enunciado = enunciado;
}


function PreguntaLarga(enunciado){
  Pregunta.call(this,enunciado);
  this.entrada = "<textarea name='respuesta' rows='2' cols='50'></textarea>";
}

function PreguntaCorta(enunciado){
  Pregunta.call(this,enunciado);
  this.entrada = "<input type='text' name='respuesta'>";
}


module.exports = PreguntaCorta;
module.exports = PreguntaLarga;
module.exports = Pregunta;
