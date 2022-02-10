import React, { useState } from "react";
export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [numMonths, setNumMonth] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const calculate = (e) => {
    e.preventDefault();
    const formValid =
      +loanAmount >= 0 &&
      0 <= +interestRate &&
      +interestRate <= 100 &&
      +numMonths > 0;
    if (!formValid) {
      return;
    }
    setMonthlyPayment((+loanAmount * (1 + +interestRate / 100)) / +numMonths);
  };
  return (
    <div className="App">
      <form onSubmit={calculate}>
        <div>
          <label>loan amount</label>
          <input
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
        <div>
          <label>interest rate</label>
          <input
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div>
          <label>number of months to pay off loan</label>
          <input
            value={numMonths}
            onChange={(e) => setNumMonth(e.target.value)}
          />
        </div>
        <button type="submit">calculate monthly payment</button>
      </form>
      <p>monthly payment: {monthlyPayment.toFixed(2)}</p>
    </div>
  );
}
