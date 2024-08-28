import tw from "twin.macro";

const ResultSection = () => {
  return (
    <Wrapper>
      <Title>Your results</Title>
      <Text>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </Text>
      <Contents>
        <Repayments>
          <SubHead>Your monthly repayments</SubHead>
          1231321
        </Repayments>
        <TotalRepay>
          <SubHead>Total you'll repay over the term</SubHead>
          1231321
        </TotalRepay>
      </Contents>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-8 bg-green p-24 w-full
  md:(rounded-br-24 rounded-bl-24 rounded-tr-24)
`;

const Title = tw.h1`
  font-xxl-b text-white
`;

const Text = tw.p`
  font-m-r text-gray-400
`;

const Contents = tw.div`
  flex flex-col p-24 gap-8 bg-darkgreen
`;

const Repayments = tw.div`
  font-m-b text-white
`;

const SubHead = tw.div`
  font-m-b text-gray-400
`;

const TotalRepay = tw.div`
  font-m-b text-white
`;

export default ResultSection;
