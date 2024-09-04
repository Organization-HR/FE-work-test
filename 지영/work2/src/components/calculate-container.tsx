import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import InputBox from "./inputbox";
import SelectBox from "./selectbox";

const CalculateContainer = ({ setResultMonthly, setResultTotal }) => {
  const [mortgage, setMortgage] = useState(0);
  const [term, setTerm] = useState(0);
  const [rate, setRate] = useState(0);
  const [monthlyRepayments, setMonthlyRepayments] = useState(0);
  const [mortgageType, setMortgageType] = useState("");

  useEffect(() => {
    setResultMonthly(monthlyRepayments.toFixed(2));
    setResultTotal((monthlyRepayments * 12 * 25).toFixed(2));
  }, [monthlyRepayments]);

  const calculateRate = () => {
    let monthlyRate = (rate * 0.01) / 12;
    let numOfPayments = term * 12;
    if (mortgageType == "Repayment") {
      setMonthlyRepayments(
        (mortgage * (monthlyRate * Math.pow(1 + monthlyRate, numOfPayments))) /
          (Math.pow(1 + monthlyRate, numOfPayments) - 1)
      );
    } else {
      setMonthlyRepayments(mortgage * monthlyRate);
    }
  };

  return (
    <Wrapper>
      <Title>Mortgage Calculator</Title>
      <InputBox
        unitFront="$"
        label="Mortgage Amount"
        setMortgage={setMortgage}
      />
      <FlexBox>
        <InputBox
          unitBack="years"
          label="Mortgage Term"
          margin={true}
          setTerm={setTerm}
        />
        <InputBox unitBack="%" label="Interest Rate" setRate={setRate} />
      </FlexBox>
      <SelectBox
        label="Mortgage Type"
        content="Repayment"
        checked={mortgageType}
        setMortgageType={setMortgageType}
      />
      <SelectBox
        content="Interest Only"
        checked={mortgageType}
        setMortgageType={setMortgageType}
      />
      <button onClick={calculateRate}>btn</button>
    </Wrapper>
  );
};

const Title = styled.div`
  font-size: 20px;
`;

const Wrapper = styled.div`
  width: 60%;
  height: 60%;
  max-width: 800px;
  // margin: 0 auto;
  padding: 40px 30px;
  background-color: #f9f9f9;
  border-radius: 20px 0 0 20px;
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  //   flex-wrap: wrap;
  //   align-items: stretch;
  justify-content: space-between;
`;
export default CalculateContainer;
