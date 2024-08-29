import tw from "twin.macro";
import InputSection from "./input-section";
import ResultSection from "./result-section";
import { useState } from "react";
import { formatMoney, formatNumber, formatPercent } from "../../utils/string";

const Calculator = () => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [checkedRadio, setCheckedRadio] = useState<boolean[]>([]);
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  const handleChangeMortgageAmount = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const onlyNums = formatMoney(e.target.value);
    setMortgageAmount(onlyNums);
  };

  const handleChangeMortgageTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = formatNumber(e.target.value);
    setMortgageTerm(onlyNums);
  };

  const handleChangeInterestRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = formatPercent(e.target.value);
    setInterestRate(onlyNums);
  };

  const handleCheckedRadio = (index: number) => {
    const newChecked = new Array(checkedRadio.length).fill(false);
    newChecked[index] = true;
    setCheckedRadio(newChecked);
  };

  const clearResult = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setCheckedRadio([]);
  };

  const calculateMonthlyRepayment = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = mortgageTerm * 12;
    const monthlyPayment =
      (mortgageAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    setMonthlyRepayment(monthlyPayment);
    setTotalRepayment(monthlyPayment * totalPayments);
    clearResult();
  };

  return (
    <Wrapper>
      <div>
        {mortgageAmount}
        {mortgageTerm}
        {interestRate}
      </div>
      <InputSection
        mortgageAmount={mortgageAmount}
        mortgageTerm={mortgageTerm}
        interestRate={interestRate}
        handleChangeMortgageAmount={handleChangeMortgageAmount}
        handleChangeMortgageTerm={handleChangeMortgageTerm}
        handleChangeInterestRate={handleChangeInterestRate}
        checkedRadio={checkedRadio}
        handleCheckedRadio={handleCheckedRadio}
        calculateMonthlyRepayment={calculateMonthlyRepayment}
      />
      <ResultSection
        monthlyRepayment={monthlyRepayment}
        totalRepayment={totalRepayment}
      />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex w-full flex-col bg-white rounded-24
  md:(flex-row w-848)
`;

export default Calculator;
