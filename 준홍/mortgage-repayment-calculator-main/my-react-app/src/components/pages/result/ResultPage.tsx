import styled from "styled-components";
import { resultPaymentProps } from "../../../types/type";
import { formatNumber } from "../../../utils/mortgage";

function ResultPage({ result }: { result: resultPaymentProps }) {
  return (
    <ResultPageWrapper>
      <ResultPageTitle>Your results</ResultPageTitle>
      <ResultPageContent>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </ResultPageContent>
      <RepayInfoWrapper>
        <RepayWrapper>
          <RepayTitle>Your monthly repayments</RepayTitle>
          <MonthRepayPrice>
            £{formatNumber({ value: result.monthlyPayment })}
          </MonthRepayPrice>
        </RepayWrapper>
        <HrLine />
        <RepayWrapper>
          <RepayTitle>Total you'll repay over the term</RepayTitle>
          <RepayTermPrice>
            £{formatNumber({ value: result.totalPayment })}
          </RepayTermPrice>
        </RepayWrapper>
      </RepayInfoWrapper>
    </ResultPageWrapper>
  );
}

export default ResultPage;

const ResultPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ResultPageTitle = styled.h3`
  margin: 0;
  color: white;
`;

const ResultPageContent = styled.p`
  margin: 0;
  font-size: 14px;
  color: hsl(200, 24%, 40%);
`;

const RepayInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  background-color: hsl(
    200.99999999999997,
    21.73913043478261%,
    18.03921568627451%
  );
  border-radius: 20px;
  border-top: 3px solid yellow;
`;

const RepayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HrLine = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: gray;
`;

const RepayTitle = styled.h4`
  margin: 0;
  font-size: 14px;
  color: hsl(200, 24%, 40%);
`;

const MonthRepayPrice = styled.h4`
  margin: 0;
  font-size: 50px;
  color: yellow;
`;

const RepayTermPrice = styled.p`
  font-size: 20px;
  margin: 0;
  color: white;
`;
