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
}: InputSectionProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>Mortgage Calculator</Title>
        <ClearButton>Clear All</ClearButton>
      </Header>
      <Contents>
        <TextField
          title="Mortgage Amount"
          label="£"
          textfieldType="left"
          value={mortgageAmount}
          handleChange={handleChangeMortgageAmount}
        />
        <InputBox>
          <TextField
            title="Mortgage Term"
            label="Year"
            textfieldType="right"
            value={mortgageTerm}
            handleChange={handleChangeMortgageTerm}
          />
          <TextField
            title="Interest Rate"
            label="%"
            textfieldType="right"
            value={interestRate}
            handleChange={handleChangeInterestRate}
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
        </MortgageType>
        <ButtonBox>
          <Button
            icon={<IconCalculator />}
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

export default InputSection;
