import { css } from "@emotion/react/macro";
import styled from "@emotion/styled";
import { InputHTMLAttributes, useState } from "react";
import tw from "twin.macro";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  value?: string;
  amount?: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

const YearTextField = ({
  title,
  value,
  amount,
  label,
  error,
  errorMessage,
  ...rest
}: Props) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 숫자 이외의 문자를 제거
    let onlyNums = e.target.value.replace(/[^0-9]/g, "");
    // 0이 맨앞에오면 안되는 자연수만 되게 하는 로직
    if (onlyNums.length > 1 && onlyNums.startsWith("0")) {
      onlyNums = onlyNums.replace(/^0+/, "");
    }
    setInputValue(onlyNums);
  };

  return (
    <Wrapper>
      <InputTitle>{title}</InputTitle>
      <InputWrapper error={error} value={value as string}>
        <Input {...rest} value={inputValue} onChange={handleChange} />
        <Tag>{label ?? "years"}</Tag>
      </InputWrapper>
      {amount && (
        <CaptionText error={error}>
          {error ? errorMessage : `$${amount} Total`}
        </CaptionText>
      )}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-8 p-4
`;

const InputTitle = tw.div`
  font-l-m text-green
`;

interface InputWrapperProps {
  error: boolean | undefined;
  value: string;
}

const InputWrapper = styled.div<InputWrapperProps>(({ error, value }) => [
  tw`
    w-full flex items-center
    border-solid border-darkgreen border-1 rounded-8 
    focus-within:(border-black text-black)
  `,
  value && tw`text-black`,
  error && tw`border-black focus-within:(border-black)`,
  error &&
    css`
      background: rgba(240, 68, 82, 0.05);
    `,
]);

const Input = tw.input`
  w-full bg-transparent font-m-b
  p-12 border-none
  focus-visible:(outline-none)
`;

const Tag = tw.div`
  flex py-12 px-16 rounded-r-8 font-m-b bg-skyblue
`;

interface CaptionTextProps {
  error: boolean | undefined;
}

const CaptionText = styled.div<CaptionTextProps>(({ error }) => [
  tw` font-s-r`,
  error && tw`text-black`,
]);

export default YearTextField;
