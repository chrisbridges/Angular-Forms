function compoundInterest (startingAmount: number, contributionAmount: number, interestRate: number, years: number) {
  return startingAmount * Math.pow((interestRate + 1), years) + 
  contributionAmount * ((Math.pow((1 + interestRate), years) - 1) / interestRate) * (1 + interestRate)
}

// assuming annual compounding, interest rate needs to be converted to a decimal accordingly
  // and contribution amount needs to be calculated into amount contributed yearly