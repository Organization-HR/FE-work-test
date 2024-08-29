import tw from "twin.macro";
import InputSection from "./input-section";
import ResultSection from "./result-section";

const Calculator = () => {
  return (
    <Wrapper>
      <InputSection />
      <ResultSection monthlyRepayment={0} totalRepayment={0} />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex w-full flex-col bg-white rounded-24
  md:(flex-row w-848)
`;

export default Calculator;
