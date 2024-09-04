import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import CalculateContainer from "./components/calculate-container";
import ResultContainer from "./components/result-container";

function App() {
  const [resultMonthly, setResultMonthly] = useState();
  const [resultTotal, setResultTotal] = useState();
  return (
    <Wrapper>
      {/* <Wrapper> */}
      {/* <div>hello world</div> */}
      {/* <InnerWrapper> */}
      <CalculateContainer
        setResultMonthly={setResultMonthly}
        setResultTotal={setResultTotal}
      />
      <ResultContainer
        resultTotal={resultTotal}
        resultMonthly={resultMonthly}
      />
      {/* </InnerWrapper> */}
      {/* </Wrapper> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: #f9f9f9;
`;

const InnerWrapper = styled.div``;

export default App;
