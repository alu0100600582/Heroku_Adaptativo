"use stric";

function Pregunta(enunciado){
  this.enunciado = enunciado;
}

function PreguntaLarga(enunciado){
  Pregunta.call(this,enunciado);
  this.entrada = "<textarea name='respuesta'></textarea>";
}

function PreguntaCorta(enunciado){
  Pregunta.call(this,enunciado);
  this.entrada = "<input name='respuesta' autofocus=''>";
}


module.exports = PreguntaCorta;
module.exports = PreguntaLarga;
module.exports = Pregunta;
