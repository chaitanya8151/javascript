let calculation = localStorage.getItem('calValue') || '';
displayCalculation();
function updateCalculation(value) {
  calculation += value;
  localStorage.setItem('calValue', calculation);
  displayCalculation();
}
function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML
    = calculation;
}