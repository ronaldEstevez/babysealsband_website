/*
To do list for JavaScript additions:
  - ???


*/

// function changing text-shadow of title
var inst = setInterval(changeShadow, 1000);

var counter = 0;

function changeShadow() {
  var shadowIDs = ["orangeShadow", "cyanShadow", "magentaShadow"];
  var elem = document.getElementById("titular");

  elem.className = shadowIDs[counter];
  counter++;
  if (counter >= shadowIDs.length) {
    counter = 0;}
}








    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
