import { FieldErrors, UseFormRegister } from "react-hook-form";
import styled from "styled-components";

interface RadioButtonProps {
  title: string;
  itemsList: string[];
  register: UseFormRegister<any>;
  error: FieldErrors<any>;
}

function RadioButton({ title, itemsList, register, error }: RadioButtonProps) {
  return (
    <RadioButtonContainer>
      <RadioButtonTitle>{title}</RadioButtonTitle>
      <RadioButtonItemsWrapper>
        {itemsList?.map((item, index) => (
          <RadioButtonLabel key={index}>
            <CustomRadioButton
              type="radio"
              value={item}
              {...register(title, { required: "This field is required" })}
            />
            <CustomRadioButtonItemName>{item}</CustomRadioButtonItemName>
          </RadioButtonLabel>
        ))}
        {error[title] && (
          <ErrorMessage>{error[title]?.message?.toString()}</ErrorMessage>
        )}
      </RadioButtonItemsWrapper>
    </RadioButtonContainer>
  );
}

export default RadioButton;

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RadioButtonTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 16px;
`;

const RadioButtonItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RadioButtonLabel = styled.label`
  display: flex;
  gap: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 7px;
`;

const CustomRadioButton = styled.input``;

const CustomRadioButtonItemName = styled.span``;

const ErrorMessage = styled.p`
  padding: 0;
  margin: 0;
  color: red;
  font-size: 12px;
`;
