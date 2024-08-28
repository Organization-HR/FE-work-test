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

const MoneyTextField = ({
  title,
  value,
  amount,
  label,
  error,
  errorMessage,
  ...rest
}: Props) => {
  // 천 단위로 콤마 찍힌 값
  const [formattedValue, setFormattedValue] = useState(value);
  // 숫자 이외의 문자를 제거한 값
  const [rawValue, setRawValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 숫자 이외의 문자를 제거
    let onlyNums = e.target.value.replace(/[^0-9]/g, "");

    // 0이 맨앞에오면 안되는 자연수만 되게 하는 로직
    if (onlyNums.length > 1 && onlyNums.startsWith("0")) {
      onlyNums = onlyNums.replace(/^0+/, "");
    }
    setRawValue(onlyNums);
    // 천 단위로 콤마 찍기
    const formattedValue = onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setFormattedValue(formattedValue);
  };

  return (
    <Wrapper>
      <InputTitle>{title}</InputTitle>
      <InputWrapper error={error} value={value as string}>
        <Tag>{label ?? "£"}</Tag>
        <Input {...rest} value={formattedValue} onChange={handleChange} />
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
  flex flex-col gap-8
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
  flex py-12 px-16 rounded-l-8 font-m-b bg-skyblue
`;

interface CaptionTextProps {
  error: boolean | undefined;
}

const CaptionText = styled.div<CaptionTextProps>(({ error }) => [
  tw` font-s-r`,
  error && tw`text-black`,
]);

export default MoneyTextField;
