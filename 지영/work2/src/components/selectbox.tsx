// import tw from "twin.macro";
import styled from "styled-components";

const SelectBox = ({ label, content, checked, setMortgageType }) => {
  console.log(content);
  return (
    <SelectBoxWrapper>
      <Label>{label}</Label>
      <SelectInnerWrapper>
        {/* <Select type="radio" checked value="Repayment" /> */}
        <input
          type="radio"
          value={content}
          // defaultChecked={defaultChecked}
          checked={checked == content}
          onChange={() => setMortgageType(content)}
        />
        {content}
      </SelectInnerWrapper>
    </SelectBoxWrapper>
  );
};

const SelectBoxWrapper = styled.div`
  width: 100%;
`;

const SelectInnerWrapper = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
`;
const Label = styled.div`
  text-align: left;
`;

export default SelectBox;
