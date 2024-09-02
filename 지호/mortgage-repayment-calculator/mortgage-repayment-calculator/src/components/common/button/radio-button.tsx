import { css } from "@emotion/react";
import styled from "@emotion/styled";
import tw from "twin.macro";

interface RadioButtonProps {
  onChange: () => void;
  checked: boolean;
  text: string;
}
const RadioButton = ({ onChange, checked, text }: RadioButtonProps) => {
  return (
    <Wrapper checked={checked} onClick={onChange}>
      <RadioInput type="radio" checked={checked} onChange={onChange} />
      <Text>{text}</Text>
    </Wrapper>
  );
};

interface WrapperProps {
  checked: boolean;
}

const Wrapper = styled.div<WrapperProps>(({ checked }) => [
  tw`
  flex items-center gap-10 pl-11 pr-12 py-2 min-w-148 min-h-40
  border-solid border border-green rounded-4
  font-l-b cursor-pointer


`,
  checked && tw`border-solid border-2 border-yellow bg-yellow bg-opacity-40`,
]);

const Text = tw.div` 
`;

const RadioInput = styled.input(() => [
  tw`w-20 h-20 border-solid border-2 border-green rounded-full`,
  css`
    -webkit-appearance: none; // 웹킷 브라우저에서 기본 스타일 제거
    -moz-appearance: none; // 모질라 브라우저에서 기본 스타일 제거
    appearance: none; // 기본 브라우저에서 기본 스타일 제거
    outline: none; // focus 시에 나타나는 기본 스타일 제거
    cursor: pointer;
    &:checked {
      background-color: #e5e55a; // 체크 시 내부 원으로 표시될 색상
      border: 3px solid white; // 테두리가 아닌, 테두리와 원 사이의 색상
      box-shadow: 0 0 0 1.6px #e5e55a; // 얘가 테두리가 됨
    }
  `,
]);

export default RadioButton;
