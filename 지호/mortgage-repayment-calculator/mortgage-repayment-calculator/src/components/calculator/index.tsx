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

  const [mortgageAmountError, setMortgageAmountError] = useState(false);
  const [mortgageTermError, setMortgageTermError] = useState(false);
  const [interestRateError, setInterestRateError] = useState(false);
  const [checkedRadioError, setCheckedRadioError] = useState(false);

  const handleChangeMortgageAmount = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const onlyNums = formatMoney(e.target.value);
    setMortgageAmountError(false);
    setMortgageAmount(onlyNums);
  };

  const handleChangeMortgageTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = formatNumber(e.target.value);
    setMortgageTermError(false);
    setMortgageTerm(onlyNums);
  };

  const handleChangeInterestRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = formatPercent(e.target.value);
    setInterestRateError(false);
    setInterestRate(onlyNums);
  };

  const handleCheckedRadio = (index: number) => {
    const newChecked = new Array(checkedRadio.length).fill(false);
    newChecked[index] = true;
    setCheckedRadio(newChecked);
    setCheckedRadioError(false);
  };

  const clearInput = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setCheckedRadio([]);
    setMortgageAmountError(false);
    setMortgageTermError(false);
    setInterestRateError(false);
    setCheckedRadioError(false);
  };

  const clearResult = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setCheckedRadio([]);
    setMonthlyRepayment(0);
    setTotalRepayment(0);
    setMortgageAmountError(false);
    setMortgageTermError(false);
    setInterestRateError(false);
    setCheckedRadioError(false);
  };

  const checkError = () => {
    if (mortgageAmount === "") {
      setMortgageAmountError(true);
    }
    if (mortgageTerm === "") {
      setMortgageTermError(true);
    }
    if (interestRate === "") {
      setInterestRateError(true);
    }
    if (checkedRadio.length === 0) {
      setCheckedRadioError(true);
    }
  };

  const calculateMonthlyRepayment = () => {
    const monthlyInterestRate = Number(interestRate) / 100 / 12;
    const totalPayments = Number(mortgageTerm) * 12;
    const monthlyPayment =
      (Number(mortgageAmount.replace(/,/g, "")) * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

    if (
      mortgageAmount &&
      mortgageTerm &&
      interestRate &&
      checkedRadio.some(Boolean)
    ) {
      setMonthlyRepayment(monthlyPayment);
      setTotalRepayment(monthlyPayment * totalPayments);
      clearInput();
    } else {
      checkError();
    }
  };

  return (
    <Wrapper>
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
        clearResult={clearResult}
        mortgageAmountError={mortgageAmountError}
        mortgageTermError={mortgageTermError}
        interestRateError={interestRateError}
        checkedRadioError={checkedRadioError}
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
