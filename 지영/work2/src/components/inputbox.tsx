// import tw from "twin.macro";
import styled from "styled-components";

const InputBox = ({
  label,
  unitFront,
  unitBack,
  margin,
  setMortgage,
  setTerm,
  setRate,
}) => {
  const handleInput = (value) => {
    if (setMortgage) {
      setMortgage(value);
    }
    if (setTerm) {
      setTerm(value);
    }
    if (setRate) {
      setRate(value);
    }
  };
  return (
    <InputWrapper margin={margin}>
      <Label>{label}</Label>
      <InputInnerWrapper>
        {unitFront && <UnitFront>{unitFront}</UnitFront>}
        <Input onChange={(e) => handleInput(e.target.value)}></Input>
        {unitBack && <UnitBack>{unitBack}</UnitBack>}
      </InputInnerWrapper>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  margin-right: ${(props) => props.margin && "20px"};
`;
const Label = styled.div`
  text-align: left;
`;
const InputInnerWrapper = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 5px;
`;

const UnitFront = styled.div`
  background-color: lightblue;
  padding: 10px 20px;
  border-radius: 5px 0 0 5px;
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
`;

const UnitBack = styled.div`
  background-color: lightblue;
  padding: 10px 20px;
  border-radius: 0 5px 5px 0;
`;

export default InputBox;
