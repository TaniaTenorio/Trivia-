function revisar(){

let pregunta1 = document.trivia.pregunta1.value;
let pregunta2 = document.trivia.pregunta2.value;
let pregunta3 = document.trivia.pregunta3.value;
let acierto2 = 0

  if(pregunta1 == "grecia"){
    acierto2++;
  }
  if(pregunta2 == "rusia"){
    acierto2++;
  }
  if(pregunta3 == "china"){
    acierto2++;
  }

let mensaje = [
    "Uy! Te hace falta viajar :( ",
    "Sí le sabes",
    "Sí te acuerdas de tus clases de Geografía"
  ];

  let rango;
    if(acierto2 < 1){
      rango = 0
    };
    if(acierto2 > 0 && acierto2 <3){
      rango = 1
    };
    if(acierto2 > 2){
      rango = 2
    };
    
document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("mensaje").innerHTML = mensaje[rango];
document.getElementById("respuestas_correctas").innerHTML = "Obtuviste " + acierto2 + " respuestas correctas!";
}
