import React from "react";
import styled from "styled-components";

function ResultPage() {
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
          <RepayPrice>$1,797.74</RepayPrice>
        </RepayWrapper>
        <RepayWrapper>
          <RepayTitle>Total you'll repay over the term</RepayTitle>
          <RepayPrice>$539,322.94</RepayPrice>
        </RepayWrapper>
      </RepayInfoWrapper>
    </ResultPageWrapper>
  );
}

export default ResultPage;

const ResultPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ResultPageTitle = styled.h3`
  color: white;
`;

const ResultPageContent = styled.p`
  color: gray;
`;

const RepayInfoWrapper = styled.div`
  background-color: brown;
  border-radius: 20px;
  border-top: 3px solid yellow;
`;

const RepayWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RepayTitle = styled.h4`
  color: gray;
`;

const RepayPrice = styled.p`
  color: white;
`;
