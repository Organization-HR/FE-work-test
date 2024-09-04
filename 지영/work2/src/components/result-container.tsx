import { useState } from "react";
import styled from "styled-components";

const ResultContainer = ({ resultTotal, resultMonthly }) => {
  return (
    <OuterWrapper>
      <Wrapper>
        <Title>Your results</Title>
        <Paragraph>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </Paragraph>
        <ResultBox>
          <div>Your monthly repayments</div>
          <ResultMontlyRepayment>{resultTotal}</ResultMontlyRepayment>
          <div>Total you'll repay over the term</div>
          <ResultTotalRepayment>{resultMonthly}</ResultTotalRepayment>
        </ResultBox>
      </Wrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  width: 60%;
  height: 60%;
  //   background-color: ;
  border-radius: 0 20px 20px 0;
`;
const Wrapper = styled.div`
  //   width: 60%;
  height: 100%;
  max-width: 800px;
  text-align: left;
  padding: 40px 30px;
  background-color: #123041;
  color: white;
  border-radius: 0 20px 20px 50px;
`;

const Paragraph = styled.div`
  color: lightgray;
`;
const Title = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ResultBox = styled.div`
  border-top: 5px solid #d8dc3a;
  border-radius: 15px;
  padding: 30px;
  color: lightgray;
  background-color: #0f2531;
`;

const ResultMontlyRepayment = styled.div`
  font-size: 7vw;
  color: #d8dc3a;
  border-bottom: 1px solid;
  font-weight: bold;
`;

const ResultTotalRepayment = styled.div`
  font-size: 3vw;
  font-weight: bold;
  color: white;
`;
const FlexBox = styled.div`
  width: 100%;
  display: flex;
  //   flex-wrap: wrap;
  //   align-items: stretch;
  justify-content: space-between;
`;
export default ResultContainer;
