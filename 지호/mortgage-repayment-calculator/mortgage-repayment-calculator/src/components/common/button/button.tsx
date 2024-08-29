import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes, ReactNode } from "react";
import tw from "twin.macro";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: ReactNode;
}
const Button = ({ text, icon, ...rest }: Props) => {
  return (
    <Wrapper {...rest}>
      {icon}
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.button(({ disabled }) => [
  tw`
  flex gap-4
  px-27 py-14 flex-center h-48
  rounded-24 bg-yellow clickable border-solid border-none
  font-m-2b text-green
  disabled:(bg-gray-400 border-solid border-gray-400 non-clickable)
    `,

  css`
    svg path {
      fill: ${disabled ? "#999" : "#333"};
    }
  `,
]);

export default Button;
