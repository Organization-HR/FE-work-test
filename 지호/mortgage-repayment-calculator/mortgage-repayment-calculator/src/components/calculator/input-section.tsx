import React from "react";
import Button from "../common/button/button";
import RadioButton from "../common/button/radio-button";
import MoneyTextField from "../common/textfield/money-textfield";
import PercentTextField from "../common/textfield/percent-textfield";
import YearTextField from "../common/textfield/year-textfield";
import tw from "twin.macro";
import { IconCalculator } from "../icon";

const InputSection = () => {
  const [checkedRadio, setCheckedRadio] = React.useState<boolean[]>([]);
  const handleCheckedRadio = (index: number) => {
    const newChecked = new Array(checkedRadio.length).fill(false);
    newChecked[index] = true;
    setCheckedRadio(newChecked);
  };

  return (
    <Wrapper>
      <Title>Mortgage Calculator</Title>
      <Contents>
        <MoneyTextField title="Mortgage Amount" />
        <InputBox>
          <YearTextField title="Mortgage Term" />
          <PercentTextField title="Interest Rate" />
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
          <Button icon={<IconCalculator />} text="Calculate Repayments" />
        </ButtonBox>
      </Contents>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-8 p-24 w-full
`;

const Title = tw.h1`
  font-xxl-b text-green
`;

const Contents = tw.div`
  flex flex-col gap-8
`;

const InputBox = tw.div`
  flex items-center gap-8
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
