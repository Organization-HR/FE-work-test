import React from "react";
import Button from "../common/button/button";
import RadioButton from "../common/button/radio-button";
import tw from "twin.macro";
import { IconCalculator } from "../icon";
import TextField from "../common/textfield/textfield";

interface InputSectionProps {
  mortgageAmount: string;
  mortgageTerm: string;
  interestRate: string;
  handleChangeMortgageAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeMortgageTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeInterestRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkedRadio: boolean[];
  handleCheckedRadio: (index: number) => void;
  calculateMonthlyRepayment: () => void;
  clearResult: () => void;
  mortgageAmountError: boolean;
  mortgageTermError: boolean;
  interestRateError: boolean;
  checkedRadioError: boolean;
}

const InputSection = ({
  mortgageAmount,
  mortgageTerm,
  interestRate,
  handleChangeMortgageAmount,
  handleChangeMortgageTerm,
  handleChangeInterestRate,
  checkedRadio,
  handleCheckedRadio,
  calculateMonthlyRepayment,
  clearResult,
  mortgageAmountError,
  mortgageTermError,
  interestRateError,
  checkedRadioError,
}: InputSectionProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>Mortgage Calculator</Title>
        <ClearButton onClick={clearResult}>Clear All</ClearButton>
      </Header>
      <Contents>
        <TextField
          title="Mortgage Amount"
          label="£"
          textfieldType="left"
          value={mortgageAmount}
          handleChange={handleChangeMortgageAmount}
          error={mortgageAmountError}
        />
        <InputBox>
          <TextField
            title="Mortgage Term"
            label="years"
            textfieldType="right"
            value={mortgageTerm}
            handleChange={handleChangeMortgageTerm}
            error={mortgageTermError}
          />
          <TextField
            title="Interest Rate"
            label="%"
            textfieldType="right"
            value={interestRate}
            handleChange={handleChangeInterestRate}
            error={interestRateError}
          />
        </InputBox>
        <MortgageType>
          <TypeTitle>Mortgage Type</TypeTitle>
          {["Repayment", "Interest Only"].map((item, index) => (
            <RadioButton
              key={index}
              onChange={() => handleCheckedRadio(index)}
              checked={checkedRadio[index]}
              text={item}
            />
          ))}
          {checkedRadioError && <ErrorText>This field is required</ErrorText>}
        </MortgageType>
        <ButtonBox>
          <Button
            icon={<IconCalculator />}
            // disabled={
            //   !mortgageAmount ||
            //   !mortgageTerm ||
            //   !interestRate ||
            //   !checkedRadio.some(Boolean)
            // }
            text="Calculate Repayments"
            onClick={calculateMonthlyRepayment}
          />
        </ButtonBox>
      </Contents>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-8 p-24 md:(w-full)
`;

const Header = tw.div`
  flex flex-col md:(flex-row items-center) 
  justify-between items-start
`;

const ClearButton = tw.button`
  font-m-r cursor-pointer
  border-none
  bg-transparent
  underline
`;

const Title = tw.h1`
  font-xxxl-b text-green
`;

const Contents = tw.div`
  flex flex-col gap-8 
`;

const InputBox = tw.div`
  flex flex-col md:flex-row gap-8
`;

const MortgageType = tw.div`
  flex flex-col gap-8
`;

const TypeTitle = tw.div`
  font-l-m text-green
`;

const ButtonBox = tw.div`
  flex mt-8
`;

const ErrorText = tw.div`
  font-m-b text-red
`;

export default InputSection;
