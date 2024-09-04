import styled from "styled-components";
import "./App.css";
import ResultPage from "./components/pages/result/ResultPage";
import CalculatorPage from "./components/pages/calculator/CalculatorPage";
import { useForm } from "react-hook-form";
import EmptyPage from "./components/pages/result/EmptyPage";
import { useEffect, useState } from "react";
import { calculateMortgage } from "./utils/mortgage";
import { resultPaymentProps } from "./types/type";

function App() {
  const [result, setResult] = useState<resultPaymentProps>({
    monthlyPayment: 0,
    totalPayment: 0,
  });
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const mortgageAmount = watch("Mortgage Amount") || "";
  const mortgageTerm = watch("Mortgage Term") || "";
  const interestRate = watch("Interest Rate") || "";

  useEffect(() => {
    if (mortgageAmount || mortgageTerm || interestRate) {
      setIsSubmit(false);
    }
  }, [mortgageAmount, mortgageTerm, interestRate]);

  const onSubmit = (data: any) => {
    setResult(
      calculateMortgage({
        mortgageAmount: Number(data["Mortgage Amount"]),
        mortgageTerm: Number(data["Mortgage Term"]),
        interestRate: Number(data["Interest Rate"]),
      })
    );
    setIsSubmit(true);
  };

  const handleReset = () => {
    setIsSubmit(false);
    reset();
  };

  return (
    <Background>
      <ContainerWrapper>
        <CalculatorPage
          register={register}
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
          reset={handleReset}
        />
        <ResultContainer>
          {isSubmit && isValid ? <ResultPage result={result} /> : <EmptyPage />}
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
  overflow: hidden;
`;

const ResultContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  padding: 30px;
  border-radius: 0 30px 30px 80px;
  background-color: hsl(202, 55%, 16%);
`;
