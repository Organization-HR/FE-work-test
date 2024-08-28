import tw from "twin.macro";

interface RadioButtonProps {
  onChange: () => void;
  checked: boolean;
  text: string;
}
const RadioButton = ({ onChange, checked, text }: RadioButtonProps) => {
  return (
    <Wrapper onClick={onChange}>
      <RadioInput type="radio" checked={checked} onChange={onChange} />
      <Text>{text}</Text>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex items-center gap-10 pl-11 pr-12 py-9 min-w-148 min-h-40
  border-solid border border-blue rounded-4 transition-colors duration-300
  hover:(border-blue)
`;
const Text = tw.div` 
  
`;

const RadioInput = tw.input`
  w-20 h-20
  border-solid border border-gray-500 rounded-full
  cursor-pointer transition-colors duration-300
`;

export default RadioButton;
