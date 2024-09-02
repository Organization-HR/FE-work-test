import styled from "styled-components";
import Title from "../../common/Title";
import Input from "../../common/Input";
import RadioButton from "../../common/RadioButton";
import Button from "../../common/Button";
import calculatorImg from "../../../assets/images/icon-calculator.svg";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface CalculatorPageProps {
  register: UseFormRegister<any>;
  handleSubmit: () => void;
  reset: () => void;
  errors: FieldErrors<FieldValues>;
}

function CalculatorPage({
  register,
  handleSubmit,
  reset,
  errors,
}: CalculatorPageProps) {
  return (
    <InputConatainer onSubmit={handleSubmit}>
      <Title title="Mortgage Calculator" reset={reset} />
      <Input
        title="Mortgage Amount"
        iconLocation="left"
        iconContent="£"
        register={register}
        errors={errors}
      />
      <TwoInputContainer>
        <Input
          title="Mortgage Term"
          iconLocation="right"
          iconContent="years"
          register={register}
          errors={errors}
        />
        <Input
          title="Interest Rate"
          iconLocation="right"
          iconContent="%"
          register={register}
          errors={errors}
        />
      </TwoInputContainer>
      <RadioButton
        title="Mortgage Type"
        register={register}
        itemsList={["Repayment", "Interest Only"]}
        error={errors}
      />
      <Button icon={calculatorImg} content="Calculate Repayments" />
    </InputConatainer>
  );
}

export default CalculatorPage;

const InputConatainer = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 30px 0 0 30px;
  gap: 20px;
`;

const TwoInputContainer = styled.div`
  display: flex;
  gap: 40px;
`;
