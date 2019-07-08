/*
This is how to calculate the monthly payment for the mortgage

function calculateMonthlyPayment(){
// declare some variables
  const monthlyRate = annualRate / 12 / 100
  const numberOfPayments = numberOfYears * 12
  const numerator = monthlyRate * (1 + monthlyRate) ** numberOfPayments
  const denominator = (1 + monthlyRate) ** numberOfPayments - 1
  return principal * (numerator / denominator)
}*/

window.addEventListener('load', function() {

 function calculateMonthlyPayment(){
// declare some variables
  let annualRate = document.getElementById("the-rate").value;
  let numberOfYears = document.getElementById("years").value;
  let principal = document.getElementById("the-principal").value;

  const monthlyRate = annualRate / 12 / 100;
  const numberOfPayments = numberOfYears * 12;
  const numerator = monthlyRate * (1 + monthlyRate) ** numberOfPayments
  const denominator = (1 + monthlyRate) ** numberOfPayments - 1
  console.log("$" + (principal * (numerator / denominator)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));

  //make message at bottom say exactly what the result is
  document.getElementById("monthly-payment").innerHTML = `Monthly Payment: $${(principal * (numerator / denominator)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

  return principal * (numerator / denominator);
}

 document.getElementById("calculate-button").onclick = function (event)   {

  event.preventDefault();
  calculateMonthlyPayment();

};



});

