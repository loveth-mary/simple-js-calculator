let calculation = localStorage.getItem("calculationResult");

function displayCalculation() {
    console.log(calculation);
    document.getElementById('displayNumbers').innerHTML = calculation;
    localStorage.setItem('calculationResult', calculation);
}

function updateCalculation(value) {
    calculation = calculation + value;
    displayCalculation()
}

function calculateResult() {
    calculation = eval(calculation)
    displayCalculation()
}

function clearCalculation() {
    calculation = ''
    displayCalculation()
}

function deleteLast() {
    calculation = calculation.slice(0, -1)
    displayCalculation()
}