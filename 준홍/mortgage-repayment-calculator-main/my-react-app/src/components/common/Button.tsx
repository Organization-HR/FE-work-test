import React, { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  icon?: string;
  content?: string;
}

function Button({ icon, content }: ButtonProps) {
  return (
    <ButtonWrapper>
      {icon && <ButtonIcon src={icon} alt={"calculator"} />}
      <ButtonContent>{content}</ButtonContent>
    </ButtonWrapper>
  );
}

export default Button;

const ButtonWrapper = styled.div`
  width: 50%;
  border-radius: 50px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  background-color: #cfc351;
`;

const ButtonIcon = styled.img``;

const ButtonContent = styled.span``;
