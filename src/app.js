/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateDomains();
};

function generateDomains() {
  var pronombre = ["el", "nuestro"];
  var adjetivo = ["gran", "buen", "sorprendente"];
  var nombre = ["lugar", "gato", "perro"];
  var terminal = [".com", ".es", ".net"];
  for (let i = 0; i < pronombre.length; i++) {
    for (let j = 0; j < adjetivo.length; j++) {
      for (let k = 0; k < nombre.length; k++) {
        for (let l = 0; l < terminal.length; l++) {
          console.log(pronombre[i] + adjetivo[j] + nombre[k] + terminal[l]);
        }
      }
    }
  }
}
