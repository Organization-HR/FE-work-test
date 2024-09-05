import { FieldErrors, UseFormRegister } from "react-hook-form";
import styled from "styled-components";

interface InputProps {
  title: string;
  iconLocation: "left" | "right";
  iconContent: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

function Input({
  title,
  iconLocation,
  iconContent,
  register,
  errors,
}: InputProps) {
  return (
    <InputContainer>
      <InputTitle>{title}</InputTitle>
      <InputLabel>
        <InputWrapper>
          {iconLocation === "left" && (
            <IconContentSpan>{iconContent}</IconContentSpan>
          )}
          <CustomInput
            {...register(title, {
              required: "This field is required",
              validate: (value) => {
                if (value[0] === "0" && value.length > 0) {
                  return "The first number cannot be 0";
                }
                if (isNaN(Number(value))) {
                  return "Only numbers are allowed";
                }
                return true;
              },
            })}
          />
          {iconLocation === "right" && (
            <IconContentSpan>{iconContent}</IconContentSpan>
          )}
        </InputWrapper>
      </InputLabel>
      {errors[title] && (
        <ErrorMessage>{errors[title]?.message?.toString()}</ErrorMessage>
      )}
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

const InputTitle = styled.h2`
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

const InputLabel = styled.label``;

const InputWrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

const CustomInput = styled.input`
  border: 1px solid hsl(203, 41%, 72%);
  box-sizing: border-box;
  flex: 1;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const IconContentSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: hsl(203, 41%, 72%);
  line-height: 1.5;
  box-sizing: border-box;
`;

const ErrorMessage = styled.p`
  padding: 0;
  margin: 0;
  color: red;
  font-size: 12px;
`;
