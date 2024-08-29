import styled from "@emotion/styled";
import { InputHTMLAttributes, useState } from "react";
import tw from "twin.macro";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  textfieldType?: "left" | "right";
  value?: string;
  amount?: string;
  label?: string;
  error?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  title,
  value,
  label,
  handleChange,
  textfieldType,
  error,
  ...rest
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  return (
    <Wrapper>
      <InputTitle>{title}</InputTitle>
      <InputWrapper value={value as string} error={error || false}>
        {textfieldType === "left" && label && (
          <Tag
            textfieldType={textfieldType}
            focus={isFocused}
            error={error || false}
          >
            {label}
          </Tag>
        )}
        <Input
          {...rest}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {textfieldType === "right" && label && (
          <Tag
            textfieldType={textfieldType}
            focus={isFocused}
            error={error || false}
          >
            {label}
          </Tag>
        )}
      </InputWrapper>
      {error && <ErrorText>This field is required</ErrorText>}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-8
`;

const InputTitle = tw.div`
  font-l-m text-green
`;

interface InputWrapperProps {
  value: string;
  error: boolean;
}

const InputWrapper = styled.div<InputWrapperProps>(({ value, error }) => [
  tw`
    w-full flex items-center
    border-solid border-darkgreen border-1 rounded-8 
    focus-within:(border-black text-black)
  `,
  value && tw`text-black`,
  error && tw`border-red`,
]);

const Input = tw.input`
  w-full bg-transparent font-m-b
  p-12 border-none
  focus-visible:(outline-none)
`;

interface TagProps {
  focus: boolean;
  textfieldType: "left" | "right";
  error: boolean;
}

const Tag = styled.div<TagProps>(({ focus, textfieldType, error }) => [
  tw`flex py-12 px-16 font-m-b bg-skyblue`,
  focus && tw`bg-yellow`,
  textfieldType === "left" && tw`rounded-l-8`,
  textfieldType === "right" && tw`rounded-r-8`,
  error && tw`bg-red text-white`,
]);

const ErrorText = tw.div`
  font-m-b text-red
`;

export default TextField;
