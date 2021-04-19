// Selecting calculator buttons
var calculatorButtons = document.querySelectorAll("#calc-actoin span");

// operators
var operators = ["+", "-", "x", "÷"];

// Set decimal flag for use later
var decimalAdded = false;

// looping over calculatorButtons
for (var i = 0; i < calculatorButtons.length; i++) {
  //add onclick event to the calculatorButtons
  calculatorButtons[i].onclick = function (e) {
    // Get the input and button values
    var input = document.querySelector("#solutions");
    var equations = document.querySelector("#display");

    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;

    // If backspace is pressed, clear everything
    if (btnVal == "C") {
        console.log("hiii");
      equations.innerHTML = "";
      input.innerHTML = "";
      decimalAdded = false;
    }

    // If equasl key is pressed, calculate results
    else if (btnVal == "=") {
      var equation = inputVal; //append equation to variable
      var lastChar = equation[equation.length - 1]; //target the end of the eval string

      // Use regex to replace all instances of x, ÷ with *, / and **
      equation = equation
        .replace(/x/g, "*")
        .replace(/÷/g, "/")
        .replace(/\^/g, "**");

      //Use regex to remove decimals from the end of an equation
      if (operators.indexOf(lastChar) > -1 || lastChar == ".")
        equation = equation.replace(/.$/, "");

      // use javascript's eval function to get the result

      if (equation) equations.innerHTML = equation;
      input.innerHTML = eval(equation);
      decimalAdded = false;
    }

    // Single operator check
    else if (operators.indexOf(btnVal) > -1) {
      // Get the last character from the equation
      var lastChar = inputVal[inputVal.length - 1];

      // Only add operator if input is not empty
      if (inputVal != "" && operators.indexOf(lastChar) == -1)
        input.innerHTML += btnVal;
      // Allow minus operator if the string is empty
      else if (inputVal == "" && btnVal == "-") input.innerHTML += btnVal;

      // Replace the last operator (if exists) with the newly pressed operator
      if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
        input.innerHTML = inputVal.replace(/.$/, btnVal);
      }

      decimalAdded = false;
    }
    // allow decimal point input
    else if (btnVal == ".") {
        console.log(input.innerHTML);
      if (!decimalAdded) {
        input.innerHTML += btnVal;
        decimalAdded = true;
      }
    }

    // if any other key is pressed, just append it after the decimal
    else {
      input.innerHTML += btnVal;
    }

    // prevent page jumps
    e.preventDefault();
  };
}

//adding keyboard input functionality
document.onkeydown = function (event) {
  var key_press = String.fromCharCode(event.keyCode);
  var key_code = event.keyCode;
  var input = document.querySelector("#solutions");
  var equations = document.querySelector("#display");
  var inputVal = input.innerHTML;
  var btnVal = this.innerHTML;
  var lastChar = inputVal[inputVal.length - 1];
  var equation = inputVal;
  // Using regex to replace all instances of x, ÷, ^ with *, / and ** respectively.
  equation = equation
    .replace(/x/g, "*")
    .replace(/÷/g, "/")

  // Target each keypress and update the input screen

  if (key_press == 1) {
    input.innerHTML += key_press;
  }
  if (key_press == 2) {
    input.innerHTML += key_press;
  }
  if (key_press == 3 || key_code == 32) {
    input.innerHTML += key_press;
  }
  if (key_press == 4) {
    input.innerHTML += key_press;
  }
  if (key_press == 5) {
    input.innerHTML += key_press;
  }
  if (key_press == 6 && event.shiftKey == false) {
    input.innerHTML += key_press;
  }
  if (key_press == 7) {
    input.innerHTML += key_press;
  }
  if (key_press == 8 && event.shiftKey == false) {
    input.innerHTML += key_press;
  }
  if (key_press == 9) {
    input.innerHTML += key_press;
  }
  if (key_press == 0) {
    input.innerHTML += key_press;
  }

  // Cature operators and prevent from addint two consecutuve operators

  if (
    (inputVal != "" &&
      operators.indexOf(lastChar) == -1 &&
      key_code == 187 &&
      event.shiftKey) ||
    key_code == 107 ||
    (key_code == 61 && event.shiftKey)
  ) {
    console.log('plus');

    document.querySelector("#solutions").innerHTML += "+";
    decimalAdded = false;
  }
  if (
    (inputVal != "" &&
      operators.indexOf(lastChar) == -1 &&
      key_code == 189 &&
      event.shiftKey) ||
    (inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 107)
  ) {
      console.log('minus');
    document.querySelector("#solutions").innerHTML += "-";
    decimalAdded = false;
  }
  if (
    (inputVal != "" &&
      operators.indexOf(lastChar) == -1 &&
      key_code == 56 &&
      event.shiftKey) ||
    (inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 106)
  ) {
    document.querySelector("#solutions").innerHTML += "x";
    decimalAdded = false;
  }
  if (
    (inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 191) ||
    (inputVal != "" && operators.indexOf(lastChar) == -1 && key_code == 111)
  ) {
    document.querySelector("#solutions").innerHTML += "÷";
    decimalAdded = false;
  }

  if (key_code == 13 || (key_code == 187 && event.shiftKey == false)) {
      console.log('add');
    console.log(equation);
    equations.innerHTML = equation;
    input.innerHTML = eval(equation);
    //reset decimal added flag
    decimalAdded = false;
  }

  if (key_code == 190  && event.shiftKey == false) {
    // decimalAdded = false;
    if (!decimalAdded) {
        input.innerHTML += ".";
        decimalAdded = true;
      }
  }

  if (key_code == 8 || key_code == 46) {
    equations.innerHTML = "";
    input.innerHTML = "";
    decimalAdded = false;
  }
};
