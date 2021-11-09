
describe('getCurrentUIValues', () => {
  it('should execute without throwing error', function () {
    expect(() => {
      getCurrentUIValues()
    }).not.toThrowError();
  })
  // ????? ANY OTHER TEST I CAN THINK OF WOULD BE REDUNDANT
})


describe('setUpInitialValues', () => {
  it('should execute without throwing an error', function () {
    expect(() => {
      setupIntialValues();
    }).not.toThrowError();
  })

})

describe('update', () => {
  // checks to see if update() throws an error
  it('should execute its nested functions without throwing error', function () {
    expect(() => {
      update()
    }).not.toThrowError();
  })

})

describe('calculateMonthlyPayment', () => {

  // ????? IS IT OK TO COMBINE THINGS TO CHECK, I.E. THE FOLLOWING FUNCTION WHICH CHECKS CORRECTNESS AND DECIMAL PLACES?
  it('should calculate the monthly rate correctly with 2 decimal places', function () {

    // let loanAmount = 100; let loanYears = 1; let loanRate = 0.20;
    document.getElementById("loan-amount").value = 100;
    document.getElementById("loan-years").value = 1;
    document.getElementById("loan-rate").value = 0.20;
    setupIntialValues()
    // the following only works if the expected argument is passed as a string
    expect(calculateMonthlyPayment()).toEqual(9.26)


    document.getElementById("loan-amount").value = 2000;
    document.getElementById("loan-years").value = 5;
    document.getElementById("loan-rate").value = 0.15;
    setupIntialValues()
    // the following only works if the expected argument is passed as a string
    expect(calculateMonthlyPayment()).toEqual(47.58)

  })



})

