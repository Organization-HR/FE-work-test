import React from "react";
import Button from "../common/button";
import TextField from "../common/textfield";

const Calculator = () => {
  return (
    <div>
      <div>
        <h1>Mortgage Repayment Calculator</h1>
        <TextField />
        <TextField />
        <TextField />
        <Button />
      </div>
    </div>
  );
};

export default Calculator;
