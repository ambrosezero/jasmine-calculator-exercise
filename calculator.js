window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

let loanAmount = "1000";
let loanYears = "2";
let loanRate = "10";
let monthlyPayment = ""


let loanAmountElement = document.getElementById("loan-amount");
let loanYearsElement = document.getElementById("loan-years");
let loanRateElement = document.getElementById("loan-rate");
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
  loanYears = getCurrentUIValues().years;
  loanRate = getCurrentUIValues().rate;
  calculateMonthlyPayment()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  getCurrentUIValues();
  calculateMonthlyPayment();
  updateMonthly();

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  monthlyPayment = (loanAmount * (loanRate / 12)) / (1 - (1 + loanRate / 12) ** (loanYears * 12 * -1))
  monthlyPayment = monthlyPayment.toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  monthlyPaymentElement.textContent = monthlyPayment.toString();
}
