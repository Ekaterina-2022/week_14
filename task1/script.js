let welcomeUser = () => {
  let userName = document.querySelector('[name="user_name"]').value;
  alert(`Привет, ${userName}!`);
};

var result;

function sum() {
  var a = Number(document.querySelector('[name="number1"]').value);
  var b = Number(document.querySelector('[name="number2"]').value);
  let result = a + b;
  document.getElementById("result").innerHTML = result;
}
function sub() {
  var a = Number(document.querySelector('[name="number1"]').value);
  var b = Number(document.querySelector('[name="number2"]').value);
  let result = a - b;
  document.getElementById("result").innerHTML = result;
}
function mult() {
  var a = Number(document.querySelector('[name="number1"]').value);
  var b = Number(document.querySelector('[name="number2"]').value);
  let result = a * b;
  document.getElementById("result").innerHTML = result;
}
function div() {
  var a = Number(document.querySelector('[name="number1"]').value);
  var b = Number(document.querySelector('[name="number2"]').value);
  let result = a / b;
  document.getElementById("result").innerHTML = result;
}
