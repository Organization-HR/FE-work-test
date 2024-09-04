import emptyImg from "../../../assets/images/illustration-empty.svg";
import styled from "styled-components";

function EmptyPage() {
  return (
    <EmptyContainer>
      <EmptyImg src={emptyImg} />
      <EmptyTitle>Results shown here</EmptyTitle>
      <EmptyContent>
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </EmptyContent>
    </EmptyContainer>
  );
}

export default EmptyPage;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyImg = styled.img``;

const EmptyTitle = styled.h3`
  color: white;
`;

const EmptyContent = styled.p`
  color: white;
  text-align: center;
`;
