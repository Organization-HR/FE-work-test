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
  border-solid border border-green rounded-4 transition-colors duration-300
  font-l-b
`,
  checked && tw`border-yellow bg-yellow bg-opacity-40`,
]);

const Text = tw.div` 
`;

const RadioInput = styled.input(() => [
  tw`w-20 h-20 cursor-pointer accent-yellow`,
  css`
    border-color: red;
  `,
]);

export default RadioButton;
