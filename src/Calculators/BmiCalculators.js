import { useState } from "react";
export function BMICalculator() {
  const [weight, updateWeightValue] = useState("");
  const [height, updateHeightValue] = useState("");
  const [bmiValue, updateBMIValue] = useState(null);
  function calculateBMIValue() {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedOffBMIValue = bmiValue.toFixed(2);
    updateBMIValue(roundedOffBMIValue);
  }
  function handleWeightInputChange(e) {
    updateWeightValue(e.target.value);
  }
  function handleHeightInputChange(e) {
    updateHeightValue(e.target.value);
  }
  function displayBMIValue() {
    if (bmiValue >= 18.5 && bmiValue <= 24.99) {
      return <div>"You are in a healthy weight range"</div>;
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return <div> "You are overweight"</div>;
    } else if (bmiValue >= 30) {
      return <div> "You are obese"</div>;
    }
  }
  return (
    <div className="container form-container">
      <div>
        <label className="me-1 mt-4">Enter your Weight in kgs:</label>
        <br />

        <input
          className="mt-1"
          type="text"
          value={weight}
          onChange={handleWeightInputChange}
        ></input>
      </div>
      <div>
        <label className="me-1 mt-3">Enter your Height in cms:</label>
        <br />
        <input
          className="mt-1"
          type="text"
          value={height}
          onChange={handleHeightInputChange}
        ></input>
      </div>
      <button
        type="button"
        className="btn btn-primary mt-4"
        onClick={() => {
          calculateBMIValue();
        }}
      >
        Calculate BMI
      </button>
      <div className="mt-2"> Bmi value is : {bmiValue}</div>

      <div className="mt-">{displayBMIValue()}</div>
    </div>
  );
}