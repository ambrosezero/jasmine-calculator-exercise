window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  // ???? WHAT DOES "IF (FORM)" DO IN THIS CONTEXT? LINE 4
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

// let loanAmount = "1000";
// let loanYears = "2";
// let loanRate = "10";
// ????? WHY DO I NOT NEED TO DECLARE monthlyPayment as a variable? it is used in later fxns
// let monthlyPayment = ""

// !!!!! CONSIDER NIXING THE FOLLOWING 3 LINES
// let loanAmountElement = document.getElementById("loan-amount");
// let loanYearsElement = document.getElementById("loan-years");
// let loanRateElement = document.getElementById("loan-rate");

// ?????? CAN THE FOLLOWING LINE BE REPLACED? why is it necessary when declaring monthlyPayment (see above) is not?
let monthlyPaymentElement = document.getElementById("monthly-payment");



function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  loanAmount = getCurrentUIValues().amount;
  loanRate = getCurrentUIValues().rate;
  loanYears = getCurrentUIValues().years;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  getCurrentUIValues();
  setupIntialValues();
  calculateMonthlyPayment();
  updateMonthly();

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment() {
  // if (Object.values(values).includes(0)) {
  //   alert('NEITHER THE LOAN AMOUNT NOR THE LOAN TERM CAN BE 0')
  // }
  // else {
  monthlyPayment = (loanAmount * (loanRate / 12)) / (1 - (1 + loanRate / 12) ** (loanYears * 12 * -1))
  monthlyPayment = monthlyPayment.toFixed(2)
  return monthlyPayment
}
// }

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  monthlyPaymentElement.textContent = monthlyPayment.toString();
}
