// function changing text-shadow of title
var inst = setInterval(changeShadow, 750);

var counter = 0;

function changeShadow() {
  var shadowClasses = ["orangeShadow", "cyanShadow", "magentaShadow"];
  var elem = document.getElementById("titular");

  elem.className = shadowClasses[counter];
  counter++;
  if (counter >= shadowClasses.length) {
    counter = 0;
  }
};

// function makes seals "dance"
var instR1 = setInterval(rotation1, 750);
var instR2 = setInterval(rotation2, 750);

var counterR = 1;

function rotation1() {
  var rotClasses = ["rotate", "rotateLeft", "rotateRight"];
  var elem = document.getElementById("topRightLogo");

  elem.className = rotClasses[counter];
  counterR++;
  if (counterR >= rotClasses.length) {
    counterR = 1;
  }
};

function rotation2() {
  var rotClasses = ["rotate1", "rotateRight", "rotateLeft"];
  var elem = document.getElementById("topLeftLogo");

  elem.className = rotClasses[counter];
  counterR++;
  if (counterR >= rotClasses.length) {
    counterR = 1;
  }
};

// drops drop down menu for tour dates
function showDropDownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
};
