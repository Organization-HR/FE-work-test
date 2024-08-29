import React from "react";
import styled from "styled-components";

interface InputProps {
  title: string;
  iconLocation: "left" | "right";
  iconContent: string;
}

function Input({ title, iconLocation, iconContent }: InputProps) {
  return (
    <InputContainer>
      <InputTitle>{title}</InputTitle>
      <InputLabel>
        <InputWrapper>
          {iconLocation === "left" && (
            <IconContentSpan>{iconContent}</IconContentSpan>
          )}
          <CustomInput />
          {iconLocation === "right" && (
            <IconContentSpan>{iconContent}</IconContentSpan>
          )}
        </InputWrapper>
      </InputLabel>
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  flex: 1;
`;

const InputTitle = styled.h2``;

const InputLabel = styled.label``;

const InputWrapper = styled.div`
  display: flex;
  align-items: stretch; /* 자식 요소의 높이를 동일하게 맞춤 */
`;

const CustomInput = styled.input`
  border: 1px solid hsl(203, 41%, 72%);
  box-sizing: border-box; /* padding 포함 높이를 맞추기 위해 사용 */
  flex: 1;
`;

const IconContentSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: hsl(203, 41%, 72%);
  line-height: 1.5; /* input과 동일한 line-height를 설정 */
  box-sizing: border-box;
`;
