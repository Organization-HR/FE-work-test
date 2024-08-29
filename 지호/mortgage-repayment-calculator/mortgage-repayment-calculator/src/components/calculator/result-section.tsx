import tw from "twin.macro";
import { IllustrationEmpty } from "../illustration";

interface ResultSectionProps {
  monthlyRepayment?: number;
  totalRepayment?: number;
}

const ResultSection = ({
  monthlyRepayment,
  totalRepayment,
}: ResultSectionProps) => {
  return (
    <Wrapper>
      {monthlyRepayment && totalRepayment ? (
        <>
          <Title>Your results</Title>
          <Text>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </Text>
          <Contents>
            <Repayments>
              <SubHead>Your monthly repayments</SubHead>
              <MonthlyRepayment>
                {monthlyRepayment ? `£${monthlyRepayment}` : "0"}
              </MonthlyRepayment>
            </Repayments>
            <Divider />
            <TotalRepay>
              <SubHead>Total you'll repay over the term</SubHead>
              <TotalRepayment>{totalRepayment}</TotalRepayment>
            </TotalRepay>
          </Contents>
        </>
      ) : (
        <EmptyContainer>
          <IllustrationEmpty />
          <EmptyTitle>Results shown here</EmptyTitle>
          <EmptyText>
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </EmptyText>
        </EmptyContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col bg-green p-24 gap-12 justify-center
  md:(rounded-br-24 rounded-bl-24 rounded-tr-24 w-full)
`;

const Title = tw.div`
  font-xxl-b text-white
`;

const Text = tw.p`
  font-m-r text-gray-400
`;

const Contents = tw.div`
  flex flex-col p-24 gap-8 bg-darkgreen 
  rounded-12
  border-solid border-t-4 border-t-yellow
`;

const Repayments = tw.div`
  flex flex-col gap-8 pb-24
`;

const Divider = tw.div`
  w-full h-1 bg-gray-800
`;

const SubHead = tw.div`
  font-m-b text-gray-400
`;

const MonthlyRepayment = tw.div`
  font-xxxxl-b text-yellow
`;

const TotalRepayment = tw.div`
  font-xxl-b text-white
`;

const TotalRepay = tw.div`
  flex flex-col gap-8 pt-24
`;

const EmptyContainer = tw.div`
  flex flex-col items-center gap-8
`;

const EmptyTitle = tw.div`
  font-xxl-b text-white
`;

const EmptyText = tw.p`
  text-center font-m-r text-gray-400
`;

export default ResultSection;
