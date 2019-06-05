function revisar(){

let pregunta1 = document.trivia.pregunta1.value;
let pregunta2 = document.trivia.pregunta2.value;
let pregunta3 = document.trivia.pregunta3.value;
let acierto1 = 0

  if(pregunta1 == "payaso"){
    acierto1++;
  }
  if(pregunta2 == "cruella"){
    acierto1++;
  }
  if(pregunta3 == "ariel"){
    acierto1++;
  }

  let mensaje = [
    "Parece que no tuviste infancia",
    "Nada mal",
    "Eres un verdadero FAN!"
  ];

  let rango;
    if(acierto1 < 1){
      rango = 0
    };
    if(acierto1 >0 && acierto1 <3){
      rango = 1
    };
    if(acierto1 > 2){
      rango = 2
    };


document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("mensaje").innerHTML = mensaje[rango];
document.getElementById("respuestas_correctas").innerHTML = "Obtuviste " + acierto1 + " respuestas correctas!";
}
