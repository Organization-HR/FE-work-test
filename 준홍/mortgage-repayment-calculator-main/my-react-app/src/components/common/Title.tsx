import styled from "styled-components";

interface TitleProps {
  title: string;
  reset: () => void;
}

function Title({ title, reset }: TitleProps) {
  return (
    <TitleWrapper>
      <TitleName>{title}</TitleName>
      <ClearAllButton onClick={reset}>Clear All</ClearAllButton>
    </TitleWrapper>
  );
}

export default Title;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleName = styled.h1``;

const ClearAllButton = styled.span`
  cursor: pointer;
  border-bottom: 1px solid grey;
`;
