import React from "react";
import styled from "styled-components";

interface RadioButtonProps {
  title: string;
  itemsList: string[];
}

function RadioButton({ title, itemsList }: RadioButtonProps) {
  return (
    <RadioButtonContainer>
      <RadioButtonTitle>{title}</RadioButtonTitle>
      <RadioButtonItemsWrapper>
        {itemsList?.map((item, index) => (
          <RadioButtonLabel key={index}>
            <CustomRadioButton type="radio" name={title} value={item} />
            <CustomRadioButtonItemName>{item}</CustomRadioButtonItemName>
          </RadioButtonLabel>
        ))}
      </RadioButtonItemsWrapper>
    </RadioButtonContainer>
  );
}

export default RadioButton;

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioButtonTitle = styled.h2``;

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
