import styled from "styled-components";
import "./App.css";
import Title from "./components/common/Title";
import Input from "./components/common/Input";
import RadioButton from "./components/common/RadioButton";
import Button from "./components/common/Button";
import calculatorImg from "./assets/images/icon-calculator.svg";
import EmptyPage from "./components/pages/result/EmptyPage";
import ResultPage from "./components/pages/result/ResultPage";

function App() {
  return (
    <Background>
      <ContainerWrapper>
        <InputConatainer>
          <Title title="Mortgage Calculator" />
          <Input title="Mortgage Amount" iconLocation="left" iconContent="$" />
          <div style={{ width: "100%", display: "flex", flex: 1, gap: "40px" }}>
            <Input
              title="Mortgage Amount"
              iconLocation="right"
              iconContent="years"
            />
            <Input
              title="Mortgage Amount"
              iconLocation="right"
              iconContent="%"
            />
          </div>
          <RadioButton
            title="Mortgage Type"
            itemsList={["Repayment", "interest Only"]}
          />
          <Button icon={calculatorImg} content="Calculate Repayments" />
        </InputConatainer>
        <ResultContainer>
          {/* <EmptyPage /> */}
          <ResultPage />
        </ResultContainer>
      </ContainerWrapper>
    </Background>
  );
}

export default App;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: hsl(202, 86%, 94%);
`;

const ContainerWrapper = styled.div`
  width: 60%;
  background-color: white;
  border: 1px solid black;
  border-radius: 30px;
  display: flex;
  overflow: hidden; /* 추가 */
`;

const InputConatainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 30px 0 0 30px;
`;

const ResultContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  padding: 30px;
  border-radius: 0 30px 30px 80px;
  background-color: hsl(202, 55%, 16%);
`;
