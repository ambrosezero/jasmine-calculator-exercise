



describe('getCurrentUIValues', () => {
  // it('should retrieve the current values in the UI', function () {
  //   // ...
  //   expect((getCurrentUIValues().amount).not.toBefalsy())
  // });


  // it("", function () {
  //   // ..
  // });
})
/// etc

describe('setUpInitialValues', () => {



})

describe('update', () => {



})

describe('update', () => {



})

describe('calculateMonthlyPayment', () => {

  // the following values and objects exist for testing purposes only
  const testValues1 = {
    loanAmount: 100, loanYears: 1, loanRate: 0.20,
  }
  const testValues2 = {
    loanAmount: 100, loanYears: 0, loanRate: 0.20,
  }
  const testValues3 = {
    loanAmount: 0, loanYears: 1, loanRate: 0.20,
  }
  const testValues4 = {
    loanAmount: Math.random() * 100, loanYears: Math.random() * 10, loanRate: Math.random()
  }

  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment(testValues1)).toEqual(9.26)
    // expect(calculateMonthlyPayment(testValues2)).toEqual(9.26)
    // expect(calculateMonthlyPayment(testValues3)).toEqual(9.26)
    // expect(calculateMonthlyPayment(testValues4)).toEqual(9.26)

  })


  it('should return a result with 2 decimal places', function () {
    expect(calculateMonthlyPayment(testValues1))
  })
})

describe('update', () => {



})